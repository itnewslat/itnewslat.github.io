# Script de validacion de articulos de itnews.lat
param (
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$FilePath
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $FilePath)) {
    Write-Host "[ERROR] El archivo no existe: $FilePath" -ForegroundColor Red
    exit 1
}

$resolved = (Resolve-Path -Path $FilePath).Path
$fileName = Split-Path -Path $resolved -Leaf
$parentDir = Split-Path -Path $resolved -Parent
$parentName = Split-Path -Path $parentDir -Leaf

$errors = [System.Collections.Generic.List[string]]::new()
$warnings = [System.Collections.Generic.List[string]]::new()

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Validando articulo: $fileName" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Validar que este dentro de _posts/
if ($parentName -ne "_posts") {
    $errors.Add("UBICACION INCORRECTA: El archivo esta en '$parentName'. Debe estar obligatoriamente en '_posts/'. En Jekyll los articulos fuera de _posts no aparecen en portada ni categorias.")
} else {
    Write-Host "[OK] Ubicacion correcta en _posts/" -ForegroundColor Green
}

# 2. Validar formato de nombre: YYYY-MM-DD-slug.md
if ($fileName -notmatch '^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$') {
    $errors.Add("NOMBRE DE ARCHIVO INVALIDO: '$fileName'. Formato requerido: 'YYYY-MM-DD-slug-del-articulo.md'.")
} else {
    $dateFromFileName = "$($Matches[1])-$($Matches[2])-$($Matches[3])"
    Write-Host "[OK] Nombre de archivo valido ($fileName)" -ForegroundColor Green
}

# 3. Leer contenido
$content = Get-Content -Path $resolved -Raw -Encoding UTF8

# 4. Validar frontmatter delimitado por ---
if ($content -notmatch '(?s)^---\r?\n(.*?)\r?\n---\r?\n(.*)$') {
    $errors.Add("FRONTMATTER INVALIDO: El archivo debe comenzar y terminar el bloque de metadatos con '---'.")
    $yaml = ""
    $body = $content
} else {
    $yaml = $Matches[1]
    $body = $Matches[2]
    Write-Host "[OK] Frontmatter YAML delimitado correctamente" -ForegroundColor Green
}

