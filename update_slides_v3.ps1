$path = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\slides_data.js"
$content = Get-Content $path -Encoding UTF8 -Raw

$index = $content.IndexOf("    `"id`": `"T3-P0-01`"")

if ($index -ge 0) {
    # Find the "{" before this
    $braceIndex = $content.LastIndexOf("{", $index)
    if ($braceIndex -ge 0) {
        # Keep everything before the comma before the brace
        $commaIndex = $content.LastIndexOf(",", $braceIndex)
        if ($commaIndex -ge 0) {
            $before = $content.Substring(0, $commaIndex)
            
            $tiet3 = Get-Content "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\tiet3_v3.txt" -Encoding UTF8 -Raw
            $newContent = $before + "`r`n" + $tiet3 + "`r`n];"
            
            [System.IO.File]::WriteAllText($path, $newContent, [System.Text.Encoding]::UTF8)
            Write-Output "Successfully updated slides_data.js with new Tiết 3 structure"
        } else {
            Write-Output "Could not find comma before T3-P0-01"
        }
    } else {
        Write-Output "Could not find { before T3-P0-01"
    }
} else {
    Write-Output "Could not find T3-P0-01"
}
