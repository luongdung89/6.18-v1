$ErrorActionPreference = 'Stop'
$path = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\slides_data.js"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$jsonPart = $content -replace '^const INITIAL_SLIDES =\s*', '' -replace ';\s*$', ''
$slides = ConvertFrom-Json $jsonPart

foreach ($slide in $slides) {
    if ($slide.id -match "^T3-" -or $slide.id -match "^t3-") {
        
        if ($slide.type -eq "activity-intro") {
            $headingEl = $slide.elements | Where-Object { $_.type -eq "heading" }
            $boxEl = $slide.elements | Where-Object { $_.type -eq "box" -and $_.content -match "Tên hoạt động" }
            
            if ($boxEl -and $boxEl.content -match "<strong>Tên hoạt động:</strong>\s*(.*?)<br><br><strong>Nội dung:</strong>\s*(.*)") {
                $activityName = $Matches[1]
                $activityDesc = $Matches[2]
                $headingEl.content = $activityName.ToUpper()
                $boxEl.content = $activityDesc
                Write-Host "Updated $($slide.id) ACT-01 title"
            }
        }
        
        if ($slide.id -eq "T3-S1-ACT-04") {
            $boxEl = $slide.elements | Where-Object { $_.type -eq "box" -and $_.content -match "1. Thành phần" }
            if ($boxEl) {
                $newContent = "<div style='color: #00f3ff; font-size: 20px; font-weight: bold; margin-bottom: 15px;'>👉 ĐỀ BÀI: Kéo các từ khóa thả vào chỗ trống tương ứng.</div><p style='font-size: 18px; line-height: 1.8; color: #ffffff; margin-bottom: 20px;'>1. Thành phần <span class='t3-dropzone' id='t3-drop-1' data-correct='Đối tượng' ondrop='window.dropT3(event)' ondragover='window.allowDropT3(event)' style='display:inline-flex; align-items:center; justify-content:center; width:120px; height:30px; border:2px dashed #00f3ff; border-radius:4px; vertical-align:middle; background:rgba(0,243,255,0.1); margin: 0 5px;'></span> giúp AI xác định nội dung được tạo ra dành cho ai.<br><br>2. Thành phần <span class='t3-dropzone' id='t3-drop-2' data-correct='Yêu cầu' ondrop='window.dropT3(event)' ondragover='window.allowDropT3(event)' style='display:inline-flex; align-items:center; justify-content:center; width:120px; height:30px; border:2px dashed #2eb82e; border-radius:4px; vertical-align:middle; background:rgba(46,184,46,0.1); margin: 0 5px;'></span> giúp AI hiểu kết quả cần đáp ứng những đặc điểm nào.<br><br>3. Thành phần <span class='t3-dropzone' id='t3-drop-3' data-correct='Vai trò' ondrop='window.dropT3(event)' ondragover='window.allowDropT3(event)' style='display:inline-flex; align-items:center; justify-content:center; width:120px; height:30px; border:2px dashed #ffbd59; border-radius:4px; vertical-align:middle; background:rgba(255,189,89,0.1); margin: 0 5px;'></span> giúp AI hiểu mình cần nhập vai thành ai.<br><br>4. Thành phần <span class='t3-dropzone' id='t3-drop-4' data-correct='Nhiệm vụ' ondrop='window.dropT3(event)' ondragover='window.allowDropT3(event)' style='display:inline-flex; align-items:center; justify-content:center; width:120px; height:30px; border:2px dashed #ff66b2; border-radius:4px; vertical-align:middle; background:rgba(255,102,178,0.1); margin: 0 5px;'></span> cho AI biết cần thực hiện công việc gì.</p><div class='t3-chips-container' style='display:flex; justify-content:center; gap:15px; margin-bottom: 20px;'><div draggable='true' ondragstart='window.dragT3(event)' id='t3-chip-vt' class='t3-chip' data-val='Vai trò' style='padding:5px 15px; background:#ffbd59; color:#000; font-weight:bold; border-radius:15px; cursor:grab;'>Vai trò</div><div draggable='true' ondragstart='window.dragT3(event)' id='t3-chip-nv' class='t3-chip' data-val='Nhiệm vụ' style='padding:5px 15px; background:#ff66b2; color:#fff; font-weight:bold; border-radius:15px; cursor:grab;'>Nhiệm vụ</div><div draggable='true' ondragstart='window.dragT3(event)' id='t3-chip-dt' class='t3-chip' data-val='Đối tượng' style='padding:5px 15px; background:#00f3ff; color:#000; font-weight:bold; border-radius:15px; cursor:grab;'>Đối tượng</div><div draggable='true' ondragstart='window.dragT3(event)' id='t3-chip-yc' class='t3-chip' data-val='Yêu cầu' style='padding:5px 15px; background:#2eb82e; color:#fff; font-weight:bold; border-radius:15px; cursor:grab;'>Yêu cầu</div></div><div style='text-align: center;'><button onclick='window.checkT3DragAnswers()' style='background: linear-gradient(90deg, #ffbd59, #ff3366); border: none; padding: 10px 30px; border-radius: 20px; color: white; font-size: 18px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(255,189,89,0.5);'>KIỂM TRA ĐÁP ÁN</button></div>"
                $boxEl.content = $newContent
                Write-Host "Updated T3-S1-ACT-04 drag & drop"
            }
        }

        if ($slide.type -eq "activity-transition") {
            $leftBox = $slide.elements | Where-Object { $_.id -match "left" }
            $rightBox = $slide.elements | Where-Object { $_.id -match "right" }
            $visual = $slide.elements | Where-Object { $_.id -match "visual" }
            
            if ($leftBox -and $rightBox -and $visual) {
                $leftBox.x = 10
                $leftBox.y = 20
                $leftBox.w = 80
                $leftBox.h = 25
                
                $rightBox.x = 10
                $rightBox.y = 50
                $rightBox.w = 80
                $rightBox.h = 25
                
                $visual.x = 45
                $visual.y = 80
                $visual.w = 10
                $visual.h = 15
                Write-Host "Updated $($slide.id) transition layout"
            }
        }
        
        if ($slide.id -eq "T3-S8-ACT-04") {
            $boxEl = $slide.elements | Where-Object { $_.type -eq "box" -and $_.content -match "Ký và ghi rõ họ tên" }
            if ($boxEl) {
                $boxEl.content = $boxEl.content -replace "<input type='text' placeholder='Ký và ghi rõ họ tên.*?>", ""
                $boxEl.content = $boxEl.content -replace "HOÀN THÀNH NHIỆM VỤ</button>", "CAM KẾT VÀ HOÀN THÀNH NHIỆM VỤ</button>"
                $boxEl.content = $boxEl.content -replace "window\.triggerConfetti\(\)", "window.triggerCommitPopup()"
                # Make button center aligned
                $boxEl.content = $boxEl.content -replace "justify-content: space-between;", "justify-content: center;"
                Write-Host "Updated T3-S8-ACT-04 commitment slip"
            }
        }
    }
}

$newJson = ConvertTo-Json $slides -Depth 20
$newContent = "const INITIAL_SLIDES = " + $newJson + ";"
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($path, $newContent, $utf8NoBom)
Write-Host "Done slides_data.js"