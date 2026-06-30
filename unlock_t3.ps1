$path = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\app.js"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Remove locked screen from renderCurrentSlide
$content = $content -replace '(?s)[ \t]*// Check if filtering for locked periods[ \t\n\r]*if \(currentPeriodFilter === ''t3''\) \{.*?(?:return;)[ \t\n\r]*\}', ''

# For setPeriodFilter, we will find "function setPeriodFilter(period) {" and replace the entire function!
$newSetPeriodFilter = @"
function setPeriodFilter(period) {
    currentPeriodFilter = period;
    
    // Update active period tab styles
    document.querySelectorAll('.period-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    const activeTab = document.getElementById(`period-tab-`${period});
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
"@ -replace "``period", '$' + "{period}"

$content = $content -replace '(?s)function setPeriodFilter\(period\) \{.*?\}[\n\r]*function filterSlides', ($newSetPeriodFilter + "`n`nfunction filterSlides")

# Replace version to v64
$content = $content -replace "v63_clean", "v64_unlocked"

[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)

$indexPath = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\index.html"
$indexHtml = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
$indexHtml = $indexHtml -replace "v=63", "v=64"
[System.IO.File]::WriteAllText($indexPath, $indexHtml, [System.Text.Encoding]::UTF8)
Write-Host "Unlocked T3 in app.js and updated to v64"