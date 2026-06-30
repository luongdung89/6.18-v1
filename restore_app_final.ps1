$headPath = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\scratch\app_head.js"
$appJsPath = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\app.js"
$appJs = [System.IO.File]::ReadAllText($headPath, [System.Text.Encoding]::UTF8)

# 1. Remove duplicate cases at the end of switch (before default:)
$appJs = $appJs -replace "(?s)[ \t]*case 'security-lock-screen':(?:(?![ \t]*case 'project-folder-compressed':|default:).)*?(?=[ \t]*default:)", "`n"

# 2. Tiết 3 Unlocks
# We will explicitly find "if (currentPeriodFilter === 't3') {" and remove the block down to "return; \n }"
$startIndex = $appJs.IndexOf("if (currentPeriodFilter === 't3') {")
if ($startIndex -gt 0) {
    # Find the end of this block by finding "return;" then the next "}"
    $returnIndex = $appJs.IndexOf("return;", $startIndex)
    $endIndex = $appJs.IndexOf("}", $returnIndex)
    if ($endIndex -gt 0) {
        # Also remove the comment before it
        $commentIndex = $appJs.LastIndexOf("// Check if filtering for locked periods", $startIndex)
        if ($commentIndex -gt 0 -and ($startIndex - $commentIndex) -lt 100) {
            $startIndex = $commentIndex
        }
        $appJs = $appJs.Remove($startIndex, $endIndex - $startIndex + 1)
    }
}

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
"@ -replace '``period', '${period}'

# Replace exactly the old function block
$appJs = $appJs -replace '(?s)function setPeriodFilter\(period\) \{.*?\}(?=\s*function filterSlides)', $newSetPeriodFilter

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

# 4. Inject Tiết 3 SVGs AND Animations into the getTechVisualSVG function
$newSVGs = @"
      case 'commitment-stamp':
        innerSVG = `
          <!-- Stamp outline -->
          <circle cx="100" cy="100" r="50" fill="none" stroke="var(--neon-green)" stroke-width="4" stroke-dasharray="15 5" class="spin-slow" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="var(--neon-green)" stroke-width="2" class="pulse-glow" />
          <!-- Star icon -->
          <polygon points="100,75 106,90 122,90 109,100 114,115 100,105 86,115 91,100 78,90 94,90" fill="var(--neon-green)" class="blink-fast" />
        `;
        break;

      case 'fingerprint-scan':
        innerSVG = `
          <!-- Fingerprint lines -->
          <path d="M 70,80 C 70,40 130,40 130,80 M 80,85 C 80,55 120,55 120,85 M 90,90 C 90,70 110,70 110,90" fill="none" stroke="var(--neon-blue)" stroke-width="4" stroke-linecap="round" />
          <!-- Scan line -->
          <line x1="50" y1="100" x2="150" y2="100" stroke="var(--neon-green)" stroke-width="3" class="float-up-down" />
        `;
        break;

      case 'student-presentation-board':
        innerSVG = `
          <!-- Presentation Board -->
          <rect x="40" y="40" width="120" height="70" rx="2" fill="rgba(255, 255, 255, 0.05)" stroke="var(--neon-blue)" stroke-width="2" class="float-up-down" />
          <line x1="60" y1="110" x2="50" y2="150" stroke="var(--neon-blue)" stroke-width="2" />
          <line x1="140" y1="110" x2="150" y2="150" stroke="var(--neon-blue)" stroke-width="2" />
          <!-- Charts on board -->
          <g class="float-up-down">
            <rect x="50" y="55" width="20" height="40" fill="var(--neon-green)" opacity="0.7" />
            <rect x="75" y="70" width="20" height="25" fill="var(--neon-orange)" opacity="0.7" />
            <rect x="100" y="45" width="20" height="50" fill="var(--neon-pink)" opacity="0.7" />
          </g>
        `;
        break;

      case 'system-gears':
        innerSVG = `
          <!-- Gear 1 -->
          <g class="spin-slow" style="transform-origin: 80px 80px;">
            <circle cx="80" cy="80" r="25" fill="none" stroke="var(--neon-orange)" stroke-width="4" />
            <path d="M80 45 L80 55 M80 105 L80 115 M45 80 L55 80 M105 80 L115 80 M55 55 L62 62 M98 98 L105 105 M105 55 L98 62 M62 98 L55 105" stroke="var(--neon-orange)" stroke-width="4" />
          </g>
          <!-- Gear 2 -->
          <g class="spin-slow" style="transform-origin: 125px 115px; animation-direction: reverse; animation-duration: 8s;">
            <circle cx="125" cy="115" r="15" fill="none" stroke="var(--neon-blue)" stroke-width="3" />
            <path d="M125 90 L125 100 M125 130 L125 140 M100 115 L110 115 M140 115 L150 115 M107 97 L114 104 M136 126 L143 133 M143 97 L136 104 M114 126 L107 133" stroke="var(--neon-blue)" stroke-width="3" />
          </g>
        `;
        break;
