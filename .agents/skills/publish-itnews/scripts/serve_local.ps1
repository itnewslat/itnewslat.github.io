# Script para iniciar el servidor local de vista previa de Jekyll
param (
    [Parameter(Mandatory = $false)]
    [int]$Port = 4000,

    [Parameter(Mandatory = $false)]
    [int]$LimitPosts = 10
)

$ErrorActionPreference = "Stop"

$rubyBin = "C:\Ruby33-x64\bin"
if (Test-Path $rubyBin) {
    $env:Path = "$rubyBin;$env:Path"
}

$repoRoot = (Resolve-Path (Join-Path -Path $PSScriptRoot -ChildPath "..\..\..\..")).Path
Set-Location -Path $repoRoot

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Iniciando servidor local Jekyll en http://localhost:$Port" -ForegroundColor Cyan
Write-Host " Mostrando los ultimos $LimitPosts articulos para maxima velocidad..." -ForegroundColor Gray
Write-Host " Presiona Ctrl+C para detener el servidor." -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Cyan

& jekyll serve --port $Port --limit_posts $LimitPosts --livereload
