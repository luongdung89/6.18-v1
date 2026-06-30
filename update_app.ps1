$ErrorActionPreference = 'Stop'
$js = @"

// --- NEW TIẾT 3 LOGIC ---
window.allowDropT3 = function(ev) {
  ev.preventDefault();
}

window.dragT3 = function(ev) {
  ev.dataTransfer.setData("text", ev.target.dataset.val);
  ev.dataTransfer.setData("sourceId", ev.target.id);
}

window.dropT3 = function(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var sourceId = ev.dataTransfer.getData("sourceId");
  
  if (ev.target.classList.contains('t3-dropzone')) {
      ev.target.innerText = data;
      ev.target.style.background = 'rgba(255,255,255,0.2)';
      ev.target.style.color = '#fff';
      ev.target.style.fontWeight = 'bold';
  }
}

window.checkT3DragAnswers = function() {
    let correct = 0;
    for (let i = 1; i <= 4; i++) {
        let dropzone = document.getElementById('t3-drop-' + i);
        if (dropzone && dropzone.innerText.trim() === dropzone.dataset.correct) {
            correct++;
            dropzone.style.border = '2px solid var(--neon-green)';
        } else if (dropzone) {
            dropzone.style.border = '2px dashed var(--neon-red)';
        }
    }
    if(correct === 4) alert('Chính xác tuyệt đối! Cả 4 đáp án đều đúng.');
    else alert(`Bạn đã trả lời đúng ${correct}/4 câu. Hãy thử lại những câu sai nhé!`);
}

window.triggerCommitPopup = function() {
    if (window.confetti) {
        confetti({ particleCount: 300, spread: 160, origin: { y: 0.6 } });
    }
    
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0'; overlay.style.left = '0';
    overlay.style.width = '100vw'; overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.85)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.id = 'commit-popup-overlay';
    
    const popup = document.createElement('div');
    popup.style.background = 'linear-gradient(135deg, #1a202c, #2d3748)';
    popup.style.padding = '40px 60px';
    popup.style.borderRadius = '20px';
    popup.style.border = '4px solid #ffbd59';
    popup.style.boxShadow = '0 0 40px rgba(255,189,89,0.5)';
    popup.style.textAlign = 'center';
    popup.style.color = '#fff';
    popup.style.animation = 'popin 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    popup.innerHTML = `
        <h1 style="color: #00f3ff; font-size: 48px; margin-bottom: 20px; text-shadow: 0 0 10px rgba(0,243,255,0.5);">🎉 CHÚC MỪNG! 🎉</h1>
        <p style="font-size: 24px; line-height: 1.5; color: #e2e8f0;">Bạn đã chính thức hoàn thành nhiệm vụ và<br>trở thành một <strong>CHUYÊN GIA AI</strong> xuất sắc!</p>
        <button onclick="document.body.removeChild(document.getElementById('commit-popup-overlay'))" style="margin-top: 30px; background: #ffbd59; color: #1a202c; border: none; padding: 15px 40px; font-size: 20px; font-weight: bold; border-radius: 30px; cursor: pointer; transition: transform 0.2s;">Hoàn tất</button>
    `;
    
    if (!document.getElementById('popin-style')) {
        const style = document.createElement('style');
        style.id = 'popin-style';
        style.innerHTML = `@keyframes popin { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }`;
        document.head.appendChild(style);
    }
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
}
"@

$path = "d:\SynologyDrive1\SynologyDrive\SLIDE ANTI\6.18_Su dung AI hieu qua\app.js"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Replace version
$content = $content -replace "const CURRENT_VERSION = 'v47_ui_encoding';", "const CURRENT_VERSION = 'v61_new_ui';"

# Remove btn-undo logic
$content = $content -replace '(?s)const undoBtn = document\.getElementById\(''btn-undo''\);.*?if \(undoBtn\) \{.*?\}', ''

$newContent = $content + "`n" + $js
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($path, $newContent, $utf8NoBom)
Write-Host "Done app.js"