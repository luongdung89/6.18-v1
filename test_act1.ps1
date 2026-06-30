$ErrorActionPreference = 'Stop'
$content = [System.IO.File]::ReadAllText("d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\slides_data.js", [System.Text.Encoding]::UTF8)
$jsonPart = $content -replace '^const INITIAL_SLIDES =\s*', '' -replace ';\s*$', ''
$slides = ConvertFrom-Json $jsonPart -Depth 20

foreach ($slide in $slides) {
    if ($slide.id -match "^T3-" -and $slide.type -eq "activity-intro") {
        $headingEl = $slide.elements | Where-Object { $_.type -eq "heading" }
        $boxEl = $slide.elements | Where-Object { $_.type -eq "box" -and $_.content -match "Tên hoạt động" }
        
        if ($boxEl -and $boxEl.content -match "<strong>Tên hoạt động:</strong>\s*(.*?)<br><br><strong>Nội dung:</strong>\s*(.*)") {
            $activityName = $Matches[1]
            $activityDesc = $Matches[2]
            $headingEl.content = $activityName.ToUpper()
            $boxEl.content = $activityDesc
            Write-Host "Updated  to "
        }
    }
}