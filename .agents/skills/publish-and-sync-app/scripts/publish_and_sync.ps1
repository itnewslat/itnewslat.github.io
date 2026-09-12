# Script de publicacion completa que valida, publica el post y actualiza /app
param (
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$FilePath,

    [Parameter(Mandatory = $false)]
    [string]$CommitMessage
)

$ErrorActionPreference = "Stop"

# Rutas clave
$scriptDir = $PSScriptRoot
$repoRoot = (Resolve-Path (Join-Path -Path $scriptDir -ChildPath "..\..\..\..")).Path
$publishScript = Join-Path -Path $repoRoot -ChildPath ".agents\skills\publish-itnews\scripts\publish_post.ps1"
$updateAppScript = Join-Path -Path $scriptDir -ChildPath "update_app_data.ps1"

Write-Host "==========================================================" -ForegroundColor Magenta
Write-Host " Flujo de Publicacion y Sincronizacion de /App (itnews.lat) " -ForegroundColor Magenta
Write-Host "==========================================================" -ForegroundColor Magenta

# Paso 1: Ejecutar la publicacion del articulo
Write-Host "`n>>> FASE 1: Publicando articulo en Jekyll & GitHub..." -ForegroundColor Cyan
if (Test-Path $publishScript) {
    if ([string]::IsNullOrWhiteSpace($CommitMessage)) {
        powershell -ExecutionPolicy Bypass -File $publishScript -FilePath $FilePath
    } else {
        powershell -ExecutionPolicy Bypass -File $publishScript -FilePath $FilePath -CommitMessage $CommitMessage
    }
} else {
    Write-Host "[ERROR] No se encontro el script de publicacion base en: $publishScript" -ForegroundColor Red
    exit 1
}

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n[CANCELADO] La publicacion fallo. No se sincronizara la /app." -ForegroundColor Red
    exit $LASTEXITCODE
}

# Paso 2: Actualizacion automatica de la /app
Write-Host "`n>>> FASE 2: Sincronizando catalogo de la /app..." -ForegroundColor Cyan
powershell -ExecutionPolicy Bypass -File $updateAppScript -RepoRoot $repoRoot

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n[AVISO] Hubo un error al actualizar los datos de la app." -ForegroundColor Yellow
} else {
    Write-Host "`n==========================================================" -ForegroundColor Green
    Write-Host " [TODO LISTO] Articulo publicado y /app sincronizada con exito! " -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
}
