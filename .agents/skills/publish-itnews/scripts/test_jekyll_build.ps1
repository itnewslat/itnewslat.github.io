# Script para probar la compilacion local con Jekyll antes de publicar
param (
    [Parameter(Mandatory = $false)]
    [int]$LimitPosts = 5,

    [Parameter(Mandatory = $false)]
    [switch]$FullBuild
)

$ErrorActionPreference = "Stop"

# Asegurar que Ruby y Jekyll esten en PATH
$rubyBin = "C:\Ruby33-x64\bin"
if (Test-Path $rubyBin) {
    $env:Path = "$rubyBin;$env:Path"
}

$repoRoot = (Resolve-Path (Join-Path -Path $PSScriptRoot -ChildPath "..\..\..\..")).Path
Set-Location -Path $repoRoot

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Probando compilacion local de Jekyll..." -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# Comprobar que jekyll este instalado
$jekyllCmd = Get-Command jekyll -ErrorAction SilentlyContinue
if (-not $jekyllCmd) {
    Write-Host "[ERROR] No se encuentra 'jekyll' en PATH." -ForegroundColor Red
    Write-Host "Verifica que Ruby este instalado en C:\Ruby33-x64 y las gemas instaladas." -ForegroundColor Yellow
    exit 1
}

$buildArgs = @("build", "--strict_front_matter")
if (-not $FullBuild) {
    Write-Host "[INFO] Ejecutando compilacion optimizada con --limit_posts $LimitPosts para rapidez..." -ForegroundColor Gray
    $buildArgs += @("--limit_posts", $LimitPosts.ToString())
} else {
    Write-Host "[INFO] Ejecutando compilacion completa del sitio..." -ForegroundColor Gray
}

$startTime = Get-Date

& jekyll @buildArgs

if ($LASTEXITCODE -eq 0) {
    $elapsed = ((Get-Date) - $startTime).TotalSeconds
    Write-Host "`n[EXITO] Compilacion local de Jekyll completada exitosamente en $([math]::Round($elapsed, 1))s." -ForegroundColor Green
    Write-Host "No se encontraron errores de sintaxis, Liquid ni frontmatter.`n" -ForegroundColor Green
    exit 0
} else {
    Write-Host "`n[ERROR] La compilacion local de Jekyll ha fallado (codigo $LASTEXITCODE)." -ForegroundColor Red
    Write-Host "Revisa los errores de sintaxis Liquid o metadatos reportados arriba.`n" -ForegroundColor Red
    exit 1
}
