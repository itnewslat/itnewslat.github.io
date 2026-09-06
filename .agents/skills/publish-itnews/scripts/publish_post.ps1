# Script de publicacion automatizada y validada para itnews.lat
param (
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$FilePath,

    [Parameter(Mandatory = $false)]
    [string]$CommitMessage
)

$ErrorActionPreference = "Stop"

# Asegurar PATH con git y gh
$userPath = [System.Environment]::GetEnvironmentVariable("Path", "User")
$machinePath = [System.Environment]::GetEnvironmentVariable("Path", "Machine")
$env:Path = "$userPath;$machinePath;$env:Path"

# 1. Resolver ruta del archivo
if (-not (Test-Path $FilePath)) {
    Write-Host "[ERROR] No se encuentra el archivo: $FilePath" -ForegroundColor Red
    exit 1
}

$resolved = (Resolve-Path -Path $FilePath).Path
$repoRoot = (Resolve-Path (Join-Path -Path $PSScriptRoot -ChildPath "..\..\..\..")).Path

# 2. Validacion estricta previa del formato
Write-Host "Paso 1: Validando formato y metadatos del articulo..." -ForegroundColor Cyan
$validateScript = Join-Path -Path $PSScriptRoot -ChildPath "validate_post.ps1"

powershell -ExecutionPolicy Bypass -File $validateScript -FilePath $resolved
if ($LASTEXITCODE -ne 0) {
    Write-Host "`n[CANCELADO] La publicacion fue cancelada debido a errores de validacion." -ForegroundColor Red
    exit 1
}

# 3. Prueba obligatoria de compilacion local con Jekyll
Write-Host "`nPaso 2: Probando compilacion local con Jekyll..." -ForegroundColor Cyan
$testJekyllScript = Join-Path -Path $PSScriptRoot -ChildPath "test_jekyll_build.ps1"
powershell -ExecutionPolicy Bypass -File $testJekyllScript -LimitPosts 5
if ($LASTEXITCODE -ne 0) {
    Write-Host "`n[CANCELADO] La publicacion fue cancelada porque la compilacion local con Jekyll fallo." -ForegroundColor Red
    exit 1
}

# 4. Comprobar autenticacion de GitHub CLI
Write-Host "`nPaso 3: Comprobando autenticacion en GitHub CLI (gh)..." -ForegroundColor Cyan
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "`n[AVISO] No se detecto una sesion activa en GitHub CLI." -ForegroundColor Yellow
    Write-Host "Por favor inicia sesion ejecutando: gh auth login" -ForegroundColor Yellow
    Write-Host "Una vez autenticado, vuelve a ejecutar este script." -ForegroundColor Yellow
    exit 1
}

# 5. Preparar commit
$fileName = Split-Path -Path $resolved -Leaf
if ([string]::IsNullOrWhiteSpace($CommitMessage)) {
    # Extraer titulo del post para el mensaje de commit
    $content = Get-Content -Path $resolved -Raw -Encoding UTF8
    if ($content -match 'title:\s*(.+)') {
        $postTitle = $Matches[1].Trim()
        $CommitMessage = "Publicar: $postTitle"
    } else {
        $CommitMessage = "Publicar articulo: $fileName"
    }
}

Write-Host "`nPaso 4: Preparando Git..." -ForegroundColor Cyan
Set-Location -Path $repoRoot

# Staging
git add $resolved
Write-Host "[OK] Archivo agregado al stage: $fileName" -ForegroundColor Green

# Commit
Write-Host "`nPaso 5: Realizando commit..." -ForegroundColor Cyan
$cleanMessage = ($CommitMessage -replace '["'']', '').Trim()
git commit -m "$cleanMessage"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[AVISO] No hubo cambios para confirmar o el commit fallo." -ForegroundColor Yellow
} else {
    Write-Host "[OK] Commit realizado con exito: '$cleanMessage'" -ForegroundColor Green
}

# Push
Write-Host "`nPaso 6: Subiendo cambios a GitHub con Git..." -ForegroundColor Cyan
git push origin master
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] El push a origin/master ha fallado. Revisa tu conexion o permisos." -ForegroundColor Red
    exit 1
}

# 6. Verificacion final con GitHub CLI
Write-Host "`nPaso 7: Verificando estado en GitHub..." -ForegroundColor Cyan
try {
    $commitInfo = gh api repos/itnewslat/itnewslat.github.io/commits/master --jq "{sha: .sha[0:7], message: .commit.message, date: .commit.author.date}"
    Write-Host "[OK] Confirmado en GitHub: $commitInfo" -ForegroundColor Green
} catch {
    Write-Host "[AVISO] No se pudo consultar la API de GitHub: $_" -ForegroundColor Yellow
}

Write-Host "`n==========================================================" -ForegroundColor Green
Write-Host " [PUBLICADO CON EXITO] El articulo ha sido subido a master." -ForegroundColor Green
Write-Host "==========================================================`n" -ForegroundColor Green
