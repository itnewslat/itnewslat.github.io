# Script de generacion de newsletter semanal para ITNEWS.LAT
# Zona horaria: America/Caracas (UTC-4)

$now = [DateTime]::UtcNow.AddHours(-4)
$year = $now.Year.ToString()
$week = (Get-Date $now -UFormat "%V").TrimStart('0')
if ([string]::IsNullOrEmpty($week)) { $week = "1" }

$meses = @("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre")
$mes = $meses[$now.Month - 1]
$dia = $now.Day.ToString("D2")
$fechaHumana = "$dia de $mes, $year"
$fechaIso = $now.ToString("yyyy-MM-dd")

Write-Host "Generando Newsletter: Semana $week ($fechaHumana)"

$dir = Join-Path $PSScriptRoot "..\_newsletters"
if (!(Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
}

$file = Join-Path $dir "$week.md"
$content = @"
---
published: true
layout: newsletter
year: '$year'
week: '$week'
date: '$fechaIso'
title: "Boletin Semanal - Semana $week ($fechaHumana)"
banner: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/728x90/Banner-Resumen.jpg
---
"@

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($file, $content, $utf8NoBom)
Write-Host "Archivo generado exitosamente en $file"
