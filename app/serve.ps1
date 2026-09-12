param (
    [int]$Port = 8085,
    [string]$Root = $PSScriptRoot
)

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")

try {
    $listener.Start()
    Write-Output "HTTP server running on http://localhost:$Port/"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rel = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($rel)) {
            $rel = "index.html"
        }
        $targetFile = Join-Path $Root $rel

        try {
            if (Test-Path $targetFile -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($targetFile)
                $ext = [System.IO.Path]::GetExtension($targetFile).ToLower()
                $contentType = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".svg"  { "image/svg+xml" }
                    default { "application/octet-stream" }
                }
                $response.ContentType = $contentType
                $response.AddHeader("Access-Control-Allow-Origin", "*")

                if ($request.HttpMethod -ne "HEAD") {
                    $response.ContentLength64 = $bytes.Length
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
            }
        } catch {
            # Client closed connection prematurely or socket exception
        } finally {
            try { $response.Close() } catch { }
        }
    }
} finally {
    $listener.Stop()
}
