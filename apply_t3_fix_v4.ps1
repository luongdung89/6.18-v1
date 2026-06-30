$path = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\slides_data.js"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$tiet3 = [System.IO.File]::ReadAllText("d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\t3_fixed_v3.txt", [System.Text.Encoding]::UTF8)

$startIndex = $content.IndexOf("`"id`": `"T3-P0-01`"")
if ($startIndex -ge 0) {
    $startBrace = $content.LastIndexOf("{", $startIndex)
    $beforeTiet3 = $content.Substring(0, $startBrace).TrimEnd()
    if ($beforeTiet3.EndsWith(",")) {
        $beforeTiet3 = $beforeTiet3.Substring(0, $beforeTiet3.Length - 1)
    }
    $newContent = $beforeTiet3 + ",`r`n" + $tiet3 + "`r`n];"
    [System.IO.File]::WriteAllText($path, $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "Successfully applied Tiết 3 v3 with correct UTF-8 encoding!"
} else {
    Write-Host "Could not find T3-P0-01"
}
