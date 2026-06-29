$text = [System.IO.File]::ReadAllText("slides_data.js", [System.Text.Encoding]::UTF8)

# 1. Slide 32 Tiết 1
$text = $text.Replace('>AI là ai?</div>', '>Vai trò</div>')
$text = $text.Replace('>Làm gì?</div>', '>Nhiệm vụ</div>')
$text = $text.Replace('>Cho ai?</div>', '>Đối tượng</div>')
$text = $text.Replace('>Kết quả thế nào?</div>', '>Yêu cầu</div>')
# Fix the placeholder slots as well which have </div without > 
$text = $text.Replace('AI là ai?</div', 'Vai trò</div')
$text = $text.Replace('Làm gì?</div', 'Nhiệm vụ</div')
$text = $text.Replace('Cho ai?</div', 'Đối tượng</div')
$text = $text.Replace('Kết quả thế nào?</div', 'Yêu cầu</div')

# 2. Slide 28 tiết 1 bảng
$text = $text.Replace('font-size:1.05em;"', 'font-size:1.35em;"')
$text = $text.Replace('font-size:1.15em;"', 'font-size:1.45em;"')
$text = $text.Replace('font-size:1.0em;"', 'font-size:1.3em;"')
$text = $text.Replace('font-size:1.1em;"', 'font-size:1.4em;"')

# 3. các slide ACT 03 HƯớng dẫn thực hiện tiết 1
$text = $text.Replace('"fontSize": "20pt"', '"fontSize": "16pt"')

# 4. Tiết 2: S3-act-04 (4 slide)
$blocks = @("t2-s3-a4-screen-a", "t2-s3-a4-screen-b", "t2-s3-a4-screen-c", "t2-s3-a4-screen-d")
foreach ($id in $blocks) {
    $idx1 = $text.IndexOf("`"id`": `"$id`"")
    if ($idx1 -ge 0) {
        $idx2 = $text.IndexOf("`"id`": `"t2", $idx1 + 10)
        if ($idx2 -lt 0) { $idx2 = $text.Length }
        
        $subStr = $text.Substring($idx1, $idx2 - $idx1)
        $subStr = $subStr.Replace("font-size: 13pt;", "font-size: 16pt;")
        $subStr = $subStr.Replace("font-size: 11pt;", "font-size: 14pt;")
        
        $text = $text.Substring(0, $idx1) + $subStr + $text.Substring($idx2)
    }
}

[System.IO.File]::WriteAllText("slides_data.js", $text, [System.Text.Encoding]::UTF8)
Write-Host "Done"
