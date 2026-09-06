# Script para crear un borrador de nuevo articulo en itnews.lat
param (
    [Parameter(Mandatory = $true)]
    [string]$Title,

    [Parameter(Mandatory = $false)]
    [string]$Tag = "Economia Digital",

    [Parameter(Mandatory = $false)]
    [string[]]$Countries = @("Venezuela", "Colombia", "Ecuador", "Peru", "Chile", "Mexico", "Argentina", "Panama"),

    [Parameter(Mandatory = $false)]
    [string]$ImageName = "noticia-imagen"
)

$ErrorActionPreference = "Stop"

# Calcular fechas
$now = Get-Date
$dateIso = $now.ToString("yyyy-MM-dd")
$dateFull = $now.ToString("yyyy-MM-dd HH:mm -0400")
$year = $now.Year.ToString()

$cal = [System.Globalization.CultureInfo]::InvariantCulture.Calendar
$week = $cal.GetWeekOfYear($now, [System.Globalization.CalendarWeekRule]::FirstFourDayWeek, [DayOfWeek]::Monday).ToString()

# Generar slug limpio
function Convert-ToSlug([string]$text) {
    $normalized = $text.Normalize([System.Text.NormalizationForm]::FormD)
    $sb = [System.Text.StringBuilder]::new()
    foreach ($c in $normalized.ToCharArray()) {
        $category = [System.Globalization.CharUnicodeInfo]::GetUnicodeCategory($c)
        if ($category -ne [System.Globalization.UnicodeCategory]::NonSpacingMark) {
            [void]$sb.Append($c)
        }
    }
    $clean = $sb.ToString().ToLowerInvariant()
    $clean = $clean -replace '[^a-z0-9\s-]', ''
    $clean = $clean -replace '\s+', '-'
    $clean = $clean -replace '-+', '-'
    return $clean.Trim('-')
}

$slug = Convert-ToSlug $Title
if ($slug.Length -gt 60) {
    $slug = $slug.Substring(0, 60).Trim('-')
}

$targetFileName = "$dateIso-$slug.md"
$repoRoot = (Resolve-Path (Join-Path -Path $PSScriptRoot -ChildPath "..\..\..\..")).Path
$postsDir = Join-Path -Path $repoRoot -ChildPath "_posts"
$targetFilePath = Join-Path -Path $postsDir -ChildPath $targetFileName

if (Test-Path $targetFilePath) {
    Write-Host "[ALERTA] Ya existe un articulo con este nombre: $targetFilePath" -ForegroundColor Yellow
    exit 1
}

$categoriesYaml = ($Countries | ForEach-Object { "  - $_" }) -join "`n"

$template = @"
---
layout: posts
color-schema: red-dark
date: '$dateFull'
published: true
superNews: false
superArticle: false
year: '$year'
title: $Title
image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/$ImageName-p.jpg
detail-image: >-
  https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/1024x680/$ImageName-g.jpg
categories:
$categoriesYaml
tags:
  - $Tag
week: '$week'
---
**Lead o bajada del articulo resumida en negrita.**

Escribe aqui el contenido del articulo en parrafos claros y concisos.

![](https://raw.githubusercontent.com/itnewslat/assets/refs/heads/master/img/540x320/$ImageName-p.jpg)

<table style="height: 42px;" width="569">
<tbody>
<tr>
<td style="text-align: justify;"><sub><strong>Nuestras noticias también son publicadas a través de nuestra cuenta en Twitter <a href="https://twitter.com/itnewslat?lang=es">@ITNEWSLAT</a> y en la aplicación <a href="https://squidapp.co/en/">SQUID</a></strong></sub></td>
</tr>
</tbody>
</table>

<img src="https://tracker.metricool.com/c3po.jpg?hash=56f88a41e39ab42c063cc51676587a04"/>
"@

[System.IO.File]::WriteAllText($targetFilePath, $template, [System.Text.Encoding]::UTF8)

Write-Host "`n[EXITO] Articulo creado en: $targetFilePath" -ForegroundColor Green
Write-Host "Ejecuta la validacion cuando termines de redactar con:" -ForegroundColor Cyan
Write-Host "powershell -ExecutionPolicy Bypass -File .agents/skills/publish-itnews/scripts/validate_post.ps1 -FilePath `"_posts/$targetFileName`"" -ForegroundColor Yellow
