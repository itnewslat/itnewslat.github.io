param (
    [string]$RepoRoot = (Resolve-Path (Join-Path -Path $PSScriptRoot -ChildPath "..\..\..\..")).Path,
    [int]$Limit = 200
)

$ErrorActionPreference = "Stop"

$postsDir = Join-Path $RepoRoot "_posts"
$appDir = Join-Path $RepoRoot "app"
$targetJson = Join-Path $appDir "posts_data.json"

if (-not (Test-Path $postsDir)) {
    Write-Host "[ERROR] No se encontro el directorio _posts en: $postsDir" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $appDir)) {
    New-Item -ItemType Directory -Path $appDir -Force | Out-Null
}

Write-Host "Iniciando regeneracion del catalogo de /app..." -ForegroundColor Cyan

$files = Get-ChildItem -Path $postsDir -Filter "*.md"
$allParsed = @()

foreach ($f in $files) {
    try {
        $content = Get-Content -LiteralPath $f.FullName -Raw -Encoding UTF8
        if ($content -match '(?s)^---\r?\n(.*?)\r?\n---(.*)$') {
            $frontMatter = $matches[1]
            $body = $matches[2].Trim()

            $title = ""
            if ($frontMatter -match '(?m)^title:\s*\"?(.*?)\"?\s*$') {
                $title = $matches[1].Trim().Trim('"')
            }

            $date = ""
            if ($frontMatter -match '(?m)^date:\s*''?(.*?)''?\s*$') {
                $date = $matches[1].Trim().Trim("'")
            }

            $image = ""
            if ($frontMatter -match '(?s)image:\s*>-\s*\r?\n\s*(\S+)') {
                $image = $matches[1].Trim()
            }

            $detailImage = ""
            if ($frontMatter -match '(?s)detail-image:\s*>-\s*\r?\n\s*(\S+)') {
                $detailImage = $matches[1].Trim()
            }

            $categories = @()
            if ($frontMatter -match '(?s)categories:\s*\r?\n(.*?)(?=\r?\n[a-zA-Z0-9_\-]+:|$)') {
                $catBlock = $matches[1]
                $catLines = $catBlock -split "\r?\n"
                foreach ($cl in $catLines) {
                    if ($cl -match '^\s*-\s*(.+)$') {
                        $categories += $matches[1].Trim()
                    }
                }
            }

            $tags = @()
            if ($frontMatter -match '(?s)tags:\s*\r?\n(.*?)(?=\r?\n[a-zA-Z0-9_\-]+:|$)') {
                $tagBlock = $matches[1]
                $tagLines = $tagBlock -split "\r?\n"
                foreach ($tl in $tagLines) {
                    if ($tl -match '^\s*-\s*(.+)$') {
                        $tags += $matches[1].Trim()
                    }
                }
            }

            $slug = $f.BaseName -replace '^\d{4}-\d{2}-\d{2}-', ''
            $url = "https://itnews.lat/$slug.html"

            # Snippet limpio
            $clean = $body -replace '<table[\s\S]*?</table>', '' -replace '<img[\s\S]*?>', '' -replace '!\[.*?\]\(.*?\)', ''
            $clean = $clean -replace '[#>*_`]', ''
            $clean = ($clean -split "\r?\n" | Where-Object { $_.Trim().Length -gt 0 }) -join ' '
            $snippet = if ($clean.Length -gt 200) { $clean.Substring(0, 200).Trim() + '...' } else { $clean }

            if ($title) {
                $allParsed += [PSCustomObject]@{
                    id          = $slug
                    title       = $title
                    date        = $date
                    image       = $image
                    detailImage = $detailImage
                    categories  = $categories
                    tags        = $tags
                    url         = $url
                    snippet     = $snippet
                    body        = $body
                }
            }
        }
    } catch {
        Write-Warning "Aviso procesando $($f.Name): $_"
    }
}

# Ordenar descendentemente por fecha
$sortedPosts = $allParsed | Sort-Object { $_.date } -Descending | Select-Object -First $Limit

$sortedPosts | ConvertTo-Json -Depth 5 | Out-File -FilePath $targetJson -Encoding UTF8
Write-Host "[EXITO] Catalogo de la /app actualizado: $targetJson" -ForegroundColor Green
Write-Host "Articulos indexados: $($sortedPosts.Count)" -ForegroundColor Green

# Tambien actualizar el mirror independiente itnews-app si existe
$parentDir = (Resolve-Path (Join-Path $RepoRoot "..")).Path
$mirrorApp = Join-Path $parentDir "itnews-app\posts_data.json"
if (Test-Path (Split-Path $mirrorApp)) {
    $sortedPosts | ConvertTo-Json -Depth 5 | Out-File -FilePath $mirrorApp -Encoding UTF8
    Write-Host "[EXITO] Espejo itnews-app actualizado: $mirrorApp" -ForegroundColor Green
}
