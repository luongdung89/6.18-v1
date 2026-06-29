$content = [System.IO.File]::ReadAllText("slides_data.js", [System.Text.Encoding]::UTF8)

# 1. Update S4-ACT-05 table and S4-ACT-04 table to be even bigger
$content = $content.Replace('font-size:1.35em;"', 'font-size:1.6em;"')
$content = $content.Replace('font-size:1.45em;"', 'font-size:1.7em;"')
$content = $content.Replace('font-size:1.3em;"', 'font-size:1.55em;"')
$content = $content.Replace('font-size:1.4em;"', 'font-size:1.65em;"')
$content = $content.Replace("font-size:1.35em;'>", "font-size:1.6em;'>")
$content = $content.Replace("font-size:1.45em; width", "font-size:1.7em; width")

# 2. Tiết 2: S3-act-04 (4 slide) - inner AI text font-size
$blocks = @("t2-s3-a4-screen-a", "t2-s3-a4-screen-b", "t2-s3-a4-screen-c", "t2-s3-a4-screen-d")
foreach ($id in $blocks) {
    $idx1 = $content.IndexOf("`"id`": `"$id`"")
    if ($idx1 -ge 0) {
        $idx2 = $content.IndexOf("`"id`": `"t2", $idx1 + 10)
        if ($idx2 -lt 0) { $idx2 = $content.Length }
        
        $subStr = $content.Substring($idx1, $idx2 - $idx1)
        
        # Increase inner 10pt to 15pt and max-height 130px to 250px so it fits
        $subStr = $subStr.Replace("font-size: 10pt;", "font-size: 15pt;")
        $subStr = $subStr.Replace("max-height: 130px;", "max-height: 250px;")
        
        $content = $content.Substring(0, $idx1) + $subStr + $content.Substring($idx2)
    }
}

# 3. Tiết 1: S4-ACT-04: Align ALL buttons to the left for consistency
$content = $content.Replace('id=\"s4-btn-pink\" class=\"btn\" style=\"background:', 'id=\"s4-btn-pink\" class=\"btn\" style=\"text-align: left; background:')
$content = $content.Replace('id=\"s4-btn-yellow\" class=\"btn\" style=\"background:', 'id=\"s4-btn-yellow\" class=\"btn\" style=\"text-align: left; background:')
$content = $content.Replace('id=\"s4-btn-green\" class=\"btn\" style=\"background:', 'id=\"s4-btn-green\" class=\"btn\" style=\"text-align: left; background:')

$utf8NoBom = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllText("slides_data.js", $content, $utf8NoBom)
Write-Host "Done patching part 2."
