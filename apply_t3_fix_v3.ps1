$file = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\slides_data.js"
$content = Get-Content $file -Raw
$tiet3 = Get-Content "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\t3_fixed_v3.txt" -Raw

# Remove the old T3 slides. T3 slides start at T3-P0-01 and go to the end.
$startIndex = $content.IndexOf("`"id`": `"T3-P0-01`"")
if ($startIndex -ge 0) {
    # find the previous `{` before `"id": "T3-P0-01"`
    $startBrace = $content.LastIndexOf("{", $startIndex)
    
    # Keep the part before Tiết 3
    $beforeTiet3 = $content.Substring(0, $startBrace).TrimEnd()
    
    # Make sure we remove trailing commas before appending
    if ($beforeTiet3.EndsWith(",")) {
        $beforeTiet3 = $beforeTiet3.Substring(0, $beforeTiet3.Length - 1)
    }
    
    # build the new content
    $newContent = $beforeTiet3 + "`n" + $tiet3 + "`n];"
    
    Set-Content -Path $file -Value $newContent -Encoding UTF8
    Write-Host "Successfully updated slides_data.js with Tiết 3 v3"
} else {
    Write-Host "Could not find T3-P0-01 in slides_data.js"
}
