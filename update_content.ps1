$appJsPath = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\app.js"
$appJs = [System.IO.File]::ReadAllText($appJsPath, [System.Text.Encoding]::UTF8)

# 1. Add SVGs to app.js
$newSVGs = @"
      case 'commitment-stamp':
        innerSVG = `
          <!-- Stamp outline -->
          <circle cx="100" cy="100" r="50" fill="none" stroke="var(--neon-green)" stroke-width="4" stroke-dasharray="10 5" />
          <circle cx="100" cy="100" r="40" fill="rgba(46, 184, 46, 0.2)" stroke="var(--neon-green)" stroke-width="2" />
          <!-- Star icon -->
          <path d="M100 70 L108 85 L125 85 L112 95 L116 110 L100 102 L84 110 L88 95 L75 85 L92 85 Z" fill="var(--neon-yellow)" />
          <!-- Text Cam kết -->
          <text x="100" y="125" font-family="Arial" font-size="12" font-weight="bold" fill="var(--neon-green)" text-anchor="middle">CAM KẾT</text>
        `;
        break;

      case 'fingerprint-scan':
        innerSVG = `
          <!-- Scanning beam -->
          <line x1="50" y1="50" x2="150" y2="50" stroke="var(--neon-blue)" stroke-width="3">
            <animate attributeName="y1" values="50;150;50" dur="2s" repeatCount="indefinite" />
            <animate attributeName="y2" values="50;150;50" dur="2s" repeatCount="indefinite" />
          </line>
          <!-- Fingerprint outline -->
          <path d="M70 120 C 70 70, 130 70, 130 120 M80 120 C 80 85, 120 85, 120 120 M90 120 C 90 100, 110 100, 110 120" fill="none" stroke="var(--neon-green)" stroke-width="4" stroke-linecap="round" />
          <path d="M100 120 C 100 110, 100 110, 100 110" fill="none" stroke="var(--neon-green)" stroke-width="4" stroke-linecap="round" />
        `;
        break;

      case 'system-gears':
        innerSVG = `
          <!-- Gear 1 -->
          <circle cx="80" cy="80" r="25" fill="none" stroke="var(--neon-orange)" stroke-width="4" />
          <path d="M80 45 L80 55 M80 105 L80 115 M45 80 L55 80 M105 80 L115 80 M55 55 L62 62 M98 98 L105 105 M105 55 L98 62 M62 98 L55 105" stroke="var(--neon-orange)" stroke-width="4" />
          <!-- Gear 2 -->
          <circle cx="125" cy="115" r="15" fill="none" stroke="var(--neon-blue)" stroke-width="3" />
          <path d="M125 90 L125 100 M125 130 L125 140 M100 115 L110 115 M140 115 L150 115 M107 97 L114 104 M136 126 L143 133 M143 97 L136 104 M114 126 L107 133" stroke="var(--neon-blue)" stroke-width="3" />
        `;
        break;

      case 'student-presentation-board':
        innerSVG = `
          <!-- Presentation Board -->
          <rect x="40" y="40" width="120" height="70" rx="2" fill="rgba(255, 255, 255, 0.05)" stroke="var(--neon-blue)" stroke-width="2" />
          <line x1="60" y1="110" x2="50" y2="150" stroke="var(--neon-blue)" stroke-width="2" />
          <line x1="140" y1="110" x2="150" y2="150" stroke="var(--neon-blue)" stroke-width="2" />
          <!-- Charts on board -->
          <rect x="50" y="55" width="20" height="40" fill="var(--neon-green)" opacity="0.7" />
          <rect x="75" y="70" width="20" height="25" fill="var(--neon-orange)" opacity="0.7" />
          <rect x="100" y="45" width="20" height="50" fill="var(--neon-pink)" opacity="0.7" />
          <!-- Student figure -->
          <circle cx="145" cy="110" r="10" fill="var(--neon-yellow)" />
          <line x1="145" y1="120" x2="145" y2="150" stroke="var(--neon-yellow)" stroke-width="4" />
          <line x1="145" y1="125" x2="125" y2="115" stroke="var(--neon-yellow)" stroke-width="3" />
        `;
        break;

    default:
"@

$appJs = $appJs -replace '(?s)[ \t]*default:', $newSVGs
$appJs = $appJs.Replace("v66_unlocked", "v67_content")
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($appJsPath, $appJs, $utf8NoBom)

# 2. Update slides_data.js
$slidesPath = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\slides_data.js"
$slides = [System.IO.File]::ReadAllText($slidesPath, [System.Text.Encoding]::UTF8)

# Delete T3-S8-ACT-06
$slides = $slides -replace '(?s),\s*\{\s*"id":\s*"T3-S8-ACT-06".*?\}\s*\]\s*;', '];'