if ($yaml -ne "") {
    # layout: posts
    if ($yaml -notmatch 'layout:\s*posts') {
        $errors.Add("Falta 'layout: posts' en el frontmatter.")
    } else {
        Write-Host "[OK] layout: posts" -ForegroundColor Green
    }

    # color-schema: red-dark
    if ($yaml -notmatch 'color-schema:\s*red-dark') {
        $warnings.Add("'color-schema' no es 'red-dark' (el esquema estandar de itnews.lat).")
    } else {
        Write-Host "[OK] color-schema: red-dark" -ForegroundColor Green
    }

    # date
    if ($yaml -match 'date:\s*[''"]?(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2})\s+([-+]\d{4})[''"]?') {
        $dateStr = $Matches[1]
        Write-Host "[OK] Fecha detectada: $dateStr" -ForegroundColor Green

        # Chequear coincidencia con el nombre del archivo
        if ($dateFromFileName -and $dateStr -ne $dateFromFileName) {
            $errors.Add("DISCORDANCIA DE FECHA: La fecha en el archivo ($dateStr) no coincide con el prefijo del nombre ($dateFromFileName).")
        }

        # Validar year
        $parsedYear = $dateStr.Substring(0, 4)
        if ($yaml -match 'year:\s*[''"]?(\d{4})[''"]?') {
            $yamlYear = $Matches[1]
            if ($yamlYear -ne $parsedYear) {
                $errors.Add("DISCORDANCIA DE ANIO: 'year: $yamlYear' no coincide con '$parsedYear'.")
            } else {
                Write-Host "[OK] year: $yamlYear" -ForegroundColor Green
            }
        } else {
            $errors.Add("Falta 'year' en el frontmatter.")
        }

        # Validar week
        try {
            $dt = [DateTime]::ParseExact($dateStr, "yyyy-MM-dd", [System.Globalization.CultureInfo]::InvariantCulture)
            $cal = [System.Globalization.CultureInfo]::InvariantCulture.Calendar
            $calcWeek = $cal.GetWeekOfYear($dt, [System.Globalization.CalendarWeekRule]::FirstFourDayWeek, [DayOfWeek]::Monday)
            if ($yaml -match 'week:\s*[''"]?(\d+)[''"]?') {
                $yamlWeek = [int]$Matches[1]
                if ($yamlWeek -ne $calcWeek) {
                    $warnings.Add("SEMANA: 'week: $yamlWeek' difiere del calculo ISO ($calcWeek).")
                } else {
                    Write-Host "[OK] week: $yamlWeek" -ForegroundColor Green
                }
            } else {
                $errors.Add("Falta 'week' en el frontmatter.")
            }
        } catch {
            $warnings.Add("No se pudo calcular la semana: $_")
        }
    } else {
        $errors.Add("Falta 'date' con formato estandar 'YYYY-MM-DD HH:MM -0400'.")
    }

    # published
    if ($yaml -match 'published:\s*true') {
        Write-Host "[OK] published: true" -ForegroundColor Green
    } else {
        $warnings.Add("'published' no esta en 'true'. El articulo podria no mostrarse.")
    }

    # title
    if ($yaml -match 'title:\s*(.+)') {
        $titleVal = $Matches[1].Trim()
        Write-Host "[OK] title: $titleVal" -ForegroundColor Green
    } else {
        $errors.Add("Falta 'title' en el frontmatter.")
    }

    # image y detail-image
    if ($yaml -match 'image:\s*(?:>-\s*)?(\S+)') {
        Write-Host "[OK] image: $($Matches[1])" -ForegroundColor Green
    } else {
        $errors.Add("Falta 'image' en el frontmatter.")
    }

    if ($yaml -match 'detail-image:\s*(?:>-\s*)?(\S+)') {
        Write-Host "[OK] detail-image: $($Matches[1])" -ForegroundColor Green
    } else {
        $errors.Add("Falta 'detail-image' en el frontmatter.")
    }

    # categories
    if ($yaml -match 'categories:\s*\r?\n(\s*-\s*.+)') {
        Write-Host "[OK] categories definidas" -ForegroundColor Green
    } else {
        $errors.Add("Falta la lista de 'categories' (paises).")
    }

    # tags
    if ($yaml -match 'tags:\s*\r?\n(\s*-\s*.+)') {
        Write-Host "[OK] tags definidos" -ForegroundColor Green
    } else {
        $errors.Add("Falta la lista de 'tags' (secciones tematicas).")
    }
}

# 5. Validar cuerpo del articulo
if ([string]::IsNullOrWhiteSpace($body)) {
    $errors.Add("El cuerpo del articulo esta vacio.")
} else {
    Write-Host "[OK] Cuerpo del articulo con contenido" -ForegroundColor Green

    if ($body -match "@ITNEWSLAT" -and $body -match "SQUID") {
        Write-Host "[OK] Creditos Twitter (@ITNEWSLAT) y SQUID presentes" -ForegroundColor Green
    } else {
        $warnings.Add("Falta la tabla de creditos a @ITNEWSLAT y app SQUID.")
    }

    if ($body -match "tracker\.metricool\.com") {
        Write-Host "[OK] Pixel Metricool presente" -ForegroundColor Green
    } else {
        $warnings.Add("Falta el pixel de medicion de Metricool.")
    }
}

Write-Host "----------------------------------------------------------" -ForegroundColor Cyan

if ($warnings.Count -gt 0) {
    Write-Host "`nAdvertencias ($($warnings.Count)):" -ForegroundColor Yellow
    foreach ($w in $warnings) {
        Write-Host "  [!] $w" -ForegroundColor Yellow
    }
}

if ($errors.Count -gt 0) {
    Write-Host "`nErrores encontrados ($($errors.Count)):`n" -ForegroundColor Red
    foreach ($e in $errors) {
        Write-Host "  [X] $e" -ForegroundColor Red
    }
    Write-Host "`nVALIDACION FALLIDA: Corrige los errores antes de publicar.`n" -ForegroundColor Red
    exit 1
} else {
    Write-Host "`n[EXITO] Todas las comprobaciones criticas han pasado." -ForegroundColor Green
    Write-Host "El articulo cumple con los estandares de itnews.lat y esta listo para publicar.`n" -ForegroundColor Green
    exit 0
}
