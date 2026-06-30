$path = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\slides_data.js"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$tiet3 = [System.IO.File]::ReadAllText("d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\t3_fixed_v3.txt", [System.Text.Encoding]::UTF8)

$lastBracket = $content.LastIndexOf("]")
if ($lastBracket -ge 0) {
    # check if the last slide ends properly
    $beforeTiet3 = $content.Substring(0, $lastBracket).TrimEnd()
    if (-not $beforeTiet3.EndsWith(",")) {
        $beforeTiet3 += ","
    }
    
    $newContent = $beforeTiet3 + "`r`n" + $tiet3 + "`r`n];"
    [System.IO.File]::WriteAllText($path, $newContent, [System.Text.Encoding]::UTF8)
    Write-Host "Successfully appended Tiết 3 v3 to slides_data.js!"
} else {
    Write-Host "Could not find closing bracket in slides_data.js"
}