"@

# Replace old system-gears (if exists) and insert all new SVGs before default:
$appJs = $appJs -replace "(?s)[ \t]*case 'system-gears':.*?break;", ''
$appJs = $appJs -replace '(?s)(?=[ \t]*default:[ \t]*innerSVG = `<circle)', ("`n" + $newSVGs + "`n")

# 5. Apply SVG animation classes to existing Tiết 3 SVGs:

# security-lock-screen
$secOld = 'stroke="var(--neon-blue)" stroke-width="2" opacity="0.8" />'
$secNew = 'stroke="var(--neon-blue)" stroke-width="2" opacity="0.8" class="float-up-down" />'
$appJs = $appJs.Replace($secOld, $secNew)

$secOld2 = 'circle cx="100" cy="70" r="45" fill="none" stroke="rgba(0, 243, 255, 0.2)" stroke-width="2" stroke-dasharray="10 10"'
$secNew2 = 'circle cx="100" cy="70" r="45" fill="none" stroke="rgba(0, 243, 255, 0.2)" stroke-width="2" stroke-dasharray="10 10" class="spin-slow" style="transform-origin: 100px 70px;"'
$appJs = $appJs.Replace($secOld2, $secNew2)

# debate-four-badges
$debOld = 'fill="#03081a" stroke="var(--neon-blue)" stroke-width="2.5"'
$debNew = 'fill="#03081a" stroke="var(--neon-blue)" stroke-width="2.5" class="pulse-glow"'
$appJs = $appJs.Replace($debOld, $debNew)

$debOld2 = 'fill="none" stroke="var(--neon-blue)" stroke-width="2"'
$debNew2 = 'fill="none" stroke="var(--neon-blue)" stroke-width="2" class="float-up-down"'
$appJs = $appJs.Replace($debOld2, $debNew2)

# process-sandbox-testing
$proOld = 'fill="rgba(0, 243, 255, 0.25)"'
$proNew = 'fill="rgba(0, 243, 255, 0.25)" class="float-up-down"'
$appJs = $appJs.Replace($proOld, $proNew)

# electric-clash-shield
$eleOld = 'fill="none" stroke="var(--neon-blue)" stroke-width="3"'
$eleNew = 'fill="none" stroke="var(--neon-blue)" stroke-width="3" class="dash-move" stroke-dasharray="10 5"'
$appJs = $appJs.Replace($eleOld, $eleNew)

$eleOld2 = 'fill="none" stroke="var(--neon-green)" stroke-width="3"'
$eleNew2 = 'fill="none" stroke="var(--neon-green)" stroke-width="3" class="dash-move" stroke-dasharray="10 5"'
$appJs = $appJs.Replace($eleOld2, $eleNew2)

$eleOld3 = 'polygon points="100,68 103,77 112,77 105,82 107,91 100,85 93,91 95,82 88,77 97,77" fill="var(--neon-yellow)"'
$eleNew3 = 'polygon points="100,68 103,77 112,77 105,82 107,91 100,85 93,91 95,82 88,77 97,77" fill="var(--neon-yellow)" class="blink-fast float-up-down"'
$appJs = $appJs.Replace($eleOld3, $eleNew3)

# system-operation-check
$sysOld = 'stroke-dasharray="15 5 10 5"'
$sysNew = 'stroke-dasharray="15 5 10 5" class="spin-slow" style="transform-origin: 100px 75px;"'
$appJs = $appJs.Replace($sysOld, $sysNew)

$sysOld2 = 'stroke-dasharray="4 4"'
$sysNew2 = 'stroke-dasharray="4 4" class="spin-slow" style="transform-origin: 100px 75px; animation-direction: reverse; animation-duration: 15s;"'
$appJs = $appJs.Replace($sysOld2, $sysNew2)

# icon-personal-notebook
$noteOld = 'fill="#03081a" stroke="var(--neon-blue)" stroke-width="2"'
$noteNew = 'fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" class="float-up-down"'
$appJs = $appJs.Replace($noteOld, $noteNew)

$noteOld2 = 'circle cx="100" cy="126" r="3" fill="var(--neon-blue)"'
$noteNew2 = 'circle cx="100" cy="126" r="3" fill="var(--neon-blue)" class="pulse-glow"'
$appJs = $appJs.Replace($noteOld2, $noteNew2)

# Update version to 70 to flush cache
$appJs = $appJs -replace "const CURRENT_VERSION = 'v47_ui_encoding';", "const CURRENT_VERSION = 'v70_fixed';"


[System.IO.File]::WriteAllText($appJsPath, $appJs, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Full script executed successfully."

$indexPath = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\index.html"
$indexHtml = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
$indexHtml = $indexHtml -replace "app.js\?v=\d+", "app.js?v=70"
[System.IO.File]::WriteAllText($indexPath, $indexHtml, (New-Object System.Text.UTF8Encoding $false))