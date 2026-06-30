$headPath = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\scratch\app_head.js"
$appJsPath = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\app.js"
$appJs = [System.IO.File]::ReadAllText($headPath, [System.Text.Encoding]::UTF8)

# 1. Remove duplicate cases at the end of switch (before default:)
$appJs = $appJs -replace "(?s)[ \t]*case 'security-lock-screen':(?:(?![ \t]*case 'project-folder-compressed':|default:).)*?(?=[ \t]*default:)", "`n"

# 2. Tiết 3 Unlocks
$appJs = $appJs -replace '(?s)[ \t]*// Check if filtering for locked periods[ \t\n\r]*if \(currentPeriodFilter === ''t3''\) \{.*?(?:return;)[ \t\n\r]*\}', ''

$newSetPeriodFilter = @"
function setPeriodFilter(period) {
    currentPeriodFilter = period;
    
    // Update active period tab styles
    document.querySelectorAll('.period-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    const activeTab = document.getElementById(`period-tab-${period}`);
    if (activeTab) activeTab.classList.add('active');
    
    // Filter sidebar list
    filterSlides();
    
    // Return to the first slide of that period on selection if currently outside
    const currentPeriod = getPeriodForIndex(currentSlideIndex);
    if (currentPeriod !== period && period !== 'all') {
      const firstSlideIdx = slides.findIndex((_, idx) => getPeriodForIndex(idx) === period);
      if (firstSlideIdx !== -1) {
        goToSlide(firstSlideIdx);
      } else {
        goToSlide(0);
      }
    } else {
      renderCurrentSlide();
    }
}
"@ -replace '-`\$\{period\}', '-${period}'
$appJs = $appJs -replace '(?s)function setPeriodFilter\(period\) \{.*?\}[\n\r]*function filterSlides', ($newSetPeriodFilter + "`n`nfunction filterSlides")

# 3. SLIDE_DURATIONS
$newDurations = @"
const SLIDE_DURATIONS = {
    'S1-ACT-04': 300,  // 5 mins
    'S3-ACT-04': 480,  // 8 mins
    'S4-ACT-04': 360,  // 6 mins
    'S5-ACT-04': 300,  // 5 mins
    'S6-ACT-04': 480,  // 8 mins
    'S7-ACT-04': 240,  // 4 mins
    'S8-ACT-04': 180,  // 3 mins
    'T2-S4-ACT-04': 600, // 10 mins
    'T2-S5-ACT-04': 300, // 5 mins
    'T2-S6-ACT-04': 600, // 10 mins
    'T3-S1-ACT-04': 180, // 3 mins
    'T3-S3-ACT-04': 300, // 5 mins
    'T3-S4-ACT-04': 600, // 10 mins
    'T3-S7-ACT-04': 240, // 4 mins
    'T3-S8-ACT-04': 300, // 5 mins
    'T2-S3-ACT-04-A': 180,  // 3 mins
    'T2-S3-ACT-04-B': 180,  // 3 mins
    'T2-S3-ACT-04-C': 180,  // 3 mins
    'T2-S3-ACT-04-D': 180   // 3 mins
};
"@
$appJs = $appJs -replace '(?s)const SLIDE_DURATIONS = \{.*?\};', $newDurations

# Write it so far
[System.IO.File]::WriteAllText($appJsPath, $appJs, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Restored base app.js"