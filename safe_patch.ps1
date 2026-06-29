$content = [System.IO.File]::ReadAllText("slides_data.js", [System.Text.Encoding]::UTF8)

# 1. Slide 32 Tiết 1
$content = $content.Replace('>AI là ai?</div>', '>Vai trò</div>')
$content = $content.Replace('>Làm gì?</div>', '>Nhiệm vụ</div>')
$content = $content.Replace('>Cho ai?</div>', '>Đối tượng</div>')
$content = $content.Replace('>Kết quả thế nào?</div>', '>Yêu cầu</div>')
$content = $content.Replace('AI là ai?</div', 'Vai trò</div')
$content = $content.Replace('Làm gì?</div', 'Nhiệm vụ</div')
$content = $content.Replace('Cho ai?</div', 'Đối tượng</div')
$content = $content.Replace('Kết quả thế nào?</div', 'Yêu cầu</div')
$content = $content.Replace('AI là ai?</td>', 'Vai trò</td>')
$content = $content.Replace('Làm gì?</td>', 'Nhiệm vụ</td>')
$content = $content.Replace('Cho ai?</td>', 'Đối tượng</td>')
$content = $content.Replace('Kết quả thế nào?</td>', 'Yêu cầu</td>')


# 2. Slide 28 tiết 1 bảng
$content = $content.Replace('font-size:1.05em;"', 'font-size:1.35em;"')
$content = $content.Replace('font-size:1.15em;"', 'font-size:1.45em;"')
$content = $content.Replace('font-size:1.0em;"', 'font-size:1.3em;"')
$content = $content.Replace('font-size:1.1em;"', 'font-size:1.4em;"')
$content = $content.Replace("font-size:1.05em;'>", "font-size:1.35em;'>")
$content = $content.Replace("font-size:1.15em; width", "font-size:1.45em; width")

# 3. các slide ACT 03 HƯớng dẫn thực hiện tiết 1
$content = $content.Replace('"fontSize": "20pt"', '"fontSize": "16pt"')

# 4. Tiết 2: S3-act-04 (4 slide)
$blocks = @("t2-s3-a4-screen-a", "t2-s3-a4-screen-b", "t2-s3-a4-screen-c", "t2-s3-a4-screen-d")
foreach ($id in $blocks) {
    $idx1 = $content.IndexOf("`"id`": `"$id`"")
    if ($idx1 -ge 0) {
        $idx2 = $content.IndexOf("`"id`": `"t2", $idx1 + 10)
        if ($idx2 -lt 0) { $idx2 = $content.Length }
        
        $subStr = $content.Substring($idx1, $idx2 - $idx1)
        
        if ($id -eq "t2-s3-a4-screen-d") {
            $subStr = $subStr.Replace("font-size: 13pt;", "font-size: 17pt;")
            $subStr = $subStr.Replace("font-size: 11pt;", "font-size: 15pt;")
        } else {
            $subStr = $subStr.Replace("font-size: 13pt;", "font-size: 16pt;")
            $subStr = $subStr.Replace("font-size: 11pt;", "font-size: 14pt;")
        }
        
        $content = $content.Substring(0, $idx1) + $subStr + $content.Substring($idx2)
    }
}

# 5. Tiết 1: S4-ACT-04: Ô tô xanh dương căn chỉnh sang trái
$content = $content.Replace('id=\"s4-btn-blue\" class=\"btn\" style=\"background:', 'id=\"s4-btn-blue\" class=\"btn\" style=\"text-align: left; background:')

$utf8NoBom = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllText("slides_data.js", $content, $utf8NoBom)
Write-Host "Done patching."
