import re
import json

with open('full_prompt_t3.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Define the slides to generate
slides = []

# Hand-crafted P0 slides
slides.append({
    "id": "T3-P0-01",
    "stage": "PRE-LESSON",
    "title": "Welcome Screen",
    "type": "welcome",
    "bgStyle": "welcome-bg",
    "elements": [
        {"id": "t3-w-1", "type": "heading", "content": "Bài 6.18: Sử dụng AI hiệu quả", "x": 5, "y": 10, "w": 90, "h": 10, "fontSize": "48px", "color": "#00f3ff", "align": "center"},
        {"id": "t3-w-2", "type": "subheading", "content": "Tiết 3: Diễn đàn chuyên gia công nghệ", "x": 5, "y": 22, "w": 90, "h": 8, "fontSize": "32px", "color": "#ffffff", "align": "center"},
        {"id": "t3-w-3", "type": "box", "content": "<div style='text-align:center;'><strong>Chủ đề:</strong> Kỹ năng công nghệ và học tập chủ động<br><strong>Role:</strong> Chuyên gia công nghệ</div>", "x": 20, "y": 32, "w": 60, "h": 10, "fontSize": "22px", "color": "#00ffcc", "align": "center", "bg": "transparent", "border": "none"},
        {"id": "t3-w-4", "type": "box", "content": "<strong>MỤC TIÊU BÀI HỌC:</strong><br><br>o Kiến thức: Tổng hợp các góc nhìn về tầm quan trọng của từng thành phần câu lệnh<br>o Kỹ năng: Trình bày ý kiến rõ ràng, biết lắng nghe, đặt câu hỏi phản biện và làm việc nhóm hiệu quả.<br>o Thái độ: Tôn trọng ý kiến khác biệt.", "x": 5, "y": 45, "w": 55, "h": 45, "fontSize": "20px", "color": "#ffffff", "align": "left", "bg": "rgba(0, 243, 255, 0.05)", "border": "1px solid rgba(0, 243, 255, 0.2)"},
        {"id": "t3-w-5", "type": "visual", "content": "dashboard-ai-mesh", "x": 63, "y": 45, "w": 32, "h": 45}
    ]
})

slides.append({
    "id": "T3-P0-02",
    "stage": "PRE-LESSON",
    "title": "Big Question",
    "type": "big-question",
    "bgStyle": "dashboard-bg",
    "elements": [
        {"id": "t3-bq-1", "type": "heading", "content": "CÂU HỎI LỚN", "x": 5, "y": 10, "w": 90, "h": 10, "fontSize": "40px", "color": "#00f3ff", "align": "center"},
        {"id": "t3-bq-2", "type": "box", "content": "<div class='glow-text' style='font-size: 32px; line-height: 1.5; color: #ffbd59; text-align: center; padding: 10px;'>Thuyết phục như thế nào để hội đồng chuyên gia phê duyệt xây dựng bộ khuyến nghị sử dụng AI hiệu quả?</div>", "x": 5, "y": 30, "w": 55, "h": 45, "fontSize": "26px", "color": "#ffffff", "align": "center", "bg": "rgba(255, 189, 89, 0.05)", "border": "2px solid rgba(255, 189, 89, 0.3)"},
        {"id": "t3-bq-3", "type": "visual", "content": "computer-data-screen", "x": 63, "y": 30, "w": 32, "h": 45}
    ]
})

slides.append({
    "id": "T3-P0-03",
    "stage": "PRE-LESSON",
    "title": "Role Introduction",
    "type": "activity",
    "bgStyle": "role-bg",
    "elements": [
        {"id": "t3-r-1", "type": "heading", "content": "VAI TRÒ CỦA BẠN", "x": 5, "y": 10, "w": 90, "h": 10, "fontSize": "36px", "color": "#00f3ff", "align": "center"},
        {"id": "t3-r-2", "type": "box", "content": "<strong>Tên Role:</strong> Chuyên gia công nghệ<br><br><strong>Bạn sẽ trở thành:</strong> Những chuyên gia công nghệ tham gia diễn đàn để trao đổi, phản biện và bảo vệ ý tưởng của mình.<br><br><strong>Nhiệm vụ của bạn:</strong> Thảo luận và bảo vệ ý kiến của nhóm, đặt câu hỏi, phản biện dựa trên các bằng chứng và cùng xây dựng bộ khuyến nghị sử dụng AI hiệu quả.", "x": 5, "y": 30, "w": 55, "h": 45, "fontSize": "22px", "color": "#ffffff", "align": "left", "bg": "rgba(0, 243, 255, 0.05)", "border": "1px solid rgba(0, 243, 255, 0.3)"},
        {"id": "t3-r-3", "type": "visual", "content": "specialist-id-badge", "x": 63, "y": 30, "w": 32, "h": 45}
    ]
})

# Define the structure for stages
stages = [
    {
        "id": "S1", "num": 1, "name": "Mở khóa nhiệm vụ", 
        "acts": [
            {"id": "ACT-01", "title": "Khởi động Diễn đàn", "type": "activity-intro", "content": "<strong>Nội dung:</strong> Diễn đàn chuyên gia AI sắp bắt đầu. Các nhóm hãy kiểm tra lại các hồ sơ chuyên gia đang bị thiếu dữ liệu.", "vis": "red-warning-dialog"},
            {"id": "ACT-02", "title": "Preparation", "type": "activity", "content": "<strong>Dụng cụ:</strong> Giấy, bút<br><strong>Hình thức tổ chức:</strong> Nhóm 4.", "vis": "icon-group-4-people"},
            {"id": "ACT-03", "title": "How To", "type": "activity", "content": "<strong>Bước 1:</strong> Đọc các câu mô tả vai trò của thành phần câu lệnh trên màn hình<br><strong>Bước 2:</strong> Thảo luận nhanh và xác định từ phù hợp để hoàn thành câu mô tả.<br><strong>Bước 3:</strong> Viết đáp án ra giấy và giơ cao đáp án.", "vis": "abcd-answer-cards"},
            {"id": "ACT-04", "title": "Activity Workspace", "type": "activity", "content": "<strong>Đề bài:</strong> Điền từ phù hợp để hoàn thành các câu sau:<br>1. Thành phần __________ giúp AI hiểu mình cần nhập vai thành ai.<br>2. Thành phần __________ cho AI biết cần thực hiện công việc gì.<br>3. Thành phần __________ giúp AI xác định nội dung được tạo ra dành cho ai.<br>4. Thành phần __________ giúp AI hiểu kết quả cần đáp ứng những đặc điểm nào.<br><br><strong>Sản phẩm cần hoàn thành:</strong> Hoàn thành 4 câu mô tả vai trò của các thành phần câu lệnh AI.<br><strong>Thời gian:</strong> 3 phút", "vis": "computer-data-screen"},
            {"id": "ACT-05", "title": "Report & Debrief", "type": "result", "content": "<strong>Kết quả:</strong><br>1. Thành phần Vai trò giúp AI hiểu mình cần nhập vai thành ai.<br>2. Thành phần Nhiệm vụ cho AI biết cần thực hiện công việc gì.<br>3. Thành phần Đối tượng giúp AI xác định nội dung được tạo ra dành cho ai.<br>4. Thành phần Yêu cầu giúp AI hiểu kết quả cần đáp ứng những đặc điểm nào.", "vis": "system-operation-check"},
            {"id": "ACT-06", "title": "Transition", "type": "activity-transition", "content": "<strong>Chúng ta vừa ôn lại:</strong> Vai trò của 4 thành phần trong câu lệnh AI.<br><br><strong>Câu hỏi tiếp theo:</strong> Nếu phải bảo vệ ý kiến của mình trước các nhóm khác, chúng ta sẽ lập luận như thế nào để chứng minh thành phần mình phụ trách là quan trọng?", "vis": "stage-transition-arrow"}
        ]
    },
    {
        "id": "S2", "num": 2, "name": "Nhận luật tranh biện",
        "acts": [
            {"id": "ACT-01", "title": "Kích hoạt bộ quy tắc diễn dàn", "type": "activity-intro", "content": "<strong>Nội dung:</strong> Diễn đàn chuyên gia AI sắp bước vào phần tranh biện. Hệ thống yêu cầu các nhóm tìm hiểu những quy tắc cần tuân thủ để cuộc tranh biện diễn ra công bằng và hiệu quả.", "vis": "debate-four-badges"},
            {"id": "ACT-04", "title": "Activity Workspace", "type": "activity", "content": "<strong>Đề bài:</strong> Hãy đọc kỹ và tuân thủ quy tắc tranh biện cùng các tiêu chí đánh giá sau:<br><br><strong>QUY TẮC TRANH BIỆN</strong><br>✔ Tập trung trao đổi về ý kiến và lập luận.<br>✔ Tôn trọng ý kiến của các nhóm khác, không công kích cá nhân.<br>✔ Lắng nghe hết lượt nói của đội bạn, không ngắt lời.<br>✔ Sử dụng ví dụ hoặc tình huống thực tế để bảo vệ quan điểm của nhóm.<br><br><strong>TIÊU CHÍ ĐÁNH GIÁ</strong><br>⭐ Lập luận rõ ràng: Nêu được ý kiến và giải thích hợp lý.<br>⭐ Có bằng chứng: Đưa ra được ví dụ hoặc tình huống phù hợp.<br>⭐ Phản biện hợp lý: Trả lời đúng câu hỏi mà nhóm khác đưa ra.<br>⭐ Trình bày tự tin: Nói rõ ràng, dễ hiểu và đúng thời gian quy định.<br><br><strong>Sản phẩm:</strong> Sự đồng thuận và cam kết tuân thủ 100% quy tắc tranh biện của diễn đàn.<br><strong>Thời gian:</strong> 4 phút", "vis": "computer-data-screen"},
            {"id": "ACT-06", "title": "Transition", "type": "activity-transition", "content": "<strong>Chúng ta vừa khám phá:</strong> Các quy tắc tranh biện và tiêu chí đánh giá của Diễn đàn chuyên gia AI.<br><br><strong>Câu hỏi tiếp theo:</strong> Các nhóm sẽ phân công nhiệm vụ và chuẩn bị lập luận như thế nào trước khi bước vào tranh biện?", "vis": "stage-transition-arrow"}
        ]
    },
    {
        "id": "S3", "num": 3, "name": "Diễn tập cuối",
        "acts": [
            {"id": "ACT-01", "title": "Chuẩn bị đội hình tranh biện", "type": "activity-intro", "content": "<strong>Nội dung:</strong> Diễn đàn chuyên gia AI sắp bắt đầu. Các nhóm hãy nhanh chóng phân công nhiệm vụ và luyện tập để sẵn sàng trình bày ý kiến của mình.", "vis": "icon-group-4-people"},
            {"id": "ACT-03", "title": "How To", "type": "activity", "content": "<strong>Bước 1:</strong> Các nhóm cùng rà soát hồ sơ lập luận và nội dung đã chuẩn bị.<br><strong>Bước 2:</strong> Thảo luận phân công người trình bày phù hợp.<br><strong>Bước 3:</strong> Luyện tập nhanh phần trình bày để khớp thời gian quy định.", "vis": "dashboard-ai-mesh"},
            {"id": "ACT-04", "title": "Activity Workspace", "type": "activity", "content": "<strong>Đề bài:</strong> Hoàn thành việc phân công vai trò và luyện tập phần trình bày của nhóm.<br>o Người nói 1: Giới thiệu lập trường và luận điểm chính.<br>o Người nói 2: Giải thích lý do và đưa ra ví dụ hoặc bằng chứng.<br>o Người nói 3: Trả lời câu hỏi chất vấn của nhóm bạn và tổng kết.<br><br><strong>Sản phẩm cần hoàn thành:</strong> các thành viên nắm rõ nhiệm vụ của mình.<br><strong>Thời gian:</strong> 5 phút", "vis": "computer-data-screen"},
            {"id": "ACT-06", "title": "Transition", "type": "activity-transition", "content": "<strong>Chúng ta vừa hoàn thành:</strong> Phân công vai trò và luyện tập phần trình bày của nhóm.<br><br><strong>Câu hỏi tiếp theo:</strong> Các nhóm sẽ bảo vệ ý kiến của mình như thế nào trong Diễn đàn chuyên gia AI?", "vis": "stage-transition-arrow"}
        ]
    },
    {
        "id": "S4", "num": 4, "name": "Tranh biện đồng đội và chất vấn",
        "acts": [
            {"id": "ACT-01", "title": "Trình bày quan điểm Chuyên gia", "type": "activity-intro", "content": "<strong>Nội dung:</strong> Diễn đàn chuyên gia AI chính thức bắt đầu. Mỗi nhóm sẽ lần lượt trình bày và bảo vệ quan điểm của mình về thành phần câu lệnh mà nhóm phụ trách.", "vis": "electric-clash-shield"},
            {"id": "ACT-02", "title": "Preparation", "type": "activity", "content": "<strong>Dụng cụ học tập:</strong> Phiếu theo dõi lập luận nhận từ giáo viên, bút viết.<br><strong>Hình thức tổ chức:</strong> 4 nhóm", "vis": "icon-group-4-people"},
            {"id": "ACT-03", "title": "How To", "type": "activity", "content": "<strong>Bước 1:</strong> Lần lượt hai người nói đầu tiên đại diện của từng nhóm lên trình bày.<br><strong>Bước 2:</strong> Các nhóm còn lại lắng nghe và ghi lại những ý chính, ví dụ, bằng chứng vào Phiếu theo dõi lập luận, và đặt câu hỏi cho nhóm trình bày.<br><strong>Bước 3:</strong> Người nói thứ 3 trả lời câu hỏi phản biện và tổng kết", "vis": "dashboard-ai-mesh"},
            {"id": "ACT-04", "title": "Activity Workspace", "type": "activity", "content": "<strong>Đề bài:</strong> Chủ đề: \"Thành phần không thể thiếu trong câu lệnh cho AI là _________\"<br><br><strong>Sản phẩm cần hoàn thành:</strong> 4 bài trình bày của các nhóm.<br><strong>Thời gian:</strong> 10 phút", "vis": "computer-data-screen"},
            {"id": "ACT-06", "title": "Transition", "type": "activity-transition", "content": "<strong>Chúng ta vừa khám phá:</strong> Lắng nghe và tìm hiểu quan điểm của cả 4 nhóm.<br><br><strong>Câu hỏi tiếp theo:</strong> Khi bước vào phiên đối thoại trực tiếp, những cuộc đấu trí chất vấn chéo sẽ diễn ra dồn dập ra sao?", "vis": "stage-transition-arrow"}
        ]
    },
    {
        "id": "S6", "num": 6, "name": "Hội đồng chuyên gia kết luận",
        "acts": [
            {"id": "ACT-05", "title": "Report & Debrief", "type": "result", "content": "<strong>Kết quả:</strong> Bộ khuyến nghị sử dụng AI hiệu quả được hoàn thiện với sự đồng thuận của các chuyên gia, khẳng định: Sử dụng đầy đủ 4 thành phần lệnh:<br>1. Xác định rõ Vai trò.<br>2. Nêu đúng Nhiệm vụ.<br>3. Chỉ rõ Đối tượng.<br>4. Mô tả cụ thể Yêu cầu.<br><br><strong>Thông điệp chính:</strong> AI chỉ tạo ra kết quả tốt khi chúng ta đưa ra câu lệnh rõ ràng.", "vis": "system-operation-check"},
            {"id": "ACT-06", "title": "Transition", "type": "activity-transition", "content": "<strong>Chúng ta vừa hoàn thành:</strong> Bộ khuyến nghị sử dụng AI hiệu quả.<br><br><strong>Câu hỏi tiếp theo:</strong> Sau bài học hôm nay, em sẽ áp dụng những nguyên tắc nào khi sử dụng AI trong học tập?", "vis": "stage-transition-arrow"}
        ]
    },
    {
        "id": "S7", "num": 7, "name": "Nhật ký chuyên gia",
        "acts": [
            {"id": "ACT-01", "title": "Nhật ký Chuyên gia - Tập 3", "type": "activity-intro", "content": "<strong>Nội dung:</strong> Tự nhìn lại những điều mình học được và bài học muốn áp dụng khi sử dụng AI.", "vis": "digital-diary-illustration"},
            {"id": "ACT-02", "title": "Preparation", "type": "activity", "content": "<strong>Dụng cụ:</strong> Phiếu \"Nhật ký chuyên gia\" nhận từ giáo viên, bút.<br><strong>Hình thức tổ chức:</strong> Cá nhân.", "vis": "icon-group-4-people"},
            {"id": "ACT-04", "title": "Activity Workspace", "type": "activity", "content": "<strong>Đề bài:</strong> Hãy hoàn thành Phiếu \"Nhật ký chuyên gia\" bằng cách trả lời hai câu hỏi sau:<br>Điều em hiểu sâu hơn sau tranh biện là…<br>Điều em muốn cải thiện là…<br><br><strong>Sản phẩm cần hoàn thành:</strong> Phiếu \"Nhật ký chuyên gia\" được hoàn thành với những suy nghĩ và bài học của bản thân.<br><strong>Thời gian:</strong> 4 phút", "vis": "computer-data-screen"},
            {"id": "ACT-06", "title": "Transition", "type": "activity-transition", "content": "<strong>Chúng ta vừa hoàn thành:</strong> Nhật ký ghi lại những điều mỗi chuyên gia học được sau Diễn đàn.<br><br><strong>Câu hỏi tiếp theo:</strong> Em sẽ thực hiện cam kết nào để sử dụng AI hiệu quả trong học tập hằng ngày?", "vis": "stage-transition-arrow"}
        ]
    },
    {
        "id": "S8", "num": 8, "name": "Vận hành hệ thống",
        "acts": [
            {"id": "ACT-01", "title": "Kích hoạt thẻ cam kết", "type": "activity-intro", "content": "<strong>Nội dung:</strong> Diễn đàn chuyên gia AI đã hoàn thành. Bây giờ, mỗi chuyên gia sẽ kích hoạt thẻ cam kết của mình để áp dụng những điều đã học vào thực tế.", "vis": "security-lock-screen"},
            {"id": "ACT-04", "title": "Activity Workspace", "type": "activity", "content": "<strong>Đề bài:</strong> Hãy đọc lại nội dung cam kết, ký tên và dán dấu vân tay lên Thẻ cam kết.<br><br><strong>Nội dung cam kết:</strong><br>\"Cam kết sử dụng đầy đủ 4 thành phần khi viết câu lệnh AI, sử dụng AI để hỗ trợ việc học.\"<br>1. Xác định rõ Vai trò.<br>2. Nêu đúng Nhiệm vụ.<br>3. Chỉ rõ Đối tượng.<br>4. Mô tả cụ thể Yêu cầu.<br><br><strong>Sản phẩm cần hoàn thành:</strong> bản cam kết được ký tên, dán dấu vân tay.", "vis": "computer-data-screen"},
            {"id": "ACT-06", "title": "Transition", "type": "activity-transition", "content": "<strong>Chúng ta vừa hoàn thành:</strong> Kích hoạt thẻ cam kết và sẵn sàng áp dụng những điều đã học vào thực tế.<br><br>Chúc mừng các chuyên gia công nghệ đã hoàn thành nhiệm vụ!", "vis": "stage-transition-arrow"}
        ]
    }
]

for stage in stages:
    # 1. Add Stage Intro Slide
    slides.append({
        "id": f"T3-{stage['id']}-Intro",
        "stage": f"GĐ{stage['num']} - {stage['name'].upper()}",
        "title": f"Giai đoạn {stage['num']}: {stage['name']}",
        "type": "stage-intro",
        "bgStyle": "stage-bg",
        "elements": [
            {"id": f"t3-s{stage['num']}-1", "type": "heading", "content": f"GIAI ĐOẠN {stage['num']}", "x": 5, "y": 35, "w": 90, "h": 15, "fontSize": "60px", "color": "#00f3ff", "align": "center"},
            {"id": f"t3-s{stage['num']}-2", "type": "subheading", "content": stage['name'].upper(), "x": 5, "y": 55, "w": 90, "h": 10, "fontSize": "40px", "color": "#ffffff", "align": "center"},
            {"id": f"t3-s{stage['num']}-3", "type": "visual", "content": "stage-transition-arrow", "x": 40, "y": 70, "w": 20, "h": 15}
        ]
    })
    
    # 2. Add all ACT slides
    for act in stage['acts']:
        slides.append({
            "id": f"T3-{stage['id']}-{act['id']}",
            "stage": f"GĐ{stage['num']} - {stage['name'].upper()}",
            "title": act['title'],
            "type": act['type'],
            "bgStyle": "dashboard-bg",
            "elements": [
                {"id": f"t3-s{stage['num']}-{act['id']}-1", "type": "heading", "content": act['title'].upper(), "x": 5, "y": 10, "w": 90, "h": 10, "fontSize": "36px", "color": "#ffbd59", "align": "center"},
                {"id": f"t3-s{stage['num']}-{act['id']}-2", "type": "box", "content": act['content'], "x": 5, "y": 25, "w": 55, "h": 50, "fontSize": "22px", "color": "#ffffff", "align": "left", "bg": "rgba(0, 243, 255, 0.05)", "border": "1px solid rgba(0, 243, 255, 0.3)"},
                {"id": f"t3-s{stage['num']}-{act['id']}-3", "type": "visual", "content": act['vis'], "x": 63, "y": 30, "w": 32, "h": 45}
            ]
        })

# Output JSON
out_json = json.dumps(slides, ensure_ascii=False, indent=2)
# Re-wrap properly
final_str = "  ,{\n    " + out_json[2:-2] + "\n  }\n"

with open('tiet3_final_generated.txt', 'w', encoding='utf-8') as f:
    f.write(final_str)

print(f"Generated {len(slides)} slides.")