# Replace visuals
$slides = $slides -replace '("id":\s*"t3-s8-act-04-3"[\s\S]*?"content":\s*)"specialist-id-badge"', '$1"commitment-stamp"'
$slides = $slides -replace '("id":\s*"t3-s8-act-01-3"[\s\S]*?"content":\s*)"specialist-id-badge"', '$1"fingerprint-scan"'
$slides = $slides -replace '("id":\s*"t3-s8-3"[\s\S]*?"content":\s*)"action-checklist-board"', '$1"system-gears"'
$slides = $slides -replace '("id":\s*"t3-s4-act-04-3"[\s\S]*?"content":\s*)"electric-clash-shield"', '$1"student-presentation-board"'

# Slide 8 new content
$newS8Content = "<div style='color: #00f3ff; font-size: 20px; font-weight: bold; margin-bottom: 15px;'>👉 ĐỀ BÀI: Kéo các từ khóa thả vào chỗ trống tương ứng.</div><p style='font-size: 18px; line-height: 1.8; color: #ffffff; margin-bottom: 20px;'>1. Thành phần <span class='t3-dropzone' id='t3-drop-1' data-correct='Đối tượng' ondrop='window.dropT3(event)' ondragover='window.allowDropT3(event)' style='display:inline-flex; align-items:center; justify-content:center; width:120px; height:30px; border:2px dashed #a0aec0; border-radius:4px; vertical-align:middle; background:rgba(255,255,255,0.05); margin: 0 5px;'></span> giúp AI xác định nội dung được tạo ra dành cho ai.<br><br>2. Thành phần <span class='t3-dropzone' id='t3-drop-2' data-correct='Nhiệm vụ' ondrop='window.dropT3(event)' ondragover='window.allowDropT3(event)' style='display:inline-flex; align-items:center; justify-content:center; width:120px; height:30px; border:2px dashed #a0aec0; border-radius:4px; vertical-align:middle; background:rgba(255,255,255,0.05); margin: 0 5px;'></span> cho AI biết cần thực hiện công việc gì.<br><br>3. Thành phần <span class='t3-dropzone' id='t3-drop-3' data-correct='Yêu cầu' ondrop='window.dropT3(event)' ondragover='window.allowDropT3(event)' style='display:inline-flex; align-items:center; justify-content:center; width:120px; height:30px; border:2px dashed #a0aec0; border-radius:4px; vertical-align:middle; background:rgba(255,255,255,0.05); margin: 0 5px;'></span> giúp AI hiểu kết quả cần đáp ứng những đặc điểm nào.<br><br>4. Thành phần <span class='t3-dropzone' id='t3-drop-4' data-correct='Vai trò' ondrop='window.dropT3(event)' ondragover='window.allowDropT3(event)' style='display:inline-flex; align-items:center; justify-content:center; width:120px; height:30px; border:2px dashed #a0aec0; border-radius:4px; vertical-align:middle; background:rgba(255,255,255,0.05); margin: 0 5px;'></span> giúp AI hiểu mình cần nhập vai thành ai.</p><div class='t3-chips-container' style='display:flex; justify-content:center; gap:15px; margin-bottom: 20px;'><div draggable='true' ondragstart='window.dragT3(event)' id='t3-chip-vt' class='t3-chip' data-val='Vai trò' style='padding:5px 15px; background:#ffbd59; color:#000; font-weight:bold; border-radius:15px; cursor:grab;'>Vai trò</div><div draggable='true' ondragstart='window.dragT3(event)' id='t3-chip-nv' class='t3-chip' data-val='Nhiệm vụ' style='padding:5px 15px; background:#ff66b2; color:#fff; font-weight:bold; border-radius:15px; cursor:grab;'>Nhiệm vụ</div><div draggable='true' ondragstart='window.dragT3(event)' id='t3-chip-dt' class='t3-chip' data-val='Đối tượng' style='padding:5px 15px; background:#00f3ff; color:#000; font-weight:bold; border-radius:15px; cursor:grab;'>Đối tượng</div><div draggable='true' ondragstart='window.dragT3(event)' id='t3-chip-yc' class='t3-chip' data-val='Yêu cầu' style='padding:5px 15px; background:#2eb82e; color:#fff; font-weight:bold; border-radius:15px; cursor:grab;'>Yêu cầu</div></div><div style='text-align: center;'><button onclick='window.checkT3DragAnswers()' style='background: linear-gradient(90deg, #ffbd59, #ff3366); border: none; padding: 10px 30px; border-radius: 20px; color: white; font-size: 18px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(255,189,89,0.5);'>KIỂM TRA ĐÁP ÁN</button></div>"
$slides = $slides -replace '("id":\s*"t3-s1-act-04-2"[\s\S]*?"content":\s*)".*?"', "`$1`"$newS8Content`""

[System.IO.File]::WriteAllText($slidesPath, $slides, $utf8NoBom)

# 3. Update index.html
$indexPath = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\index.html"
$indexHtml = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
$indexHtml = $indexHtml -replace "v=66", "v=67"
[System.IO.File]::WriteAllText($indexPath, $indexHtml, $utf8NoBom)
Write-Host "Done"