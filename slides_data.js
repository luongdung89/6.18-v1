const INITIAL_SLIDES = [
  {
    "id": "P0-01",
    "stage": "KHỞI ĐỘNG BÀI HỌC",
    "title": "Màn hình chào mừng (Welcome Screen)",
    "type": "welcome",
    "bgStyle": "welcome-bg",
    "elements": [
      {
        "id": "wel-title",
        "type": "heading",
        "content": "Sử dụng AI hiệu quả",
        "x": 10,
        "y": 13.4,
        "w": 80,
        "h": 10,
        "fontSize": "48px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "wel-subtitle",
        "type": "subheading",
        "content": "Tiết 1: Khám phá cùng AI",
        "x": 10,
        "y": 30,
        "w": 80,
        "h": 8,
        "fontSize": "32px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "wel-objectives",
        "type": "box",
        "content": "<strong>MỤC TIÊU BÀI HỌC:</strong>• Hiểu AI có thể hỗ trợ học tập nhưng không thay thế con người.<span style=\"font-size: calc(16px * var(--font-boost, 1.25) * var(--slide-scale, 1));\"><span style=\"font-size: 18.4px;\">•&nbsp;</span>Nhận biết các thành phần quan trọng trong câu lệnh giúp AI hiểu đúng yêu cầu.</span><div>• Biết cách tạo một câu lệnh đơn giản, rõ ràng để nhờ AI hỗ trợ trong việc học tập.<br>• Chủ động tư duy trước khi gọi trợ giúp từ AI.</div>",
        "x": 9.6,
        "y": 47.6,
        "w": 46,
        "h": 43.6,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "wel-visual",
        "type": "visual",
        "content": "ai-assistant-glowing",
        "x": 59.8,
        "y": 23.1,
        "w": 32,
        "h": 71.2,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "P0-02",
    "stage": "KHỞI ĐỘNG BÀI HỌC",
    "title": "Câu hỏi lớn (Big Question)",
    "type": "big-question",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "bq-title",
        "type": "heading",
        "content": "CÂU HỎI LỚN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "32px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "bq-question-box",
        "type": "box",
        "content": "<div class='glow-text' style='font-size: 32px; line-height: 1.4; color: #ffbd59;'>Làm thế nào để đặt câu hỏi giúp AI trở thành trợ lý học tập hiệu quả thay vì một cỗ máy đưa đáp án mơ hồ?</div>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 22,
        "fontSize": "26px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "2px solid rgba(255, 189, 89, 0.3)"
      },
      {
        "id": "bq-visual",
        "type": "visual",
        "content": "confused-student-ai",
        "x": 31.5,
        "y": 44.7,
        "w": 35,
        "h": 46,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "P0-03",
    "stage": "KHỞI ĐỘNG BÀI HỌC",
    "title": "Giới thiệu vai trò (Role Introduction)",
    "type": "role-intro",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "role-badge",
        "type": "badge",
        "content": "CHUYÊN GIA CÔNG NGHỆ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "30px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "role-details-left",
        "type": "box",
        "content": "<strong>VAI TRÒ CỦA HỌC SINH:</strong>Trở thành những chuyên gia khám phá cách giao tiếp với AI, biết cách đưa ra câu lệnh để máy tính hiểu đúng điều mình cần.",
        "x": 10,
        "y": 26,
        "w": 38,
        "h": 35.2,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "role-details-right",
        "type": "box",
        "content": "<strong>NHIỆM VỤ CỦA CHUYÊN GIA:</strong>Tìm hiểu bí quyết tạo câu lệnh hiệu quả, giúp AI đưa ra câu trả lời rõ ràng và phù hợp.",
        "x": 52,
        "y": 26,
        "w": 38,
        "h": 34.9,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "role-visual",
        "type": "visual",
        "content": "specialist-id-badge",
        "x": 24.3,
        "y": 65.6,
        "w": 52.8,
        "h": 30.7,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S1-Intro",
    "stage": "GIAI ĐOẠN 1",
    "title": "Giới thiệu Giai đoạn 1",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s1-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 1",
        "x": 10,
        "y": 25,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s1-title",
        "type": "heading",
        "content": "MỞ KHÓA NHIỆM VỤ",
        "x": 10,
        "y": 33,
        "w": 80,
        "h": 10,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s1-desc",
        "type": "text",
        "content": "Hệ thống kích hoạt... Bắt đầu phân tích logic và tiếp nhận thông tin từ người dùng.",
        "x": 9.5,
        "y": 56.5,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s1-icon",
        "type": "visual",
        "content": "dashboard-ai-mesh",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S1-ACT-01",
    "stage": "GIAI ĐOẠN 1",
    "title": "Nhiệm vụ: Phát hiện sự cố",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a1-alert",
        "type": "alert",
        "content": "<div style='color:#ff4d4d; font-weight:bold; font-size:26px; margin-bottom: 10px;'>⚠️ TIN BÁO TỪ HỆ THỐNG AI!</div>Trung tâm hỗ trợ AI vừa nhận được phản ánh từ một người dùng tên Minh. Các chuyên gia AI hãy nhanh chóng kiểm tra phản ánh và tìm hiểu nguyên nhân!",
        "x": 9.7,
        "y": 8.5,
        "w": 80,
        "h": 31.2,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 77, 77, 0.08)",
        "border": "2px dashed #ff4d4d"
      },
      {
        "id": "s1-a1-visual",
        "type": "visual",
        "content": "red-warning-dialog",
        "x": 31.6,
        "y": 46.1,
        "w": 35,
        "h": 42,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S1-ACT-02",
    "stage": "GIAI ĐOẠN 1",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s1-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><ul style='line-height:2.2;'><li>• Vở ghi bài cá nhân</li><li>• Bút viết</li></ul>",
        "x": 12.6,
        "y": 20,
        "w": 34.4,
        "h": 35,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s1-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Cá nhân</div>",
        "x": 53,
        "y": 20,
        "w": 35.3,
        "h": 35,
        "fontSize": "24px",
        "color": "#fafafa",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s1-a2-visual",
        "type": "visual",
        "content": "icon-stationery-personal",
        "x": 15,
        "y": 60,
        "w": 70,
        "h": 32,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S1-ACT-03",
    "stage": "GIAI ĐOẠN 1",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s1-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div><strong>Đọc</strong> tình huống của bạn Minh trên màn hình.",
        "x": 10,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s1-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div><strong>Suy nghĩ</strong> xem điều gì đã khiến Minh nhận được câu trả lời khó hiểu.",
        "x": 38,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s1-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div><strong>Chia sẻ</strong> ý kiến nhận định cá nhân với cả lớp.",
        "x": 66,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S1-ACT-04",
    "stage": "GIAI ĐOẠN 1",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a4-task",
        "type": "box",
        "content": "<h3>Câu hỏi:</h3><p style=\"line-height:1.6;\">• Vì sao AI lại đưa ra câu trả lời khiến Minh khó hiểu?</p><p style=\"line-height:1.6;\">• Vấn đề nằm ở năng lực của AI hay ở cách Minh đặt câu hỏi?</p>",
        "x": 7.2,
        "y": 59.8,
        "w": 55.9,
        "h": 37,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s1-a4-visual",
        "type": "visual",
        "content": "minh-confused-chat",
        "x": 64.7,
        "y": 59.6,
        "w": 24,
        "h": 33.2,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "custom-el-1781924224128",
        "type": "box",
        "content": "<h3><p class=\"MsoNormal\" style=\"margin-left:35.45pt\">Tình huống:</p><p class=\"MsoNormal\" style=\"margin-left:35.45pt\"><span style=\"font-weight: normal;\">\"Minh muốn nhờ AI giải thích về hiện tượng nhật thực. Minh chỉ gõ\nvào ô chat duy nhất chữ 'nhật thực'. AI trả lời bằng một bài viết học thuật rất\ndài, chứa nhiều thuật ngữ vật lý thiên văn khó hiểu vượt quá trình độ lớp 6,\nkhiến Minh càng đọc càng khó hiểu.\"</span><o:p></o:p></p></h3>",
        "x": 7.1,
        "y": 12.2,
        "w": 82,
        "h": 44,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(30, 41, 59, 0.4)"
      }
    ]
  },
  {
    "id": "S1-ACT-05",
    "stage": "GIAI ĐOẠN 1",
    "title": "Đúc kết (Report & Debrief)",
    "type": "debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a5-title",
        "type": "heading",
        "content": "BÁO CÁO KẾT QUẢ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "s1-a5-insight",
        "type": "box",
        "content": "<h3><span style=\"font-size: 24px;\">AI không thể tự đoán chính xác điều người dùng thực sự mong muốn nếu câu hỏi quá ngắn hoặc quá chung chung.</span></h3>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 25,
        "fontSize": "30px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.3)"
      },
      {
        "id": "s1-a5-core",
        "type": "box",
        "content": "<h3>THÔNG ĐIỆP CỐT LÕI</h3><div style=\"font-size:32px; color:#00f3ff; font-weight:bold;\">Câu hỏi càng rõ ràng, câu trả lời từ AI càng hữu ích.</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 25,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.3)"
      }
    ]
  },
  {
    "id": "S1-ACT-06",
    "stage": "GIAI ĐOẠN 1",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a6-completed",
        "type": "box",
        "content": "<div style='color:#00ffcc; font-weight:bold;'>ĐÃ KHÁM PHÁ XONG:</div><p>Nguyên nhân người dùng nhận được phản hồi khó hiểu từ AI, không đúng thông tin mình cần do đặt câu hỏi quá ngắn.</p>",
        "x": 10,
        "y": 20,
        "w": 80,
        "h": 22,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s1-a6-next",
        "type": "box",
        "content": "<div style='color:#ffbd59; font-weight:bold;'>CÂU HỎI TIẾP THEO:</div><div style='font-size:28px; color:#ffbd59; font-weight:bold; margin-top:10px;'>Muốn AI hiểu đúng và trả lời đúng điều mình cần, chúng ta nên giao tiếp với AI như thế nào?</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s1-a6-indicator",
        "type": "text",
        "content": "➔ ĐANG KẾT NỐI SANG GIAI ĐOẠN 2...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#00f3ff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S2-Intro",
    "stage": "GIAI ĐOẠN 2",
    "title": "Giới thiệu Giai đoạn 2",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s2-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 2",
        "x": 10.2,
        "y": 21,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s2-title",
        "type": "heading",
        "content": "NHẬN YÊU CẦU TỪ KHÁCH HÀNG",
        "x": 9.4,
        "y": 33.5,
        "w": 61.1,
        "h": 27.9,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s2-desc",
        "type": "text",
        "content": "Kết nối hệ thống tiếp nhận phản hồi từ nhiều học sinh gặp sự cố với AI.",
        "x": 10,
        "y": 69.2,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s2-icon",
        "type": "visual",
        "content": "customer-request-gate",
        "x": 64.7,
        "y": 25,
        "w": 31,
        "h": 56.5,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S2-ACT-01",
    "stage": "GIAI ĐOẠN 2",
    "title": "Nhiệm vụ: Lệnh triệu tập chuyên gia",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s2-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: LỆNH TRIỆU TẬP CHUYÊN GIA",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s2-a1-mail",
        "type": "box",
        "content": "<div style=\"color:#00ffcc; font-weight:bold; font-size:24px; border-bottom:1px solid rgba(0,255,204,0.3); padding-bottom:10px; margin-bottom:10px;\">✉️ MẬT THƯ ĐIỆN TỬ</div><strong>Người gửi:</strong> Viện Công Nghệ Novastars<div><br><strong>Nội dung:</strong>&nbsp;</div><div>Hệ thống phát hiện nhiều học sinh đang gặp khó khăn khi sử dụng AI. Có bạn nhận được câu trả lời quá dài, có bạn nhận được thông tin khó hiểu, thậm chí không đúng điều mình muốn tìm.<br>Các chuyên gia hãy tìm ra bí quyết giúp AI hiểu đúng yêu cầu của người dùng và trả lời rõ ràng, hữu ích hơn.</div>",
        "x": 10,
        "y": 18,
        "w": 50,
        "h": 75.5,
        "fontSize": "19px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(10, 25, 50, 0.8)",
        "border": "1px solid rgba(0, 255, 204, 0.4)"
      },
      {
        "id": "s2-a1-visual",
        "type": "visual",
        "content": "secure-email-document",
        "x": 64,
        "y": 18,
        "w": 26,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S3-Intro",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Giới thiệu Giai đoạn 3",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s3-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 3",
        "x": 10,
        "y": 25,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s3-title",
        "type": "heading",
        "content": "THU THẬP DỮ LIỆU",
        "x": 9.9,
        "y": 36.4,
        "w": 39.4,
        "h": 20,
        "fontSize": "48px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s3-desc",
        "type": "text",
        "content": "Tiến hành thu thập và quét dữ liệu các câu lệnh thực tế từ người dùng.",
        "x": 10,
        "y": 66.4,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s3-icon",
        "type": "visual",
        "content": "computer-data-screen",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S3-ACT-01",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Nhiệm vụ: Giải mã cấu trúc giao tiếp với AI",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: GIẢI MÃ CẤU TRÚC GIAO TIẾP VỚI AI",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s3-a1-visual",
        "type": "visual",
        "content": "human-ai-connection-graph",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s3-a1-subtext",
        "type": "box",
        "content": "💡 <strong>Khám phá:</strong> Tại sao cùng một yêu cầu giải thích hiện tượng tự nhiên, AI lại phản hồi rất khác biệt với các câu hỏi khác nhau?",
        "x": 8.9,
        "y": 35.7,
        "w": 45,
        "h": 37,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S3-ACT-02",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s3-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><ul style=\"line-height:2.2;\"><li>• Bộ thẻ đáp án ABCD (Nhận từ Giáo viên)</li></ul>",
        "x": 10.4,
        "y": 20,
        "w": 36.6,
        "h": 35,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s3-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Nhóm 4</div>",
        "x": 53,
        "y": 20,
        "w": 35.6,
        "h": 35,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s3-a2-visual",
        "type": "visual",
        "content": "abcd-answer-cards",
        "x": 15,
        "y": 60,
        "w": 70,
        "h": 32,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S3-ACT-03",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s3-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div><strong>Quan sát</strong> các cách đặt câu hỏi của 3 bạn học sinh.",
        "x": 10,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s3-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div><strong>Thảo luận</strong> nhóm, dự đoán câu hỏi nào sẽ cho ra kết quả trả lời phù hợp nhất.",
        "x": 38,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s3-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div><strong>Giơ</strong> thẻ đáp án tương ứng.",
        "x": 66,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S3-ACT-04",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a4-interactive-area",
        "type": "box",
        "content": "<div id=\"s3-mcq-game\" style=\"height: 100%; display: flex; flex-direction: column; justify-content: space-between;\">\n  <div style=\"text-align: center; color: var(--neon-blue); font-size: 1.25em; font-weight: bold; margin-bottom: 6px;\">⚡ QUÉT DỮ LIỆU CÂU LỆNH ⚡</div>\n  <div style=\"color: #ffffff; font-size: 1.05em; line-height: 1.4; margin-bottom: 8px; background: rgba(0, 243, 255, 0.05); padding: 10px 15px; border-radius: 8px; border: 1px solid rgba(0, 243, 255, 0.2);\">\n    <strong>Đề bài:</strong> Hệ thống tiến hành quét dữ liệu, phát hiện 3 câu lệnh cho AI của 3 bạn học sinh. Theo các chuyên gia, câu lệnh nào cho ra kết quả phù hợp nhất?\n  </div>\n  <div style=\"display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 8px; flex: 1;\">\n    <div id=\"s3-opt-1\" class=\"workspace-card\" style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); padding: 14px 10px; border-radius: 8px; cursor: pointer; transition: 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center; height: 100%; box-shadow: 0 4px 10px rgba(0,0,0,0.2);\" onclick=\"selectS3Option(1)\">\n      <div style=\"width: 80px; height: 80px; border-radius: 50%; background: rgba(0, 243, 255, 0.08); border: 2px solid var(--neon-blue); display: flex; justify-content: center; align-items: center; font-size: 42px; margin-bottom: 12px; box-shadow: 0 0 12px rgba(0, 243, 255, 0.3);\">👦</div>\n      <div style=\"font-weight: bold; color: var(--neon-blue); font-size: 1.05em; margin-bottom: 6px;\">Bạn Hùng</div>\n      <div style=\"font-size: 0.9em; line-height: 1.3; color: #ffffff; flex: 1; display: flex; align-items: center; justify-content: center; font-style: italic;\">\n        \"Nhật thực\"\n      </div>\n    </div>\n    <div id=\"s3-opt-2\" class=\"workspace-card\" style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); padding: 14px 10px; border-radius: 8px; cursor: pointer; transition: 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center; height: 100%; box-shadow: 0 4px 10px rgba(0,0,0,0.2);\" onclick=\"selectS3Option(2)\">\n      <div style=\"width: 80px; height: 80px; border-radius: 50%; background: rgba(255, 189, 89, 0.08); border: 2px solid var(--neon-orange); display: flex; justify-content: center; align-items: center; font-size: 42px; margin-bottom: 12px; box-shadow: 0 0 12px rgba(255, 189, 89, 0.3);\">👨‍💻</div>\n      <div style=\"font-weight: bold; color: var(--neon-orange); font-size: 1.05em; margin-bottom: 6px;\">Bạn Nam</div>\n      <div style=\"font-size: 0.9em; line-height: 1.3; color: #ffffff; flex: 1; display: flex; align-items: center; justify-content: center; font-style: italic;\">\n        \"Làm hộ tôi bài tập giải thích hiện tượng nhật thực lớp 6\"\n      </div>\n    </div>\n    <div id=\"s3-opt-3\" class=\"workspace-card\" style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); padding: 14px 10px; border-radius: 8px; cursor: pointer; transition: 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center; height: 100%; box-shadow: 0 4px 10px rgba(0,0,0,0.2);\" onclick=\"selectS3Option(3)\">\n      <div style=\"width: 80px; height: 80px; border-radius: 50%; background: rgba(0, 255, 204, 0.08); border: 2px solid var(--neon-green); display: flex; justify-content: center; align-items: center; font-size: 42px; margin-bottom: 12px; box-shadow: 0 0 12px rgba(0, 255, 204, 0.3);\">👧</div>\n      <div style=\"font-weight: bold; color: var(--neon-green); font-size: 1.05em; margin-bottom: 6px;\">Bạn Lan</div>\n      <div style=\"font-size: 0.9em; line-height: 1.3; color: #ffffff; flex: 1; display: flex; align-items: center; justify-content: center; font-style: italic;\">\n        \"Bạn là giáo viên khoa học, hãy giải thích hiện tượng nhật thực cho học sinh lớp 6 sao cho thật ngắn gọn và dễ hiểu\"\n      </div>\n    </div>\n  </div>\n  <div id=\"s3-game-feedback\" style=\"text-align: center; font-size: 1.1em; font-weight: bold; color: var(--neon-orange); padding-top: 5px;\"><span style=\"color: var(--text-secondary);\">➔ Hãy click vào thẻ câu lệnh để lựa chọn!</span></div>\n</div>",
        "x": 6,
        "y": 12,
        "w": 88,
        "h": 87.2,
        "fontSize": "19px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(10,25,50,0.6)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S3-ACT-05",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Đúc kết (Report & Debrief)",
    "type": "debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a5-title",
        "type": "heading",
        "content": "BÁO CÁO KẾT QUẢ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "s3-a5-ans-analysis",
        "type": "box",
        "content": "<h3><span style=\"font-size: 1.05em;\">Câu lệnh </span><em style=\"font-size: 1.05em;\">\"Bạn là giáo viên khoa học, hãy giải thích hiện tượng nhật thực cho học sinh lớp 6 sao cho thật ngắn gọn và dễ hiểu\"</em><span style=\"font-size: 1.05em;\"> cung cấp thông tin chi tiết và yêu cầu rõ ràng, giúp AI đưa ra câu trả lời dễ hiểu hơn.</span></h3>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 36.7,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s3-a5-message",
        "type": "box",
        "content": "<h3>THÔNG ĐIỆP CHÍNH</h3><div style='font-size:32px; color:#00f3ff; font-weight:bold; text-align:center; padding-top:10px;'>Cách đặt câu hỏi quyết định giá trị phản hồi của AI.</div>",
        "x": 9.8,
        "y": 58,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.3)"
      }
    ]
  },
  {
    "id": "S3-ACT-06",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a6-completed",
        "type": "box",
        "content": "<div style='color:#00ffcc; font-weight:bold;'>ĐẠT ĐƯỢC:</div><p>Chúng ta vừa khám phá: Câu lệnh mang lại hiệu quả cao.</p>",
        "x": 10,
        "y": 20,
        "w": 80,
        "h": 22,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s3-a6-next",
        "type": "box",
        "content": "<div style='color:#ffbd59; font-weight:bold;'>CÂU HỎI TIẾP THEO:</div><div style='font-size:28px; color:#ffbd59; font-weight:bold; margin-top:10px;'>Điều gì trong câu lệnh 3 giúp AI hiểu đúng yêu cầu và tạo ra câu trả lời hiệu quả hơn?</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s3-a6-indicator",
        "type": "text",
        "content": "➔ ĐANG KẾT NỐI SANG GIAI ĐOẠN 4...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#00f3ff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S4-Intro",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Giới thiệu Giai đoạn 4",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s4-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 4",
        "x": 10,
        "y": 25,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s4-title",
        "type": "heading",
        "content": "PHÂN TÍCH THÔNG TIN",
        "x": 9.5,
        "y": 42.6,
        "w": 50,
        "h": 10,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s4-desc",
        "type": "text",
        "content": "Bóc tách câu lệnh mẫu thành các thông tin thành phần cốt lõi.",
        "x": 9.8,
        "y": 65.3,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s4-icon",
        "type": "visual",
        "content": "data-analysis-scanner",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S4-ACT-01",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Nhiệm vụ: Phân tách câu lệnh",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: PHÂN TÁCH CÂU LỆNH",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s4-a1-visual",
        "type": "visual",
        "content": "command-scanner-lens",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s4-a1-subtext",
        "type": "box",
        "content": "🔬 <strong>Tâm điểm:</strong>Bóc tách các thành phần của câu lệnh.<br>",
        "x": 10,
        "y": 29.6,
        "w": 45,
        "h": 36.6,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S4-ACT-02",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s4-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><h3><span style=\"font-size: 18px;\">• Bút màu: Hồng, Xanh lá, Vàng, Xanh dương</span></h3><h3><span style=\"font-size: 18px;\">• Phiếu phân tích câu lệnh (nhận từ Giáo viên)</span></h3>",
        "x": 10,
        "y": 20,
        "w": 40,
        "h": 42,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s4-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Nhóm 4</div>",
        "x": 52,
        "y": 20,
        "w": 38,
        "h": 42,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s4-a2-visual",
        "type": "visual",
        "content": "highlighter-pens-docs",
        "x": 10,
        "y": 66,
        "w": 80,
        "h": 26,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S4-ACT-03",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s4-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div><strong>Quan sát</strong> quy ước mã màu tương ứng cho 4 loại thông tin thành phần trên màn hình.",
        "x": 10,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s4-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div><strong>Thảo luận</strong> nhóm, dùng bút màu tô các đoạn chữ trên câu lệnh theo đúng quy ước.",
        "x": 38,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s4-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div><strong>Phân tích</strong> và điền vai trò của từng phần vào bảng trong phiếu.",
        "x": 66,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S4-ACT-04",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a4-interactive-area",
        "type": "box",
        "content": "<div id=\"s4-coloring-game\" style=\"height: 100%; display: flex; flex-direction: column; justify-content: space-between;\">\n  <div style=\"text-align: center; color: var(--neon-blue); font-size: 1.25em; font-weight: bold; margin-bottom: 8px;\">⚡ TÔ MÀU CÂU LỆNH ⚡</div>\n  <div style=\"color: #ffffff; font-size: 1.05em; margin-bottom: 8px;\">\n    <strong>Đề bài:</strong> Phân tích câu lệnh dưới đây bằng cách dùng bút màu tô các phần tương ứng:\n  </div>\n  \n  <div style=\"background: rgba(5,15,35,0.8); border: 1px solid rgba(0, 243, 255, 0.3); padding: 18px 22px; border-radius: 8px; font-size: 1.3em; line-height: 1.8; text-align: center; margin-bottom: 12px; min-height: 100px; display: flex; align-items: center; justify-content: center; flex-wrap: wrap;\">\n    \"<span id=\"s4-part-1\" class=\"s4-text-part\" style=\"cursor:pointer; transition: all 0.2s;\" onclick=\"clickS4Part(1)\">Bạn là giáo viên khoa học</span>, <span id=\"s4-part-2\" class=\"s4-text-part\" style=\"cursor:pointer; transition: all 0.2s;\" onclick=\"clickS4Part(2)\">hãy giải thích hiện tượng nhật thực</span> <span id=\"s4-part-3\" class=\"s4-text-part\" style=\"cursor:pointer; transition: all 0.2s;\" onclick=\"clickS4Part(3)\">cho học sinh lớp 6</span> <span id=\"s4-part-4\" class=\"s4-text-part\" style=\"cursor:pointer; transition: all 0.2s;\" onclick=\"clickS4Part(4)\">sao cho thật ngắn gọn và dễ hiểu</span>.\"\n  </div>\n\n  <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;\">\n    <button id=\"s4-btn-pink\" class=\"btn\" style=\"text-align: left; background: rgba(255, 102, 178, 0.15); color: rgb(255, 102, 178); border: 1px solid rgb(255, 102, 178); font-size: 0.95em; padding: 10px 15px; border-radius: 6px; box-shadow: none;\" onclick=\"selectS4Color(&quot;pink&quot;)\">🌸 Tô Hồng: AI là ai? (Vai trò)</button>\n    <button id=\"s4-btn-yellow\" class=\"btn\" style=\"text-align: left; background: rgba(230, 184, 0, 0.15); color: rgb(255, 214, 51); border: 1px solid rgb(255, 214, 51); font-size: 0.95em; padding: 10px 15px; border-radius: 6px; box-shadow: none;\" onclick=\"selectS4Color(&quot;yellow&quot;)\">💛 Tô Vàng: Làm gì? (Nhiệm vụ)</button>\n    <button id=\"s4-btn-green\" class=\"btn\" style=\"text-align: left; background: rgba(46, 184, 46, 0.15); color: rgb(46, 184, 46); border: 1px solid rgb(46, 184, 46); font-size: 0.95em; padding: 10px 15px; border-radius: 6px; box-shadow: none;\" onclick=\"selectS4Color(&quot;green&quot;)\">💚 Tô Xanh lá: Cho ai? (Đối tượng)</button>\n    <button id=\"s4-btn-blue\" class=\"btn\" style=\"text-align: left; background: rgba(0, 243, 255, 0.15); color: rgb(0, 243, 255); border: 1px solid rgb(0, 243, 255); font-size: 0.95em; padding: 10px 15px; border-radius: 6px; box-shadow: rgb(0, 243, 255) 0px 0px 12px;\" onclick=\"selectS4Color(&quot;blue&quot;)\">💙 Tô Xanh dương: Kết quả thế nào? (Tiêu chuẩn)</button>\n  </div>\n\n  <div id=\"s4-game-feedback\" style=\"text-align: center; font-size: 1.1em; font-weight: bold; color: var(--neon-orange);\">Đã chọn bút màu Xanh dương. Click vào cụm từ cần tô màu!</div>\n</div>",
        "x": 6,
        "y": 10,
        "w": 88,
        "h": 88.1,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(10,20,40,0.6)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S4-ACT-04b",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Thảo luận & Phân tích thành phần",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a4b-title",
        "type": "heading",
        "content": "BẢNG PHÂN TÍCH VAI TRÒ CÂU LỆNH",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#ffbd59",
        "align": "center"
      },
      {
        "id": "s4-a4b-challenge",
        "type": "box",
        "content": "<div style=\"font-size: 1.1em; line-height: 1.5; display:flex; justify-content:space-between; align-items:center;\"><span><strong>NHIỆM VỤ:</strong> Thảo luận nhóm, phân tích và điền vai trò, nếu thiếu của các thành phần.<span style=\"font-size: 1.1em;\">&nbsp;</span></span></div>",
        "x": 6,
        "y": 15.9,
        "w": 88,
        "h": 16.3,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px dashed rgba(255, 189, 89, 0.3)"
      },
      {
        "id": "s4-a4b-table",
        "type": "box",
        "content": "<table style='width:100%; border-collapse:separate; border-spacing:8px; text-align:left; font-size:1.6em;'><thead><tr style='border-bottom:1px solid rgba(255,255,255,0.2);'><th style='padding:12px; color:#ffbd59; font-size:1.7em; width:25%; font-family:var(--font-cyber);'>Thành phần</th><th style='padding:12px; color:#ff66b2; font-size:1.7em; width:45%; font-family:var(--font-cyber);'>Vai trò</th><th style='padding:12px; color:#8ab4f8; font-size:1.7em; width:30%; font-family:var(--font-cyber);'>Nếu thiếu</th></tr></thead><tbody><tr><td style='padding:12px; color:#ff66b2; font-weight:bold; vertical-align:middle;'>Vai trò</td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(255, 102, 178, 0.4); border-radius:6px; background:rgba(255, 102, 178, 0.05); color:#ffffff; outline:none;' placeholder='Nhập vai trò...'></td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(255, 102, 178, 0.4); border-radius:6px; background:rgba(255, 102, 178, 0.05); color:#ffffff; outline:none;' placeholder='Nhập nếu thiếu...'></td></tr><tr><td style='padding:12px; color:#ffd633; font-weight:bold; vertical-align:middle;'>Nhiệm vụ</td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(255, 214, 51, 0.4); border-radius:6px; background:rgba(255, 214, 51, 0.05); color:#ffffff; outline:none;' placeholder='Nhập vai trò...'></td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(255, 214, 51, 0.4); border-radius:6px; background:rgba(255, 214, 51, 0.05); color:#ffffff; outline:none;' placeholder='Nhập nếu thiếu...'></td></tr><tr><td style='padding:12px; color:#2eb82e; font-weight:bold; vertical-align:middle;'>Đối tượng</td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(46, 184, 46, 0.4); border-radius:6px; background:rgba(46, 184, 46, 0.05); color:#ffffff; outline:none;' placeholder='Nhập vai trò...'></td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(46, 184, 46, 0.4); border-radius:6px; background:rgba(46, 184, 46, 0.05); color:#ffffff; outline:none;' placeholder='Nhập nếu thiếu...'></td></tr><tr><td style='padding:12px; color:#00f3ff; font-weight:bold; vertical-align:middle;'>Yêu cầu</td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(0, 243, 255, 0.4); border-radius:6px; background:rgba(0, 243, 255, 0.05); color:#ffffff; outline:none;' placeholder='Nhập vai trò...'></td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(0, 243, 255, 0.4); border-radius:6px; background:rgba(0, 243, 255, 0.05); color:#ffffff; outline:none;' placeholder='Nhập nếu thiếu...'></td></tr></tbody></table>",
        "x": 5.9,
        "y": 34.2,
        "w": 88,
        "h": 61.7,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.02)",
        "border": "1px solid rgba(255,255,255,0.1)"
      }
    ]
  },
  {
    "id": "S4-ACT-05",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Đúc kết (Report & Debrief)",
    "type": "debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a5-title",
        "type": "heading",
        "content": "BÁO CÁO KẾT QUẢ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "s4-a5-colored",
        "type": "box",
        "content": "<div style=\"text-align: center; color: var(--neon-blue); font-size: 1.1em; font-weight: bold; margin-bottom: 8px;\">BẢNG PHÂN TÍCH VAI TRÒ TỪNG THÀNH PHẦN</div>",
        "x": 5.8,
        "y": 12.3,
        "w": 88,
        "h": 6.5,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "center",
        "bg": "transparent",
        "border": "none"
      },
      {
        "id": "s4-a5-table",
        "type": "box",
        "content": "<table style=\"width:100%; border-collapse:separate; border-spacing:8px; text-align:left; font-size:1.0em;\"><thead><tr style=\"border-bottom:1px solid rgba(255,255,255,0.2);\"><th style=\"padding:10px; color:#ffbd59; font-size:1.1em; width:22%; font-family:var(--font-cyber);\">Thành phần</th><th style=\"padding:10px; color:#ff66b2; font-size:1.1em; width:44%; font-family:var(--font-cyber);\">Vai trò</th><th style=\"padding:10px; color:#8ab4f8; font-size:1.1em; width:34%; font-family:var(--font-cyber);\">Nếu thiếu</th></tr></thead><tbody><tr><td style=\"padding:10px; color:#ff66b2; font-weight:bold;\">Vai trò</td><td style=\"padding:12px; border:1px solid rgba(255, 102, 178, 0.2); border-radius:6px; background:rgba(255, 102, 178, 0.05); color:#ffffff;\">Định hình phong cách, góc độ chuyên môn phù hợp.</td><td style=\"padding:12px; border:1px solid rgba(255, 102, 178, 0.2); border-radius:6px; background:rgba(255, 102, 178, 0.05); color:#ffffff;\">AI trả lời chung chung, không có giọng điệu phù hợp.</td></tr><tr><td style=\"padding:10px; color:#ffd633; font-weight:bold;\">Nhiệm vụ</td><td style=\"padding:12px; border:1px solid rgba(255, 214, 51, 0.2); border-radius:6px; background:rgba(255, 214, 51, 0.05); color:#ffffff;\">Nhiệm vụ chính cần AI thực hiện.</td><td style=\"padding:12px; border:1px solid rgba(255, 214, 51, 0.2); border-radius:6px; background:rgba(255, 214, 51, 0.05); color:#ffffff;\">AI không biết phải làm gì, không đưa ra câu trả lời được.</td></tr><tr><td style=\"padding:10px; color:#2eb82e; font-weight:bold;\">Đối tượng</td><td style=\"padding:12px; border:1px solid rgba(46, 184, 46, 0.2); border-radius:6px; background:rgba(46, 184, 46, 0.05); color:#ffffff;\">Giới hạn đối tượng nhận câu trả lời để dùng từ ngữ phù hợp trình độ.</td><td style=\"padding:12px; border:1px solid rgba(46, 184, 46, 0.2); border-radius:6px; background:rgba(46, 184, 46, 0.05); color:#ffffff;\">AI sử dụng từ ngữ quá phức tạp hoặc quá trẻ con.</td></tr><tr><td style=\"padding:10px; color:#00f3ff; font-weight:bold;\">Yêu cầu</td><td style=\"padding:12px; border:1px solid rgba(0, 243, 255, 0.2); border-radius:6px; background:rgba(0, 243, 255, 0.05); color:#ffffff;\">Yêu cầu về định dạng, độ dài, mức độ chi tiết của kết quả.</td><td style=\"padding:12px; border:1px solid rgba(0, 243, 255, 0.2); border-radius:6px; background:rgba(0, 243, 255, 0.05); color:#ffffff;\">Phản hồi dài dòng, lan man hoặc khó tiếp thu.</td></tr></tbody></table>",
        "x": 6,
        "y": 20.3,
        "w": 88,
        "h": 64,
        "fontSize": "12px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.02)",
        "border": "1px solid rgba(255,255,255,0.1)"
      },
      {
        "id": "s4-a5-message-box",
        "type": "box",
        "content": "<div style=\"font-size:1.1em; color:#ffbd59; border:1px solid rgba(255,189,89,0.3); background:rgba(255,189,89,0.05); padding:10px 15px; border-radius:6px; text-align:center;\"><strong>Thông điệp chính:</strong> Câu lệnh đúng có khả năng định hình bối cảnh, giúp AI thu hẹp phạm vi tìm kiếm để đưa ra câu trả lời chính xác nhất.</div>",
        "x": 5.8,
        "y": 84.6,
        "w": 88,
        "h": 15.1,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S4-ACT-06",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a6-completed",
        "type": "box",
        "content": "<div style='color:#00ffcc; font-weight:bold;'>ĐÃ KHÁM PHÁ XONG:</div><p>4 thành phần thông tin cốt lõi cấu tạo nên một câu lệnh thông minh.</p>",
        "x": 10,
        "y": 20,
        "w": 80,
        "h": 22,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s4-a6-next",
        "type": "box",
        "content": "<div style='color:#ffbd59; font-weight:bold;'>CÂU HỎI TIẾP THEO:</div><div style='font-size:26px; color:#ffbd59; font-weight:bold; margin-top:10px;'>Làm sao để liên kết 4 thành phần này thành một thuật toán cấu trúc chuẩn?</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s4-a6-indicator",
        "type": "text",
        "content": "➔ ĐANG CHUYỂN TIẾP SANG GIAI ĐOẠN 5...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#00f3ff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S5-Intro",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Giới thiệu Giai đoạn 5",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s5-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 5",
        "x": 10,
        "y": 25,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s5-title",
        "type": "heading",
        "content": "ĐÓNG GÓI THUẬT TOÁN",
        "x": 9.4,
        "y": 32.7,
        "w": 50,
        "h": 31.7,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s5-desc",
        "type": "text",
        "content": "Đóng gói các thành phần đã phân tách thành công thức thuật toán chung.",
        "x": 9.5,
        "y": 68.8,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s5-icon",
        "type": "visual",
        "content": "algorithm-packing-node",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S5-ACT-01",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Nhiệm vụ: Giải mã công thức câu lệnh",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: GIẢI MÃ CÔNG THỨC CÂU LỆNH",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s5-a1-visual",
        "type": "visual",
        "content": "algorithm-puzzle-pieces",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s5-a1-subtext",
        "type": "box",
        "content": "🧩 <strong>Mục tiêu:</strong> Sắp xếp cấu trúc câu lệnh chuẩn",
        "x": 10.2,
        "y": 37.2,
        "w": 45,
        "h": 41.4,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S5-ACT-02",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s5-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><h3><span style=\"font-size: 20px; font-weight: normal;\">• Bộ thẻ thành phần câu lệnh (nhận từ giáo viên)</span></h3>",
        "x": 15,
        "y": 20,
        "w": 32,
        "h": 35,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s5-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Nhóm 4</div>",
        "x": 53,
        "y": 20,
        "w": 32,
        "h": 35,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s5-a2-visual",
        "type": "visual",
        "content": "icon-element-cards",
        "x": 15,
        "y": 60,
        "w": 70,
        "h": 32,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S5-ACT-03",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s5-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div><strong>Quan sát</strong> các thẻ thành phần.",
        "x": 10,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s5-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div><strong>Thảo luận</strong> nhóm, lựa chọn và sắp xếp các thẻ để tạo thành câu lệnh hoàn chỉnh.",
        "x": 38,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s5-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div><strong>Chia sẻ</strong> kết quả trước lớp.",
        "x": 66,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S5-ACT-04",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a4-interactive-area",
        "type": "box",
        "content": "<div id=\"s5-sorting-game\" style=\"height: 100%; display: flex; flex-direction: column; justify-content: space-between;\">\n  <div style=\"text-align: center; color: var(--neon-blue); font-size: 1.25em; font-weight: bold; margin-bottom: 6px;\">⚡ SẮP XẾP THUẬT TOÁN ⚡</div>\n  <div style=\"color: #ffffff; font-size: 1.05em; line-height: 1.4; margin-bottom: 6px;\">\n    <strong>Đề bài:</strong> Hãy lọc bỏ hoàn toàn các cấu trúc nhiễu không thuộc thuật toán câu lệnh. Sau đó, sắp xếp thứ tự chuẩn các thành phần đúng vào 4 ô còn thiếu để tạo thành câu lệnh.\n  </div>\n  \n  <div style=\"display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 10px;\">\n    <div id=\"s5-drag-1\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(1)\">Vai trò</div>\n    <div id=\"s5-drag-5\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(5)\">Khen ngợi AI</div>\n    <div id=\"s5-drag-6\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(6)\">Icon dễ thương</div>\n    <div id=\"s5-drag-3\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(3)\">Đối tượng</div>\n    <div id=\"s5-drag-7\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(7)\">Đăng nhập tài khoản</div>\n    <div id=\"s5-drag-8\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(8)\">Thời gian chat</div>\n    <div id=\"s5-drag-2\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(2)\">Nhiệm vụ</div>\n    <div id=\"s5-drag-4\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(4)\">Yêu cầu</div>\n  </div>\n\n  <div style=\"display:flex; justify-content:center; align-items:center; gap:8px; background: rgba(5,15,35,0.7); padding: 12px 18px; border-radius:8px; border: 1px solid rgba(0, 243, 255, 0.2); min-height: 80px;\">\n    <div style=\"font-size: 1.25em; font-weight: bold; color: var(--neon-blue);\">CÂU LỆNH = </div>\n    <div id=\"s5-slot-1\" style=\"width: 21%; height: 50px; border: 2px dashed rgba(0, 243, 255, 0.4); border-radius: 6px; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size: 0.95em; color: var(--text-secondary);\">[ Ô số 1 ]</div>\n    <div style=\"font-size: 1.2em; font-weight: bold; color: var(--text-primary);\">+</div>\n    <div id=\"s5-slot-2\" style=\"width: 21%; height: 50px; border: 2px dashed rgba(0, 243, 255, 0.4); border-radius: 6px; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size: 0.95em; color: var(--text-secondary);\">[ Ô số 2 ]</div>\n    <div style=\"font-size: 1.2em; font-weight: bold; color: var(--text-primary);\">+</div>\n    <div id=\"s5-slot-3\" style=\"width: 21%; height: 50px; border: 2px dashed rgba(0, 243, 255, 0.4); border-radius: 6px; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size: 0.95em; color: var(--text-secondary);\">[ Ô số 3 ]</div>\n    <div style=\"font-size: 1.2em; font-weight: bold; color: var(--text-primary);\">+</div>\n    <div id=\"s5-slot-4\" style=\"width: 21%; height: 50px; border: 2px dashed rgba(0, 243, 255, 0.4); border-radius: 6px; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size: 0.95em; color: var(--text-secondary);\">[ Ô số 4 ]</div>\n  </div>\n\n  <div style=\"text-align: center; margin-top: 5px; display: flex; justify-content: space-between; align-items: center;\">\n    <span><br></span>\n    <button class=\"btn btn-danger\" style=\"padding: 8px 18px; font-size: 0.85em; border-radius: 6px;\" onclick=\"resetS5Game()\">Xếp lại từ đầu</button>\n    <span><br></span>\n  </div>\n  <div id=\"s5-game-feedback\" style=\"text-align: center; font-size: 1.05em; font-weight: bold; color: var(--neon-orange);\"><span style=\"color: var(--neon-red);\">❌ \"Thời gian chat\" là cấu trúc nhiễu! Hãy lọc bỏ, không xếp vào công thức.</span></div>\n</div>",
        "x": 6.2,
        "y": 13.2,
        "w": 88,
        "h": 78,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(10,20,40,0.6)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S5-ACT-05",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Đúc kết (Report & Debrief)",
    "type": "debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a5-title",
        "type": "heading",
        "content": "BÁO CÁO KẾT QUẢ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "s5-a5-formula",
        "type": "box",
        "content": "<h3>CÔNG THỨC THUẬT TOÁN CÂU LỆNH CHUẨN</h3><div style='font-size:28px; font-weight:bold; color:#00f3ff; text-align:center; padding:12px 0;'>Câu lệnh = [AI là ai] + [Làm gì] + [Cho ai] + [Kết quả thế nào]</div>",
        "x": 9.9,
        "y": 23.6,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.08)",
        "border": "2px solid #00f3ff"
      },
      {
        "id": "s5-a5-footer",
        "type": "box",
        "content": "<div style='font-size:1.1em; color:#00ffcc; text-align:center; font-weight:bold;'>💡 Thông điệp: AI không thể tự đọc suy nghĩ. Đủ 4 thành phần giúp AI hiểu rõ và cho câu trả lời tốt nhất.</div>",
        "x": 10.3,
        "y": 61.1,
        "w": 80,
        "h": 18.6,
        "fontSize": "20px",
        "color": "#00ffcc",
        "align": "center"
      }
    ]
  },
  {
    "id": "S5-ACT-06",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a6-completed",
        "type": "box",
        "content": "<div style='color:#00ffcc; font-weight:bold;'>ĐÃ KHÁM PHÁ XONG:</div><p>Thuật toán 4 bước chuẩn để giao tiếp chuyên nghiệp với trợ lý ảo AI.</p>",
        "x": 10,
        "y": 20,
        "w": 80,
        "h": 22,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s5-a6-next",
        "type": "box",
        "content": "<div style='color:#ffbd59; font-weight:bold;'>CÂU HỎI TIẾP THEO:</div><div style='font-size:28px; color:#ffbd59; font-weight:bold; margin-top:10px;'>Thuật toán này có hoạt động tốt khi đưa vào thử nghiệm thực tế với các môn học khác hay không?</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s5-a6-indicator",
        "type": "text",
        "content": "➔ ĐANG CHUYỂN TIẾP SANG GIAI ĐOẠN 6...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#00f3ff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S6-Intro",
    "stage": "GIAI ĐOẠN 6",
    "title": "Giới thiệu Giai đoạn 6",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s6-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 6",
        "x": 10.3,
        "y": 19.9,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s6-title",
        "type": "heading",
        "content": "THỬ NGHIỆM<span style=\"font-size: calc(52px * var(--font-boost, 1.25) * var(--slide-scale, 1));\">QUY TRÌNH</span><div></div>",
        "x": 10,
        "y": 33,
        "w": 47,
        "h": 27.2,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s6-desc",
        "type": "text",
        "content": "Thử nghiệm công thức câu lệnh vừa học vào thực tế các môn học.",
        "x": 9.9,
        "y": 67.3,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s6-icon",
        "type": "visual",
        "content": "process-sandbox-testing",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S6-ACT-01",
    "stage": "GIAI ĐOẠN 6",
    "title": "Nhiệm vụ: Phòng thí nghiệm câu lệnh",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: PHÒNG THÍ NGHIỆM CÂU LỆNH",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s6-a1-visual",
        "type": "visual",
        "content": "treasure-boxes-digital",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s6-a1-subtext",
        "type": "box",
        "content": "🧪 <strong>Nhiệm vụ:</strong> Áp dụng công thức câu lệnh 4 thành phần để giải quyết yêu cầu của môn Toán và Lịch sử.",
        "x": 9.9,
        "y": 38.4,
        "w": 45,
        "h": 33.6,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S6-ACT-02",
    "stage": "GIAI ĐOẠN 6",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s6-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><h3><span style=\"font-size: 20px; font-weight: normal;\">• Giấy</span></h3><h3><span style=\"font-size: 20px; font-weight: normal;\">• Bút</span></h3>",
        "x": 15,
        "y": 20,
        "w": 32,
        "h": 35,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s6-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Nhóm 4</div>",
        "x": 53,
        "y": 20,
        "w": 32,
        "h": 35,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s6-a2-visual",
        "type": "visual",
        "content": "icon-testing-group",
        "x": 15,
        "y": 60,
        "w": 70,
        "h": 32,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S6-ACT-03",
    "stage": "GIAI ĐOẠN 6",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s6-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div>Đại diện 2 dãy lớp lên bốc thăm thẻ môn học ngẫu nhiên.",
        "x": 5,
        "y": 20,
        "w": 21,
        "h": 50,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s6-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div>Các nhóm thảo luận, áp dụng công thức để đặt câu lệnh hỏi AI về môn học dãy mình nhận được.",
        "x": 28,
        "y": 20,
        "w": 21,
        "h": 50,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s6-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div>Viết câu lệnh hoàn chỉnh của nhóm mình ra giấy.",
        "x": 51,
        "y": 20,
        "w": 21,
        "h": 50,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s6-a3-step4",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ff66b2; margin-bottom:10px;'>BƯỚC 4</div>Đại diện nhóm lên bảng viết câu lệnh của nhóm mình.",
        "x": 74,
        "y": 20,
        "w": 21,
        "h": 50,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S6-ACT-04",
    "stage": "GIAI ĐOẠN 6",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a4-challenge",
        "type": "box",
        "content": "<div style=\"font-size:1.1em; text-align:center;\">Áp dụng công thức thiết kế câu lệnh 4 thành phần hỏi AI về:</div>",
        "x": 6,
        "y": 14,
        "w": 88,
        "h": 16,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s6-a4-cards-subject",
        "type": "box",
        "content": "<div style=\"display:flex; justify-content:space-around; align-items:center; height:100%; gap:20px; padding:10px;\"><div class=\"workspace-card\" style=\"background:rgba(0,243,255,0.08); border:1px solid #00f3ff; padding:25px; border-radius:12px; font-size:1.2em; width:45%; text-align:center; box-shadow:0 0 15px rgba(0,243,255,0.1);\"><div style=\"font-size:2em; margin-bottom:10px;\">📘</div><strong style=\"color:#ffffff; font-size:1.1em;\">TOÁN HỌC</strong><br><br><span style=\"color:#00f3ff; font-weight:bold; font-size:1.15em;\">“Tìm hiểu về số thập phân”</span></div><div class=\"workspace-card\" style=\"background:rgba(255,189,89,0.08); border:1px solid #ffbd59; padding:25px; border-radius:12px; font-size:1.2em; width:45%; text-align:center; box-shadow:0 0 15px rgba(255,189,89,0.1);\"><div style=\"font-size:2em; margin-bottom:10px;\">📜</div><strong style=\"color:#ffffff; font-size:1.1em;\">LỊCH SỬ</strong><br><br><span style=\"color:#ffbd59; font-weight:bold; font-size:1.15em;\">“Tìm hiểu về Chiến thắng Điện Biên Phủ”</span></div></div>",
        "x": 6,
        "y": 32,
        "w": 88,
        "h": 64.7,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S6-ACT-05",
    "stage": "GIAI ĐOẠN 6",
    "title": "Đúc kết (Report & Debrief)",
    "type": "debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a5-title",
        "type": "heading",
        "content": "BÁO CÁO KẾT QUẢ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "s6-a5-insights",
        "type": "box",
        "content": "<div style=\"display:flex; flex-direction:column; gap:12px; height:100%; justify-content:center; padding:5px 0;\">\n  <div class=\"workspace-card\" style=\"background:rgba(0,243,255,0.05); border:1px solid rgba(0,243,255,0.25); padding:10px 16px; border-radius:8px; display:flex; flex-direction:column; gap:6px; text-align:left;\">\n    <div style=\"display:flex; align-items:center; gap:8px;\">\n      <span style=\"font-size:1.25em; flex-shrink:0;\">📘</span>\n      <strong style=\"color:#00f3ff; font-size:0.95em; text-transform:uppercase; letter-spacing:0.5px;\">Môn Toán học</strong>\n    </div>\n    <div style=\"font-size:0.95em; line-height:1.4; color:#ffffff; width:100%;\">\n      \"Bạn là giáo viên toán học <span style=\"color:#ffbd59;\">(1)</span>, hãy giải thích khái niệm số thập phân <span style=\"color:#ffbd59;\">(2)</span> cho học sinh lớp 6 <span style=\"color:#ffbd59;\">(3)</span> sao cho thật ngắn gọn và cho một ví dụ dễ hiểu <span style=\"color:#ffbd59;\">(4)</span>.\"\n    </div>\n  </div>\n  <div class=\"workspace-card\" style=\"background:rgba(255,189,89,0.05); border:1px solid rgba(255,189,89,0.25); padding:10px 16px; border-radius:8px; display:flex; flex-direction:column; gap:6px; text-align:left;\">\n    <div style=\"display:flex; align-items:center; gap:8px;\">\n      <span style=\"font-size:1.25em; flex-shrink:0;\">📜</span>\n      <strong style=\"color:#ffbd59; font-size:0.95em; text-transform:uppercase; letter-spacing:0.5px;\">Môn Lịch sử</strong>\n    </div>\n    <div style=\"font-size:0.95em; line-height:1.4; color:#ffffff; width:100%;\">\n      \"Bạn là chuyên gia lịch sử <span style=\"color:#ffbd59;\">(1)</span>, hãy tóm tắt diễn biến Chiến thắng Điện Biên Phủ <span style=\"color:#ffbd59;\">(2)</span> cho học sinh lớp 6 <span style=\"color:#ffbd59;\">(3)</span> bằng một đoạn văn ngắn dưới 100 từ <span style=\"color:#ffbd59;\">(4)</span>.\"\n    </div>\n  </div>\n</div>",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 47.1,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s6-a5-message",
        "type": "box",
        "content": "<div style='display:flex; flex-direction:column; justify-content:center; height:100%; padding:0 20px;'><h3>THÔNG ĐIỆP CỐT LÕI</h3><div style='font-size:24px; color:#00f3ff; font-weight:bold; text-align:center; line-height:1.4;'>Khi nắm giữ thuật toán cấu trúc chung, các chuyên gia có thể làm chủ và xử lý bài tập của mọi môn học.</div></div>",
        "x": 9.8,
        "y": 64,
        "w": 80,
        "h": 22,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.3)"
      },
      {
        "id": "s6-a5-footer",
        "type": "text",
        "content": "⚙️ Đang lưu trữ dữ liệu thử nghiệm...",
        "x": 9.9,
        "y": 88.5,
        "w": 80,
        "h": 8,
        "fontSize": "20px",
        "color": "#8ab4f8",
        "align": "center"
      }
    ]
  },
  {
    "id": "S6-ACT-06",
    "stage": "GIAI ĐOẠN 6",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a6-completed",
        "type": "box",
        "content": "<div style='color:#00ffcc; font-weight:bold;'>ĐÃ KHÁM PHÁ XONG:</div><p>Cấu trúc câu lệnh tối ưu ứng dụng linh hoạt cho các môn học.</p>",
        "x": 10,
        "y": 20,
        "w": 80,
        "h": 22,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s6-a6-next",
        "type": "box",
        "content": "<div style='color:#ffbd59; font-weight:bold;'>CÂU HỎI TIẾP THEO:</div><div style='font-size:28px; color:#ffbd59; font-weight:bold; margin-top:10px;'>Sau hoạt động hôm nay, các chuyên gia nhận ra điều gì về cách mình đã sử dụng AI trước đây?</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s6-a6-indicator",
        "type": "text",
        "content": "➔ ĐANG CHUYỂN TIẾP SANG GIAI ĐOẠN 7...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#00f3ff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S7-Intro",
    "stage": "GIAI ĐOẠN 7",
    "title": "Giới thiệu Giai đoạn 7",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s7-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 7",
        "x": 10,
        "y": 25,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s7-title",
        "type": "heading",
        "content": "NHẬT KÝ CHUYÊN GIA",
        "x": 9.5,
        "y": 44.3,
        "w": 47.2,
        "h": 10,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s7-desc",
        "type": "text",
        "content": "Suy ngẫm cá nhân để rút ra bài học sâu sắc và thay đổi hành vi sử dụng AI.",
        "x": 9.6,
        "y": 67.1,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s7-icon",
        "type": "visual",
        "content": "personal-reflection-diary",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S7-ACT-01",
    "stage": "GIAI ĐOẠN 7",
    "title": "Nhiệm vụ: Nhật ký chuyên gia AI",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s7-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: NHẬT KÝ CHUYÊN GIA AI",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s7-a1-visual",
        "type": "visual",
        "content": "digital-diary-illustration",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s7-a1-subtext",
        "type": "box",
        "content": "📔 <strong>Tập trung:</strong> Nhìn nhận thẳng thắn vào các thói quen cũ và lập cam kết thay đổi cách đặt câu hỏi cho AI.",
        "x": 10.1,
        "y": 34.1,
        "w": 45,
        "h": 35.1,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S7-ACT-02",
    "stage": "GIAI ĐOẠN 7",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s7-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s7-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><h3><span style=\"font-size: 20px;\">• Phiếu Nhật ký chuyên gia AI (nhận từ GV)</span></h3><h3><span style=\"font-size: 20px;\">• Bút viết cá nhân</span></h3>",
        "x": 10,
        "y": 20,
        "w": 42,
        "h": 38,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s7-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Cá nhân</div>",
        "x": 54,
        "y": 20,
        "w": 36,
        "h": 38,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s7-a2-visual",
        "type": "visual",
        "content": "icon-personal-notebook",
        "x": 10,
        "y": 62,
        "w": 80,
        "h": 30,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S7-ACT-03",
    "stage": "GIAI ĐOẠN 7",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s7-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s7-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div>Đọc kỹ từng câu hỏi suy ngẫm ghi trên màn hình.",
        "x": 10,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s7-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div>Suy nghĩ trung thực về cách em sử dụng AI trước đây.",
        "x": 38,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s7-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div>Tự viết câu trả lời và chia sẻ điều em muốn thay đổi.",
        "x": 66,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S7-ACT-04",
    "stage": "GIAI ĐOẠN 7",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s7-a4-title",
        "type": "heading",
        "content": "NHẬT KÝ CHUYÊN GIA AI",
        "x": 4.5,
        "y": 18.6,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#ffbd59",
        "align": "center"
      },
      {
        "id": "s7-a4-questions",
        "type": "box",
        "content": "<div style='font-size:1.3em; line-height:2.5; padding: 20px 40px;'>• Điều em học được hôm nay là…<br>• Bước em thường bỏ qua là…<br>• Điều em muốn thay đổi là…</div>",
        "x": 6,
        "y": 28,
        "w": 88,
        "h": 60,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.03)",
        "border": "1px solid rgba(255,255,255,0.15)"
      }
    ]
  },
  {
    "id": "S8-Intro",
    "stage": "GIAI ĐOẠN 8",
    "title": "Giới thiệu Giai đoạn 8",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s8-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 8",
        "x": 10,
        "y": 20,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s8-title",
        "type": "heading",
        "content": "VẬN HÀNH HỆ THỐNG",
        "x": 9.2,
        "y": 42.2,
        "w": 44.4,
        "h": 10,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s8-desc",
        "type": "text",
        "content": "Chuyển giao và vận hành quy chuẩn câu lệnh AI vào cuộc sống thực tế hàng ngày.",
        "x": 9.1,
        "y": 67.7,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s8-icon",
        "type": "visual",
        "content": "system-operation-check",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S8-ACT-01",
    "stage": "GIAI ĐOẠN 8",
    "title": "Nhiệm vụ: Thử thách với câu lệnh",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s8-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: THỬ THÁCH VỚI CÂU LỆNH",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s8-a1-visual",
        "type": "visual",
        "content": "action-checklist-board",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s8-a1-subtext",
        "type": "box",
        "content": "📋 <strong>Kế hoạch:</strong> Theo dõi hiệu quả của câu trả lời AI nhận được trong 7 ngày tới.",
        "x": 9.7,
        "y": 35.4,
        "w": 45,
        "h": 27,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S8-ACT-04",
    "stage": "GIAI ĐOẠN 8",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s8-a4-desc",
        "type": "box",
        "content": "<div style=\"font-size:1.1em; line-height:1.6; text-align:center;\">Trong 7 ngày tới, trước khi hỏi AI để hỗ trợ học tập, hãy chắc chắn kiểm tra câu lệnh của em&nbsp;<span style=\"font-size: 1.1em;\">đã có đầy đủ:</span></div>",
        "x": 6,
        "y": 14,
        "w": 88,
        "h": 21.8,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s8-a4-checklist",
        "type": "box",
        "content": "<div style=\"font-size:1.4em; line-height:2.2; text-align:left; width:50%; margin:0 auto; color:#00ffcc;\">☑ AI là ai?<br>☑ Làm gì?<br>☑ Cho ai?<br>☑ Yêu cầu</div>",
        "x": 6,
        "y": 42.1,
        "w": 88,
        "h": 49.7,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0,255,204,0.03)",
        "border": "1px solid rgba(0,255,204,0.15)"
      }
    ]
  },
  {
    "id": "S8-ACT-06",
    "stage": "GIAI ĐOẠN 8",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s8-a6-next",
        "type": "box",
        "content": "<div style='color:#ff4d4d; font-weight:bold;'>LỆNH TIẾP THEO TỪ HỆ THỐNG:</div><div style='font-size:28px; color:#ff4d4d; font-weight:bold; margin-top:10px;'>Đóng gói toàn bộ hành trình, đóng khóa bài học để lưu trữ vào máy chủ trung tâm.</div>",
        "x": 10.3,
        "y": 26.3,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 77, 77, 0.05)",
        "border": "1px solid rgba(255, 77, 77, 0.2)"
      },
      {
        "id": "s8-a6-indicator",
        "type": "text",
        "content": "➔ TIẾN HÀNH ĐÓNG GÓI BÀI HỌC...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#ff4d4d",
        "align": "center"
      }
    ]
  },
  {
    "id": "E-01",
    "stage": "TỔNG KẾT BÀI HỌC",
    "title": "Kiến thức cốt lõi (Key Takeaways)",
    "type": "end-lesson",
    "bgStyle": "welcome-bg",
    "elements": [
      {
        "id": "e1-title",
        "type": "heading",
        "content": "KIẾN THỨC CỐT LÕI HÔM NAY",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "32px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "e1-bullets",
        "type": "box",
        "content": "<ul style=\"line-height:2.2; font-size:22px;\"><li>🤖 <strong>AI là trợ lý đắc lực:</strong> AI hỗ trợ việc học tốt nhưng không thể thay thế suy nghĩ và quyết định của con người.</li><li>⚠️ <strong>Nguyên nhân kết quả kém:</strong> AI trả lời chưa đúng hoặc quá dài là do câu hỏi của người dùng chưa rõ ràng, thiếu thông tin cốt lõi.</li><li>🔑 <strong>Công thức vàng:</strong> Một câu lệnh hiệu quả cần có đầy đủ 4 thành phần:&nbsp;</li><li><b>AI là ai -&nbsp; Làm gì - Cho ai - Kết quả thế nào</b></li></ul>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 42,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "e1-message",
        "type": "box",
        "content": "<strong>THÔNG ĐIỆP CỐT LÕI:</strong><strong><span style=\"font-size: calc(18px * var(--font-boost, 1.25) * var(--slide-scale, 1));\">AI sẽ trở thành trợ lý học tập hữu ích khi chúng ta biết cách giao tiếp rõ ràng và có mục đích. Cách đặt câu hỏi quyết định chất lượng câu trả lời nhận được.</span></strong>",
        "x": 10,
        "y": 64,
        "w": 80,
        "h": 22,
        "fontSize": "18px",
        "color": "#8ab4f8",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "e1-footer",
        "type": "text",
        "content": "💾 Hệ thống đã lưu trữ toàn bộ tiến trình học tập.",
        "x": 10,
        "y": 88,
        "w": 80,
        "h": 8,
        "fontSize": "20px",
        "color": "#00ffcc",
        "align": "center"
      }
    ]
  },
  {
    "id": "E-02",
    "stage": "TỔNG KẾT BÀI HỌC",
    "title": "Nhìn lại câu hỏi lớn (Big Question Revisit)",
    "type": "end-lesson",
    "bgStyle": "welcome-bg",
    "elements": [
      {
        "id": "e2-title",
        "type": "heading",
        "content": "NHÌN LẠI CÂU HỎI LỚN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "32px",
        "color": "#ffbd59",
        "align": "center"
      },
      {
        "id": "e2-question",
        "type": "box",
        "content": "<strong><span style=\"font-size: calc(22px * var(--font-boost, 1.25) * var(--slide-scale, 1));\">Làm thế nào để đặt câu hỏi giúp AI trở thành trợ lý học tập hiệu quả thay vì một cỗ máy đưa đáp án mơ hồ?</span></strong>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 18,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "e2-answer",
        "type": "box",
        "content": "<h3>CÂU TRẢ LỜI:</h3><p style=\"font-size: 22px; line-height: 1.6;\">Muốn AI hỗ trợ học tập hiệu quả, chúng ta cần biết cách đưa ra câu lệnh rõ ràng với đầy đủ 4 thành phần:</p><div style=\"font-size:36px; font-weight:bold; color:#00f3ff; text-align:center; padding:15px 0;\">AI LÀ AI + LÀM GÌ + CHO AI + KẾT QUẢ THẾ NÀO</div>",
        "x": 10,
        "y": 40,
        "w": 80,
        "h": 42,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.08)",
        "border": "2px solid #00f3ff"
      },
      {
        "id": "e2-footer",
        "type": "text",
        "content": "🎯 HÀNH TRÌNH KHÁM PHÁ CỦA CHUYÊN GIA HOÀN THÀNH!",
        "x": 10,
        "y": 85,
        "w": 80,
        "h": 10,
        "fontSize": "22px",
        "color": "#00ffcc",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-P0-01",
    "stage": "KHỞI ĐỘNG BÀI HỌC",
    "title": "Màn hình chào mừng (Welcome Screen)",
    "type": "welcome",
    "bgStyle": "welcome-bg",
    "elements": [
      {
        "id": "t2-wel-title",
        "type": "heading",
        "content": "Sử dụng AI hiệu quả",
        "x": 10,
        "y": 13.4,
        "w": 80,
        "h": 10,
        "fontSize": "48px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "t2-wel-subtitle",
        "type": "subheading",
        "content": "Tiết 2: Phòng chiến lược AI",
        "x": 10,
        "y": 30,
        "w": 80,
        "h": 8,
        "fontSize": "32px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "t2-wel-objectives",
        "type": "box",
        "content": "<strong>MỤC TIÊU TIẾT HỌC:</strong><div style='margin-top: 10px;'>• Hiểu vì sao cả 4 thành phần của câu lệnh AI đều quan trọng.</div><div style='margin-top: 6px;'>• Nhận biết điều gì xảy ra khi thiếu một trong các thành phần đó.</div>",
        "x": 10,
        "y": 47.6,
        "w": 46,
        "h": 43.6,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "t2-wel-visual",
        "type": "visual",
        "content": "ai-assistant-glowing",
        "x": 61.1,
        "y": 23.4,
        "w": 32,
        "h": 69.6,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-P0-02",
    "stage": "KHỞI ĐỘNG BÀI HỌC",
    "title": "Câu hỏi lớn (Big Question)",
    "type": "big-question",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-bq-title",
        "type": "heading",
        "content": "CÂU HỎI LỚN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "32px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-bq-question-box",
        "type": "box",
        "content": "<div class=\"glow-text\" style=\"line-height: 1.4; font-size: 30px; color: rgb(255, 189, 89);\"><strong style=\"color: rgb(255, 255, 255); font-size: 23px;\">Tại sao AI không cho ra kết quả tốt nhất nếu thiếu một trong các thành phần của câu lệnh?</strong></div>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 22,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "2px solid rgba(255, 189, 89, 0.3)"
      },
      {
        "id": "t2-bq-visual",
        "type": "visual",
        "content": "four-gears-error",
        "x": 31.5,
        "y": 44.7,
        "w": 35,
        "h": 46,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-P0-03",
    "stage": "KHỞI ĐỘNG BÀI HỌC",
    "title": "Giới thiệu vai trò (Role Introduction)",
    "type": "role-intro",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-role-badge",
        "type": "badge",
        "content": "CHÀO MỪNG CÁC CHUYÊN GIA CÔNG NGHỆ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "30px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "t2-role-details-left",
        "type": "box",
        "content": "<strong>VAI TRÒ CỦA HỌC SINH:</strong><div style='margin-top: 10px;'>Thành viên của biệt đội chuyên gia phụ trách phân tích, xây dựng và phát triển hệ thống AI.</div>",
        "x": 52.6,
        "y": 18.2,
        "w": 38,
        "h": 36,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-role-details-right",
        "type": "box",
        "content": "<strong>NHIỆM VỤ CỦA CHUYÊN GIA:</strong><div style='margin-top: 10px;'>Sàng lọc chứng cứ lỗi, tìm nguyên nhân, viết phương án và đóng gói hồ sơ tranh biện.</div>",
        "x": 52.8,
        "y": 57.7,
        "w": 38,
        "h": 36,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-role-visual",
        "type": "visual",
        "content": "specialist-id-badge",
        "x": 11.7,
        "y": 14.2,
        "w": 33.3,
        "h": 66.2,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S1-Intro",
    "stage": "GĐ1 — MỞ KHÓA NHIỆM VỤ",
    "title": "Giai đoạn 1: Mở khóa nhiệm vụ",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s1-num",
        "type": "subheading",
        "content": "Giai đoạn 1",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s1-title",
        "type": "heading",
        "content": "MỞ KHÓA NHIỆM VỤ",
        "x": 10,
        "y": 26,
        "w": 80,
        "h": 12,
        "fontSize": "48px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s1-icon",
        "type": "visual",
        "content": "security-lock-screen",
        "x": 38.2,
        "y": 45.8,
        "w": 25.7,
        "h": 42.2,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S1-ACT-01",
    "stage": "GĐ1 — MỞ KHÓA NHIỆM VỤ",
    "title": "Hoạt động: Tái khởi động Hệ thống",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s1-a1-title",
        "type": "heading",
        "content": "HOẠT ĐỘNG: TÁI KHỞI ĐỘNG HỆ THỐNG",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s1-a1-alert",
        "type": "box",
        "content": "<div style=\"color: var(--neon-red); font-size: 24px; font-weight: bold; margin-bottom: 12px;\">⚠️&nbsp;<span style=\"color: rgb(0, 243, 255); font-size: 20px;\">THÔNG BÁO BẢO MẬT:</span></div><p style=\"font-size: 18px; line-height: 1.6;\">\"Chào mừng các chuyên gia trở lại. Để mở khóa hệ thống, hãy nhập đúng dãy mật mã là 4 thành phần của thuật toán ra lệnh cho AI.\"</p><div style=\"margin: 20px 0px 0px; font-size: 22px; color: rgb(255, 214, 51); font-weight: bold;\"><span style=\"color: rgb(255, 255, 255); font-size: 18px; font-weight: 400;\"><i>Hãy xung phong thật nhanh để nhắc lại 4 thành phần của câu lệnh cho AI!</i></span></div>",
        "x": 9.7,
        "y": 32.8,
        "w": 45,
        "h": 43.1,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 77, 77, 0.05)",
        "border": "1px solid rgba(255, 77, 77, 0.2)"
      },
      {
        "id": "t2-s1-a1-visual",
        "type": "visual",
        "content": "security-lock-screen",
        "x": 58,
        "y": 20,
        "w": 32,
        "h": 65,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S1-ACT-05",
    "stage": "GĐ1 — MỞ KHÓA NHIỆM VỤ",
    "title": "Báo cáo & Tổng kết",
    "type": "activity-debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s1-a5-title",
        "type": "heading",
        "content": "HỆ THỐNG ĐÃ ĐƯỢC KÍCH HOẠT THÀNH CÔNG",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "t2-s1-a5-result",
        "type": "box",
        "content": "<div style='font-size: 24px; color: #00ffcc; font-weight: bold; margin-bottom: 15px;'>🔑 DÃY MẬT MÃ THUẬT TOÁN CHÍNH XÁC:</div><div style='font-size: 32px; font-weight: bold; color: #00f3ff; line-height: 1.4; text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);'>CÂU LỆNH = AI là ai? + Làm gì? + Cho ai? + Yêu cầu</div>",
        "x": 10,
        "y": 30.9,
        "w": 80,
        "h": 35,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.08)",
        "border": "2px solid #00ffcc"
      }
    ]
  },
  {
    "id": "T2-S1-ACT-06",
    "stage": "GĐ1 — MỞ KHÓA NHIỆM VỤ",
    "title": "Chuyển tiếp",
    "type": "activity-transition",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s1-a6-header",
        "type": "subheading",
        "content": "CHUYỂN TIẾP NHIỆM VỤ",
        "x": 10,
        "y": 10,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s1-a6-left",
        "type": "box",
        "content": "<div style=\"font-size: 16px; color: #a0aec0;\">Chúng ta vừa hoàn thành:</div><div style=\"font-size: 22px; color: #00f3ff; font-weight: bold; margin-top: 10px;\">🔓 Mở khóa thành công hệ thống bằng cấu trúc câu lệnh AI 4 thành phần.</div>",
        "x": 10,
        "y": 25,
        "w": 80,
        "h": 17.8,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "t2-s1-a6-right",
        "type": "box",
        "content": "<div style='font-size: 16px; color: #a0aec0;'>Thử thách tiếp theo:</div><div style='font-size: 22px; color: #ffd633; font-weight: bold; margin-top: 10px;'>❓ Thách thức nào đang chờ đợi các biệt đội chuyên gia ở phía trước?</div>",
        "x": 9.9,
        "y": 47.3,
        "w": 80,
        "h": 16.6,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 214, 51, 0.05)",
        "border": "1px solid rgba(255, 214, 51, 0.2)"
      },
      {
        "id": "t2-s1-a6-icon",
        "type": "visual",
        "content": "stage-transition-arrow",
        "x": 38.8,
        "y": 70.7,
        "w": 23.2,
        "h": 23.3,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S2-Intro",
    "stage": "GĐ2 — NHẬN THÁCH THỨC AI",
    "title": "Giai đoạn 2: Nhận thách thức AI",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s2-num",
        "type": "subheading",
        "content": "Giai đoạn 2",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s2-title",
        "type": "heading",
        "content": "NHẬN THÁCH THỨC AI",
        "x": 10,
        "y": 26,
        "w": 80,
        "h": 12,
        "fontSize": "48px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s2-icon",
        "type": "visual",
        "content": "debate-four-badges",
        "x": 39.2,
        "y": 49.1,
        "w": 23.3,
        "h": 38.9,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S2-ACT-01",
    "stage": "GĐ2 — NHẬN THÁCH THỨC AI",
    "title": "Hoạt động: Đội hình tranh biện",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s2-a1-title",
        "type": "heading",
        "content": "HOẠT ĐỘNG: ĐỘI HÌNH TRANH BIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s2-a1-prop",
        "type": "box",
        "content": "<div style=\"color: #ff4d4d; font-size: 20px; font-weight: bold; margin-bottom: 10px;\">🚨 Trung tâm điều khiển AI vừa nhận được một đề xuất gây tranh cãi:</div><div style=\"font-size: 24px; font-style: italic; line-height: 1.5; color: #ffbd59;\">\"Một số thành phần trong câu lệnh AI có thể không cần thiết và nên được loại bỏ để tiết kiệm thời gian.\"</div><p style=\"margin-top: 15px; font-size: 18px;\">Nhiệm vụ của các đội chuyên gia là kiểm tra đề xuất này và bảo vệ thành phần đội mình phụ trách!</p>",
        "x": 9.2,
        "y": 18,
        "w": 82.8,
        "h": 34.8,
        "fontSize": "16px",
        "color": "#faf9f9",
        "align": "left",
        "bg": "rgba(255, 77, 77, 0.05)",
        "border": "1px solid rgba(255, 77, 77, 0.2)"
      },
      {
        "id": "t2-s2-a1-badges",
        "type": "box",
        "content": "<div style=\"font-size: 18px; font-weight: bold; margin-bottom: 12px; color: #00ffcc; text-align: center;\">🔥 4 ĐỘI CHUYÊN GIA</div><div style=\"display: grid; grid-template-columns: 1fr; gap: 8px; font-size: 15px;\"><div style=\"padding: 6px; border: 1px solid #ff66b2; background: rgba(255, 102, 178, 0.1); border-radius: 4px;\"><span style=\"color: #ff66b2; font-weight: bold;\">1. Đội Vai trò:</span> Vai trò</div><div style=\"padding: 6px; border: 1px solid #ffd633; background: rgba(255, 214, 51, 0.1); border-radius: 4px;\"><span style=\"color: #ffd633; font-weight: bold;\">2. Đội Nhiệm vụ:</span> Nhiệm vụ</div><div style=\"padding: 6px; border: 1px solid #2eb82e; background: rgba(46, 184, 46, 0.1); border-radius: 4px;\"><span style=\"color: #2eb82e; font-weight: bold;\">3. Đội Đối tượng:</span> Đối tượng</div><div style=\"padding: 6px; border: 1px solid #00f3ff; background: rgba(0, 243, 255, 0.1); border-radius: 4px;\"><span style=\"color: #00f3ff; font-weight: bold;\">4. Đội Yêu cầu:</span> Yêu cầu</div></div>",
        "x": 57.1,
        "y": 55.9,
        "w": 32,
        "h": 41.7,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.03)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-s2-a1-visual",
        "type": "visual",
        "content": "debate-four-badges",
        "x": 16.8,
        "y": 55.9,
        "w": 33.2,
        "h": 40.4,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S3-Intro",
    "stage": "GĐ3 — THU THẬP BẰNG CHỨNG",
    "title": "Giai đoạn 3: Thu thập bằng chứng",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s3-num",
        "type": "subheading",
        "content": "Giai đoạn 3",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s3-title",
        "type": "heading",
        "content": "THU THẬP BẰNG CHỨNG",
        "x": 10,
        "y": 26,
        "w": 80,
        "h": 12,
        "fontSize": "48px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s3-icon",
        "type": "visual",
        "content": "data-collection-node",
        "x": 38,
        "y": 45.8,
        "w": 25.2,
        "h": 42.2,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S3-ACT-01",
    "stage": "GĐ3 — THU THẬP BẰNG CHỨNG",
    "title": "Hoạt động: BẰNG CHỨNG THÉP",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s3-a1-title",
        "type": "heading",
        "content": "HOẠT ĐỘNG: BẰNG CHỨNG THÉP",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s3-a1-text",
        "type": "box",
        "content": "<div style='color: #00ffcc; font-size: 20px; font-weight: bold; margin-bottom: 12px;'>📁 TRUNG TÂM PHÂN TÍCH LỖI:</div><p style='font-size: 18px; line-height: 1.6;'>Một kho dữ liệu đang phát cảnh báo. Trên màn hình xuất hiện các hồ sơ hội thoại AI được đánh dấu \"Cần kiểm tra\".</p><p style='margin-top: 15px; font-size: 18px;'>Nhiệm vụ của các nhóm chuyên gia là phân tích các hồ sơ lỗi này để tìm ra bằng chứng trực tiếp chứng minh tầm quan trọng của thành phần mình phụ trách.</p>",
        "x": 10,
        "y": 20,
        "w": 45,
        "h": 65,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-s3-a1-visual",
        "type": "visual",
        "content": "red-warning-dialog",
        "x": 58,
        "y": 20,
        "w": 32,
        "h": 65,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S3-ACT-02",
    "stage": "GĐ3 — THU THẬP BẰNG CHỨNG",
    "title": "Chuẩn bị dụng cụ & Hình thức",
    "type": "activity-prep",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s3-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "t2-s3-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ:</h3><div style='font-size: 28px; color: #ffd633; margin-top: 20px;'>📄 Phiếu dữ liệu lỗi<br>✏️ Bút đánh dấu</div>",
        "x": 10,
        "y": 20,
        "w": 38,
        "h": 48,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-s3-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC:</h3><div style='font-size: 32px; color: #00f3ff; margin-top: 25px;'>👥 Nhóm 4 thành viên</div>",
        "x": 52,
        "y": 20,
        "w": 38,
        "h": 48,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      }
    ]
  },
  {
    "id": "T2-S3-ACT-03",
    "stage": "GĐ3 — THU THẬP BẰNG CHỨNG",
    "title": "Hướng dẫn thực hiện",
    "type": "activity-howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s3-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s3-a3-steps",
        "type": "box",
        "content": "<div style=\"font-size: 20pt; display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;\"><div style=\"padding: 15px; border-top: 4px solid #ff66b2; background: rgba(255,102,178,0.03); border-radius: 6px;\"><strong style=\"color: #ff66b2; display: block; margin-bottom: 8px;\">BƯỚC 1:</strong> Đọc kỹ 4 dữ liệu hội thoại AI do giáo viên cung cấp trên phiếu học tập.</div><div style=\"padding: 15px; border-top: 4px solid #ffd633; background: rgba(255,214,51,0.03); border-radius: 6px;\"><strong style=\"color: #ffd633; display: block; margin-bottom: 8px;\">BƯỚC 2:</strong> Phân tích xem&nbsp; câu lệnh thiếu thông tin gì dẫn đến kết quả không phù hợp.</div><div style=\"padding: 15px; border-top: 4px solid #2eb82e; background: rgba(46,184,46,0.03); border-radius: 6px;\"><strong style=\"color: #2eb82e; display: block; margin-bottom: 8px;\">BƯỚC 3:</strong> Tìm và đánh dấu bằng chứng liên quan trực tiếp đến thành phần mà nhóm mình phụ trách.</div></div>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 58,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.02)",
        "border": "1px solid rgba(255,255,255,0.1)"
      }
    ]
  },
  {
    "id": "T2-S3-ACT-04-A",
    "stage": "GĐ3 — THU THẬP BẰNG CHỨNG",
    "title": "Dữ liệu hội thoại 1",
    "type": "activity-workspace",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s3-a4-title-a",
        "type": "heading",
        "content": "HỒ SƠ DỮ LIỆU 1",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s3-a4-screen-a",
        "type": "box",
        "content": "<div style=\"background: #090d16; border: 2px solid #334155; border-radius: 8px; font-family: var(--font-standard); display: flex; flex-direction: column; height: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.5);\"><div style=\"background: #1e293b; border-bottom: 2px solid #334155; padding: 6px 12px; display: flex; align-items: center; justify-content: space-between; border-radius: 6px 6px 0 0;\"><div style=\"display: flex; gap: 6px;\"><span style=\"width: 10px; height: 10px; background: #ef4444; border-radius: 50%;\"></span><span style=\"width: 10px; height: 10px; background: #eab308; border-radius: 50%;\"></span><span style=\"width: 10px; height: 10px; background: #22c55e; border-radius: 50%;\"></span></div><div style=\"color: #94a3b8; font-size: 14pt; font-weight: bold;\">CỬA_SỔ_AI_01</div><div style=\"width: 40px;\"></div></div><div style=\"padding: 15px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; font-size: 16pt; line-height: 1.4; color: #e2e8f0; overflow-y: auto;\"><div style=\"margin-bottom: 12px;\"><span style=\"color: #38bdf8; font-weight: bold; display: block; margin-bottom: 6px;\">👤 CÂU LỆNH CỦA NGƯỜI DÙNG:</span><div style=\"background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 10px; border-radius: 4px; font-style: italic; color: #f8fafc;\">\"Lập kế hoạch tập luyện chạy bộ trong 1 tuần cho người mới bắt đầu dưới dạng bảng.\"</div></div><div style=\"margin-bottom: 12px; flex: 1;\"><span style=\"color: #34d399; font-weight: bold; display: block; margin-bottom: 6px;\">🤖 KẾT QUẢ TRẢ LỜI CỦA AI:</span><div style=\"background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 10px; border-radius: 4px; color: #cbd5e1; font-family: var(--font-standard); font-size: 14pt;\"><table style=\"width: 100%; border-collapse: collapse; border: 1px solid #475569; font-size: 14pt;\"><tbody><tr style=\"background: #1e293b; border-bottom: 1px solid #475569;\"><th style=\"padding: 6px; text-align: left;\">Ngày</th><th style=\"padding: 6px; text-align: left;\">Bài tập chạy bộ</th></tr><tr style=\"border-bottom: 1px solid #334155;\"><td style=\"padding: 6px;\">Thứ 2</td><td style=\"padding: 6px;\">Chạy bộ 15 phút.</td></tr><tr style=\"border-bottom: 1px solid #334155;\"><td style=\"padding: 6px;\">Thứ 3</td><td style=\"padding: 6px;\">Nghỉ ngơi hoàn toàn.</td></tr><tr style=\"border-bottom: 1px solid #334155;\"><td style=\"padding: 6px;\">Thứ 4</td><td style=\"padding: 6px;\">Chạy bộ 20 phút.</td></tr><tr style=\"border-bottom: 1px solid #334155;\"><td style=\"padding: 6px;\">Thứ 5</td><td style=\"padding: 6px;\">Nghỉ ngơi hoàn toàn.</td></tr><tr style=\"border-bottom: 1px solid #334155;\"><td style=\"padding: 6px;\">Thứ 6</td><td style=\"padding: 6px;\">Chạy bộ 15 phút.</td></tr><tr style=\"border-bottom: 1px solid #475569;\"><td style=\"padding: 6px;\">Thứ 7</td><td style=\"padding: 6px;\">Chạy bộ 25 phút.</td></tr></tbody></table></div></div></div></div>",
        "x": 4.4,
        "y": 15,
        "w": 90.7,
        "h": 84.1,
        "fontSize": "13pt",
        "color": "#ffffff",
        "align": "left"
      }
    ]
  },
  {
    "id": "T2-S3-ACT-04-B",
    "stage": "GĐ3 — THU THẬP BẰNG CHỨNG",
    "title": "Dữ liệu hội thoại 2",
    "type": "activity-workspace",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s3-a4-title-b",
        "type": "heading",
        "content": "HỒ SƠ DỮ LIỆU 2",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#ffd633",
        "align": "center"
      },
      {
        "id": "t2-s3-a4-screen-b",
        "type": "box",
        "content": "<div style=\"background: #090d16; border: 2px solid #334155; border-radius: 8px; font-family: var(--font-standard); display: flex; flex-direction: column; height: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.5);\"><div style=\"background: #1e293b; border-bottom: 2px solid #334155; padding: 6px 12px; display: flex; align-items: center; justify-content: space-between; border-radius: 6px 6px 0 0;\"><div style=\"display: flex; gap: 6px;\"><span style=\"width: 10px; height: 10px; background: #ef4444; border-radius: 50%;\"></span><span style=\"width: 10px; height: 10px; background: #eab308; border-radius: 50%;\"></span><span style=\"width: 10px; height: 10px; background: #22c55e; border-radius: 50%;\"></span></div><div style=\"color: #94a3b8; font-size: 14pt; font-weight: bold;\">CỬA_SỔ_AI_02</div><div style=\"width: 40px;\"></div></div><div style=\"padding: 15px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; font-size: 16pt; line-height: 1.4; color: #e2e8f0; overflow-y: auto;\"><div style=\"margin-bottom: 12px;\"><span style=\"color: #38bdf8; font-weight: bold; display: block; margin-bottom: 6px;\">👤 CÂU LỆNH CỦA NGƯỜI DÙNG:</span><div style=\"background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 10px; border-radius: 4px; font-style: italic; color: #f8fafc;\">\"Hãy đóng vai hướng dẫn viên du lịch. Hãy giới thiệu cho du khách lần đầu đến Hà Nội. Trình bày dưới dạng 5 gạch đầu dòng.\"</div></div><div style=\"margin-bottom: 12px; flex: 1;\"><span style=\"color: #34d399; font-weight: bold; display: block; margin-bottom: 6px;\">🤖 KẾT QUẢ TRẢ LỜI CỦA AI:</span><div style=\"background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 10px; border-radius: 4px; color: #cbd5e1; font-family: var(--font-standard); font-size: 14pt;\"><ul style=\"margin: 0; padding-left: 20px; font-size: 14pt; line-height: 1.5; color: #cbd5e1;\"><li>Chào mừng bạn đến với Hà Nội - thủ đô ngàn năm văn hiến của Việt Nam!</li><li>Tôi có thể giới thiệu cho bạn về lịch sử cổ kính, các món ăn ngon hay các điểm tham quan đẹp.</li><li>Thành phố nổi tiếng với Hồ Hoàn Kiếm, Lăng Bác, Văn Miếu Quốc Tử Giám và 36 phố phường.</li><li>Bạn có muốn tôi lên lịch trình chi tiết về ẩm thực hay văn hóa hay không?</li><li>Hãy cho tôi biết mong muốn của bạn để tôi giới thiệu chi tiết hơn nhé.</li></ul></div></div></div></div>",
        "x": 3.2,
        "y": 15,
        "w": 93.7,
        "h": 83.8,
        "fontSize": "13pt",
        "color": "#ffffff",
        "align": "left"
      }
    ]
  },
  {
    "id": "T2-S3-ACT-04-C",
    "stage": "GĐ3 — THU THẬP BẰNG CHỨNG",
    "title": "Dữ liệu hội thoại 3",
    "type": "activity-workspace",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s3-a4-title-c",
        "type": "heading",
        "content": "HỒ SƠ DỮ LIỆU 3",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#2eb82e",
        "align": "center"
      },
      {
        "id": "t2-s3-a4-screen-c",
        "type": "box",
        "content": "<div style=\"background: #090d16; border: 2px solid #334155; border-radius: 8px; font-family: var(--font-standard); display: flex; flex-direction: column; height: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.5);\"><div style=\"background: #1e293b; border-bottom: 2px solid #334155; padding: 6px 12px; display: flex; align-items: center; justify-content: space-between; border-radius: 6px 6px 0 0;\"><div style=\"display: flex; gap: 6px;\"><span style=\"width: 10px; height: 10px; background: #ef4444; border-radius: 50%;\"></span><span style=\"width: 10px; height: 10px; background: #eab308; border-radius: 50%;\"></span><span style=\"width: 10px; height: 10px; background: #22c55e; border-radius: 50%;\"></span></div><div style=\"color: #94a3b8; font-size: 14pt; font-weight: bold;\">CỬA_SỔ_AI_03</div><div style=\"width: 40px;\"></div></div><div style=\"padding: 15px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; font-size: 16pt; line-height: 1.4; color: #e2e8f0; overflow-y: auto;\"><div style=\"margin-bottom: 12px;\"><span style=\"color: #38bdf8; font-weight: bold; display: block; margin-bottom: 6px;\">👤 CÂU LỆNH CỦA NGƯỜI DÙNG:</span><div style=\"background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 10px; border-radius: 4px; font-style: italic; color: #f8fafc;\">\"Hãy đóng vai đầu bếp, hướng dẫn cách làm bánh mì nướng bơ tỏi. Trình bày theo từng bước.\"</div></div><div style=\"margin-bottom: 12px; flex: 1;\"><span style=\"color: #34d399; font-weight: bold; display: block; margin-bottom: 6px;\">🤖 KẾT QUẢ TRẢ LỜI CỦA AI:</span><div style=\"background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 10px; border-radius: 4px; color: #cbd5e1; font-family: var(--font-standard); font-size: 14pt;\"><ol style=\"margin: 0; padding-left: 20px; font-size: 14pt; line-height: 1.4; color: #cbd5e1;\"><li>Bước 1: Bật lò nướng đối lưu làm nóng trước ở nhiệt độ 180 độ C.</li><li>Bước 2: Chuẩn bị bánh mì gối cắt lát dày 1.5cm, bơ lạt hữu cơ và tỏi tươi băm thật nhuyễn.</li><li>Bước 3: Trộn bơ lạt, tỏi băm và một chút muối hồng biển, phết đều lên bề mặt bánh mì.</li><li>Bước 4: Nướng bánh trong lò đối lưu từ 8 đến 10 phút đến khi viền bánh giòn đều.</li><li>Bước 5: Lấy ra và trang trí bằng lá mùi tây tươi băm nhỏ.</li></ol></div></div></div></div>",
        "x": 4.7,
        "y": 15,
        "w": 90.6,
        "h": 83,
        "fontSize": "13pt",
        "color": "#ffffff",
        "align": "left"
      }
    ]
  },
  {
    "id": "T2-S3-ACT-04-D",
    "stage": "GĐ3 — THU THẬP BẰNG CHỨNG",
    "title": "Dữ liệu hội thoại 4",
    "type": "activity-workspace",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s3-a4-title-d",
        "type": "heading",
        "content": "HỒ SƠ DỮ LIỆU 4",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#ff66b2",
        "align": "center"
      },
      {
        "id": "t2-s3-a4-screen-d",
        "type": "box",
        "content": "<div style=\"background: #090d16; border: 2px solid #334155; border-radius: 8px; font-family: var(--font-standard); display: flex; flex-direction: column; height: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.5);\"><div style=\"background: #1e293b; border-bottom: 2px solid #334155; padding: 6px 12px; display: flex; align-items: center; justify-content: space-between; border-radius: 6px 6px 0 0;\"><div style=\"display: flex; gap: 6px;\"><span style=\"width: 10px; height: 10px; background: #ef4444; border-radius: 50%;\"></span><span style=\"width: 10px; height: 10px; background: #eab308; border-radius: 50%;\"></span><span style=\"width: 10px; height: 10px; background: #22c55e; border-radius: 50%;\"></span></div><div style=\"color: #94a3b8; font-size: 15pt; font-weight: bold;\">CỬA_SỔ_AI_04</div><div style=\"width: 40px;\"></div></div><div style=\"padding: 15px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; font-size: 17pt; line-height: 1.4; color: #e2e8f0; overflow-y: auto;\"><div style=\"margin-bottom: 12px;\"><span style=\"color: #38bdf8; font-weight: bold; display: block; margin-bottom: 6px;\">👤 CÂU LỆNH CỦA NGƯỜI DÙNG:</span><div style=\"background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 10px; border-radius: 4px; font-style: italic; color: #f8fafc;\">\"Hãy đóng vai chuyên gia môi trường, giải thích lợi ích của việc trồng cây xanh cho học sinh lớp 6.\"</div></div><div style=\"margin-bottom: 12px; flex: 1;\"><span style=\"color: #34d399; font-weight: bold; display: block; margin-bottom: 6px;\">🤖 KẾT QUẢ TRẢ LỜI CỦA AI:</span><div style=\"background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 10px; border-radius: 4px; color: #cbd5e1; font-family: var(--font-standard); font-size: 15pt;\"><div style=\"font-size: 15pt; line-height: 1.35; color: #cbd5e1; max-height: 250px; overflow-y: auto;\">Trồng cây xanh đem lại những lợi ích vô cùng to lớn. Đầu tiên, cây đóng vai trò quang hợp để tạo ra khí ô-xy và hấp thụ khí các-bo-nic giúp bầu không khí trong lành hơn. Bên cạnh đó, rễ cây bám chặt vào lòng đất giúp chống xói mòn và sạt lở khi mùa lũ về. Tán cây xanh che mát sân trường giúp các em học sinh có bóng râm mát lành để vui chơi giải trí sau những giờ học căng thẳng. Trồng cây còn góp phần tạo dựng môi trường sống cho muôn vàn loài sinh vật khác nhau... (văn bản tiếp diễn kéo dài thêm 3 trang giấy).</div></div></div></div></div>",
        "x": 4.8,
        "y": 15,
        "w": 90.4,
        "h": 77.8,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left"
      }
    ]
  },
  {
    "id": "T2-S3-ACT-05",
    "stage": "GĐ3 — THU THẬP BẰNG CHỨNG",
    "title": "Báo cáo & Tổng kết",
    "type": "activity-debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s3-a5-title",
        "type": "heading",
        "content": "BÁO CÁO KẾT QUẢ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "t2-s3-a5-errors",
        "type": "box",
        "content": "<div style=\"font-size: 16pt; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; height: 100%;\"><div style=\"padding: 10px; border: 1px solid #ff66b2; background: rgba(255, 102, 178, 0.08); border-radius: 6px; display: flex; flex-direction: column; justify-content: center;\"><strong>Dữ liệu lỗi 1:</strong><span style=\"color: #ff66b2; font-weight: bold; margin-top: 2px;\">Thiếu \"AI là ai\" (Vai trò)</span><span style=\"font-size: 13pt; opacity: 0.9; margin-top: 3px; line-height: 1.35;\">AI không biết dùng giọng điệu hay góc nhìn của một bác sĩ thể thao, huấn luyện viên hay vận động viên chuyên nghiệp để lập kế hoạch, dẫn đến kế hoạch rất sơ sài.</span></div><div style=\"padding: 10px; border: 1px solid #ffd633; background: rgba(255, 214, 51, 0.08); border-radius: 6px; display: flex; flex-direction: column; justify-content: center;\"><strong>Dữ liệu lỗi 2:</strong><span style=\"color: #ffd633; font-weight: bold; margin-top: 2px;\">Thiếu \"Làm gì\" (Nhiệm vụ)</span><span style=\"font-size: 13pt; opacity: 0.9; margin-top: 3px; line-height: 1.35;\">AI biết mình là hướng dẫn viên và hướng tới đối tượng du khách, nhưng không biết phải giới thiệu Hà Nội về ẩm thực, lịch sử hay địa điểm vui chơi, nên chưa đưa ra được thông tin cần thiết.</span></div><div style=\"padding: 10px; border: 1px solid #2eb82e; background: rgba(46, 184, 46, 0.08); border-radius: 6px; display: flex; flex-direction: column; justify-content: center;\"><strong>Dữ liệu lỗi 3:</strong><span style=\"color: #2eb82e; font-weight: bold; margin-top: 2px;\">Thiếu \"Cho ai\" (Đối tượng)</span><span style=\"font-size: 13pt; opacity: 0.9; margin-top: 3px; line-height: 1.35;\">AI đóng vai đầu bếp chỉ cách làm bánh mì với công thức quá phức tạp, không biết đối tượng là học sinh hay người ăn kiêng để đưa ra cách làm hoặc gia vị phù hợp.</span></div><div style=\"padding: 10px; border: 1px solid #00f3ff; background: rgba(0, 243, 255, 0.08); border-radius: 6px; display: flex; flex-direction: column; justify-content: center;\"><strong>Dữ liệu lỗi 4:</strong><span style=\"color: #00f3ff; font-weight: bold; margin-top: 2px;\">Thiếu \"Kết quả thế nào\" (Yêu cầu)</span><span style=\"font-size: 13pt; opacity: 0.9; margin-top: 3px; line-height: 1.35;\">AI giải thích lợi ích của cây xanh cho học sinh lớp 6, nhưng không biết độ dài bao nhiêu, cần gạch đầu dòng, viết thành bài văn hay thơ, dẫn đến câu trả lời quá dài dòng, dễ nản khi đọc.</span></div></div>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 78.6,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left"
      }
    ]
  },
  {
    "id": "T2-S3-ACT-06",
    "stage": "GĐ3 — THU THẬP BẰNG CHỨNG",
    "title": "Chuyển tiếp",
    "type": "activity-transition",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s3-a6-header",
        "type": "subheading",
        "content": "CHUYỂN TIẾP NHIỆM VỤ",
        "x": 10,
        "y": 10,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s3-a6-left",
        "type": "box",
        "content": "<div style='font-size: 16px; color: #a0aec0;'>Chúng ta vừa hoàn thành:</div><div style='font-size: 20px; color: #00f3ff; font-weight: bold; margin-top: 10px;'>📁 Thu thập các bằng chứng cho thấy điều gì xảy ra khi câu lệnh AI thiếu các thành phần quan trọng.</div>",
        "x": 10,
        "y": 25,
        "w": 80,
        "h": 20.9,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "t2-s3-a6-right",
        "type": "box",
        "content": "<div style='font-size: 16px; color: #a0aec0;'>Thử thách tiếp theo:</div><div style='font-size: 20px; color: #ffd633; font-weight: bold; margin-top: 10px;'>💬 Làm thế nào để biến các bằng chứng này thành những lập luận thuyết phục để bảo vệ thành phần của đội mình?</div>",
        "x": 10.1,
        "y": 49.8,
        "w": 80,
        "h": 21,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 214, 51, 0.05)",
        "border": "1px solid rgba(255, 214, 51, 0.2)"
      },
      {
        "id": "t2-s3-a6-icon",
        "type": "visual",
        "content": "stage-transition-arrow",
        "x": 37.5,
        "y": 74.3,
        "w": 26.3,
        "h": 23.6,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S4-Intro",
    "stage": "GĐ4 — XÂY DỰNG LẬP LUẬN",
    "title": "Giai đoạn 4: Xây dựng lập luận",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s4-num",
        "type": "subheading",
        "content": "Giai đoạn 4",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s4-title",
        "type": "heading",
        "content": "XÂY DỰNG LẬP LUẬN",
        "x": 10,
        "y": 26,
        "w": 80,
        "h": 12,
        "fontSize": "48px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s4-icon",
        "type": "visual",
        "content": "algorithm-puzzle-pieces",
        "x": 35.9,
        "y": 48,
        "w": 28,
        "h": 39.4,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S4-ACT-01",
    "stage": "GĐ4 — XÂY DỰNG LẬP LUẬN",
    "title": "Hoạt động: Thiết lập sơ đồ chiến lược",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s4-a1-title",
        "type": "heading",
        "content": "HOẠT ĐỘNG: THIẾT LẬP HỒ SƠ CHIẾN LƯỢC",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s4-a1-intro",
        "type": "box",
        "content": "<div style=\"color: rgb(0, 255, 204); font-size: 20px; margin-bottom: 12px;\"><b>📐&nbsp;</b><span style=\"background-color: rgba(0, 243, 255, 0.02); font-size: 23px; text-align: center; color: rgb(255, 255, 255);\">Thiết lập sơ đồ chiến lược để xây dựng lập luận đanh thép bảo vệ ý kiến.</span></div>",
        "x": 10.1,
        "y": 43,
        "w": 50,
        "h": 20.4,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-s4-a1-visual",
        "type": "visual",
        "content": "algorithm-puzzle-pieces",
        "x": 63,
        "y": 20,
        "w": 27,
        "h": 68,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S4-ACT-02",
    "stage": "GĐ4 — XÂY DỰNG LẬP LUẬN",
    "title": "Chuẩn bị dụng cụ & Hình thức",
    "type": "activity-prep",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s4-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "t2-s4-a2-tools",
        "type": "box",
        "content": "<h3>DỤNG CỤ:</h3><div style=\"font-size: 28px; color: #ffd633; margin-top: 20px;\">📄 Sơ đồ cấu trúc lập luận (nhận từ giáo viên)<br>✏️ Bút viết</div>",
        "x": 10,
        "y": 20,
        "w": 38,
        "h": 48,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-s4-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC:</h3><div style='font-size: 30px; color: #00f3ff; margin-top: 25px;'>👥 4 Nhóm chuyên gia</div>",
        "x": 52,
        "y": 20,
        "w": 38,
        "h": 48,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      }
    ]
  },
  {
    "id": "T2-S4-ACT-03",
    "stage": "GĐ4 — XÂY DỰNG LẬP LUẬN",
    "title": "Hướng dẫn thực hiện",
    "type": "activity-howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s4-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s4-a3-steps",
        "type": "box",
        "content": "<div style='font-size: 20pt; display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;'><div style='padding: 15px; border-top: 4px solid #ff66b2; background: rgba(255,102,178,0.03); border-radius: 6px;'><strong style='color: #ff66b2; display: block; margin-bottom: 8px;'>BƯỚC 1:</strong> Thảo luận nhóm xác định vì sao thành phần của nhóm mình là cần thiết trong câu lệnh AI.</div><div style='padding: 15px; border-top: 4px solid #ffd633; background: rgba(255,214,51,0.03); border-radius: 6px;'><strong style='color: #ffd633; display: block; margin-bottom: 8px;'>BƯỚC 2:</strong> Chọn những bằng chứng phù hợp đã thu thập ở nhiệm vụ trước.</div><div style='padding: 15px; border-top: 4px solid #00f3ff; background: rgba(0,243,255,0.03); border-radius: 6px;'><strong style='color: #00f3ff; display: block; margin-bottom: 8px;'>BƯỚC 3:</strong> Hoàn thiện sơ đồ chiến lược của nhóm.</div></div>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 58,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.02)",
        "border": "1px solid rgba(255,255,255,0.1)"
      }
    ]
  },
  {
    "id": "T2-S4-ACT-04",
    "stage": "GĐ4 — XÂY DỰNG LẬP LUẬN",
    "title": "Nhiệm vụ: Hoàn thiện sơ đồ lập luận",
    "type": "activity-workspace",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s4-a4-title",
        "type": "heading",
        "content": "NHIỆM VỤ: THIẾT LẬP HỒ SƠ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#ffd633",
        "align": "center"
      },
      {
        "id": "t2-s4-a4-frame-1",
        "type": "box",
        "content": "<div style=\"height: 100%; box-sizing: border-box; display: flex; flex-direction: column;\"><strong style=\"color: #ff66b2; display: block; margin-bottom: 2px; font-size: 16pt;\">1. Luận điểm:</strong><p style=\"margin: 0 0 6px 0; font-size: 14pt; color: #e2e8f0; line-height: 1.3;\">Thành phần <span style=\"color: #ff66b2; font-weight: bold;\">[Tên thành phần của đội]</span> là một phần quan trọng và không thể thiếu trong câu lệnh AI.</p><textarea placeholder=\"Nhập luận điểm của đội em...\" style=\"width: 100%; height: calc(100% - 42px); background: rgba(3, 8, 26, 0.65); border: 1px solid rgba(255, 102, 178, 0.45); border-radius: 4px; color: white; padding: 6px; font-size: 15pt; outline: none; resize: none; font-family: sans-serif; box-sizing: border-box;\"></textarea></div>",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 27.1,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.03)",
        "border": "1px solid rgba(255,255,255,0.1)"
      },
      {
        "id": "t2-s4-a4-frame-2",
        "type": "box",
        "content": "<div style=\"height: 100%; box-sizing: border-box; display: flex; flex-direction: column;\"><strong style=\"color: #ffd633; display: block; margin-bottom: 2px; font-size: 16pt;\">2. Lý do:</strong><p style=\"margin: 0 0 6px 0; font-size: 14pt; color: #e2e8f0; line-height: 1.3;\">Giải thích vì sao AI cần thành phần này để hiểu đúng yêu cầu và tạo ra kết quả phù hợp nhất.</p><textarea placeholder=\"Nhập lý do tại sao thành phần này quan trọng...\" style=\"width: 100%; height: calc(100% - 42px); background: rgba(3, 8, 26, 0.65); border: 1px solid rgba(255, 214, 51, 0.45); border-radius: 4px; color: white; padding: 6px; font-size: 15pt; outline: none; resize: none; font-family: sans-serif; box-sizing: border-box;\"></textarea></div>",
        "x": 9.7,
        "y": 44.1,
        "w": 80,
        "h": 24.1,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.03)",
        "border": "1px solid rgba(255,255,255,0.1)"
      },
      {
        "id": "t2-s4-a4-frame-3",
        "type": "box",
        "content": "<div style=\"height: 100%; box-sizing: border-box; display: flex; flex-direction: column;\"><strong style=\"color: #00ffcc; display: block; margin-bottom: 2px; font-size: 16pt;\">3. Bằng chứng:</strong><p style=\"margin: 0 0 6px 0; font-size: 14pt; color: #e2e8f0; line-height: 1.3;\">Sử dụng hồ sơ dữ liệu lỗi ở nhiệm vụ trước để chứng minh điều gì xảy ra khi thiếu thành phần này.</p><textarea placeholder=\"Nhập bằng chứng (ví dụ hồ sơ lỗi)...\" style=\"width: 100%; height: calc(100% - 42px); background: rgba(3, 8, 26, 0.65); border: 1px solid rgba(0, 255, 204, 0.45); border-radius: 4px; color: white; padding: 6px; font-size: 15pt; outline: none; resize: none; font-family: sans-serif; box-sizing: border-box;\"></textarea></div>",
        "x": 9.9,
        "y": 70.8,
        "w": 80,
        "h": 27.4,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.03)",
        "border": "1px solid rgba(255,255,255,0.1)"
      }
    ]
  },
  {
    "id": "T2-S4-ACT-06",
    "stage": "GĐ4 — XÂY DỰNG LẬP LUẬN",
    "title": "Chuyển tiếp",
    "type": "activity-transition",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s4-a6-header",
        "type": "subheading",
        "content": "CHUYỂN TIẾP NHIỆM VỤ",
        "x": 10,
        "y": 10,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s4-a6-left",
        "type": "box",
        "content": "<div style='font-size: 16px; color: #a0aec0;'>Chúng ta vừa hoàn thành:</div><div style='font-size: 20px; color: #00f3ff; font-weight: bold; margin-top: 10px;'>📐 Xây dựng bộ lập luận vững chắc bảo vệ thành phần câu lệnh của đội mình.</div>",
        "x": 10,
        "y": 25,
        "w": 80,
        "h": 16.2,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "t2-s4-a6-right",
        "type": "box",
        "content": "<div style='font-size: 16px; color: #a0aec0;'>Thử thách tiếp theo:</div><div style='font-size: 20px; color: #ffd633; font-weight: bold; margin-top: 10px;'>⚔️ Liệu các lập luận này có đủ sức thuyết phục trước những câu hỏi phản biện nảy lửa từ các đội khác?</div>",
        "x": 10,
        "y": 47.2,
        "w": 80,
        "h": 21.1,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 214, 51, 0.05)",
        "border": "1px solid rgba(255, 214, 51, 0.2)"
      },
      {
        "id": "t2-s4-a6-icon",
        "type": "visual",
        "content": "stage-transition-arrow",
        "x": 39.8,
        "y": 72.3,
        "w": 22,
        "h": 23.1,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S5-Intro",
    "stage": "GĐ5 — DỰ ĐOÁN PHẢN BIỆN",
    "title": "Giai đoạn 5: Dự đoán phản biện",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s5-num",
        "type": "subheading",
        "content": "Giai đoạn 5",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s5-title",
        "type": "heading",
        "content": "DỰ ĐOÁN PHẢN BIỆN",
        "x": 10,
        "y": 26,
        "w": 80,
        "h": 12,
        "fontSize": "48px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s5-icon",
        "type": "visual",
        "content": "electric-clash-shield",
        "x": 40.5,
        "y": 51.2,
        "w": 20,
        "h": 30,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S5-ACT-01",
    "stage": "GĐ5 — DỰ ĐOÁN PHẢN BIỆN",
    "title": "Hoạt động: Hỏi xoáy - Đáp xoay",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s5-a1-title",
        "type": "heading",
        "content": "HOẠT ĐỘNG: HỎI XOÁY - ĐÁP XOAY",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s5-a1-text",
        "type": "box",
        "content": "<div style=\"color: rgb(255, 214, 51); font-size: 20px; margin-bottom: 12px;\"><b>⚔️&nbsp;</b><span style=\"background-color: rgba(0, 243, 255, 0.02); font-size: 23px; text-align: center; color: rgb(255, 255, 255);\">Đóng vai đối thủ để dự đoán trước các câu hỏi và chuẩn bị câu trả lời phản biện.</span></div>",
        "x": 9.8,
        "y": 39.1,
        "w": 45,
        "h": 25.9,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 214, 51, 0.05)",
        "border": "1px solid rgba(255, 214, 51, 0.2)"
      },
      {
        "id": "t2-s5-a1-visual",
        "type": "visual",
        "content": "electric-clash-shield",
        "x": 58,
        "y": 20,
        "w": 32,
        "h": 65,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S5-ACT-02",
    "stage": "GĐ5 — DỰ ĐOÁN PHẢN BIỆN",
    "title": "Chuẩn bị dụng cụ & Hình thức",
    "type": "activity-prep",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s5-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "t2-s5-a2-tools",
        "type": "box",
        "content": "<h3>DỤNG CỤ:</h3><div style='font-size: 28px; color: #ffd633; margin-top: 20px;'>📝 Giấy ghi chú<br>✏️ Bút viết</div>",
        "x": 10,
        "y": 20,
        "w": 38,
        "h": 48,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-s5-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC:</h3><div style='font-size: 30px; color: #00f3ff; margin-top: 25px;'>👥 4 Nhóm chuyên gia</div>",
        "x": 52,
        "y": 20,
        "w": 38,
        "h": 48,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      }
    ]
  },
  {
    "id": "T2-S5-ACT-03",
    "stage": "GĐ5 — DỰ ĐOÁN PHẢN BIỆN",
    "title": "Hướng dẫn thực hiện",
    "type": "activity-howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s5-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s5-a3-steps",
        "type": "box",
        "content": "<div style=\"font-size: 20pt; display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;\"><div style=\"padding: 15px; border-top: 4px solid #ff66b2; background: rgba(255,102,178,0.03); border-radius: 6px;\"><strong style=\"color: #ff66b2; display: block; margin-bottom: 8px;\">BƯỚC 1:</strong> Thảo luận dự đoán các câu hỏi các nhóm khác có thể đặt ra.</div><div style=\"padding: 15px; border-top: 4px solid #ffd633; background: rgba(255,214,51,0.03); border-radius: 6px;\"><strong style=\"color: #ffd633; display: block; margin-bottom: 8px;\">BƯỚC 2:</strong> Thiết lập câu trả lời đáp trả rõ ràng, chặt chẽ để bảo vệ luận điểm của đội mình.</div></div>",
        "x": 10,
        "y": 20,
        "w": 80,
        "h": 52,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.02)",
        "border": "1px solid rgba(255,255,255,0.1)"
      }
    ]
  },
  {
    "id": "T2-S5-ACT-04",
    "stage": "GĐ5 — DỰ ĐOÁN PHẢN BIỆN",
    "title": "Nhiệm vụ: Lập kịch bản phản biện",
    "type": "activity-workspace",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "x": 5,
        "fontSize": "28px",
        "id": "t2-s5-a4-title",
        "type": "heading",
        "color": "#ffd633",
        "align": "center",
        "content": "LẬP KỊCH BẢN PHẢN BIỆN",
        "y": 5,
        "w": 90,
        "h": 8
      },
      {
        "x": 10,
        "fontSize": "16pt",
        "id": "t2-s5-a4-frame-1",
        "type": "box",
        "color": "#ffffff",
        "align": "left",
        "content": "<div style=\"height: 100%; box-sizing: border-box; display: flex; flex-direction: column;\"><strong style=\"color: #00f3ff; display: block; margin-bottom: 2px; font-size: 16pt;\">1. Nếu chúng ta nói:</strong><p style=\"margin: 0 0 6px 0; font-size: 14pt; color: #e2e8f0; line-height: 1.3;\">Ý chính của nhóm bảo vệ tầm quan trọng của thành phần mình phụ trách.</p><textarea placeholder=\"Nhập ý chính của nhóm...\" style=\"width: 100%; height: calc(100% - 42px); background: rgba(3, 8, 26, 0.65); border: 1px solid rgba(0, 243, 255, 0.45); border-radius: 4px; color: white; padding: 6px; font-size: 15pt; outline: none; resize: none; font-family: sans-serif; box-sizing: border-box;\"></textarea></div>",
        "y": 15,
        "w": 80,
        "border": "1px solid rgba(0, 243, 255, 0.2)",
        "h": 23.1,
        "bg": "rgba(0, 243, 255, 0.05)"
      },
      {
        "x": 9.9,
        "fontSize": "16pt",
        "id": "t2-s5-a4-frame-2",
        "type": "box",
        "color": "#ffffff",
        "align": "left",
        "content": "<div style=\"height: 100%; box-sizing: border-box; display: flex; flex-direction: column;\"><strong style=\"color: #ff4d4d; display: block; margin-bottom: 2px; font-size: 16pt;\">2. Đội khác sẽ phản đối điều gì?</strong><p style=\"margin: 0 0 6px 0; font-size: 14pt; color: #e2e8f0; line-height: 1.3;\">Câu hỏi hoặc lập luận chống lại từ đối thủ.</p><textarea placeholder=\"Nhập câu hỏi phản đối dự kiến...\" style=\"width: 100%; height: calc(100% - 42px); background: rgba(3, 8, 26, 0.65); border: 1px solid rgba(255, 77, 77, 0.45); border-radius: 4px; color: white; padding: 6px; font-size: 15pt; outline: none; resize: none; font-family: sans-serif; box-sizing: border-box;\"></textarea></div>",
        "y": 43.3,
        "w": 80,
        "border": "1px solid rgba(255, 77, 77, 0.2)",
        "h": 23.9,
        "bg": "rgba(255, 77, 77, 0.05)"
      },
      {
        "x": 9.9,
        "fontSize": "16pt",
        "id": "t2-s5-a4-frame-3",
        "type": "box",
        "color": "#ffffff",
        "align": "left",
        "content": "<div style=\"height: 100%; box-sizing: border-box; display: flex; flex-direction: column;\"><strong style=\"color: #2eb82e; display: block; margin-bottom: 2px; font-size: 16pt;\">3. Chúng ta trả lời thế nào?</strong><p style=\"margin: 0 0 6px 0; font-size: 14pt; color: #e2e8f0; line-height: 1.3;\">Lập luận để phản biện câu hỏi của đối thủ.</p><textarea placeholder=\"Nhập câu trả lời phản biện của đội em...\" style=\"width: 100%; height: calc(100% - 42px); background: rgba(3, 8, 26, 0.65); border: 1px solid rgba(46, 184, 46, 0.45); border-radius: 4px; color: white; padding: 6px; font-size: 15pt; outline: none; resize: none; font-family: sans-serif; box-sizing: border-box;\"></textarea></div>",
        "y": 72.4,
        "w": 80,
        "border": "1px solid rgba(46, 184, 46, 0.2)",
        "h": 23.4,
        "bg": "rgba(46, 184, 46, 0.05)"
      }
    ]
  },
  {
    "id": "T2-S5-ACT-06",
    "stage": "GĐ5 — DỰ ĐOÁN PHẢN BIỆN",
    "title": "Chuyển tiếp",
    "type": "activity-transition",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s5-a6-header",
        "type": "subheading",
        "content": "CHUYỂN TIẾP NHIỆM VỤ",
        "x": 10,
        "y": 10,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s5-a6-left",
        "type": "box",
        "content": "<div style='font-size: 16px; color: #a0aec0;'>Chúng ta vừa hoàn thành:</div><div style='font-size: 20px; color: #00f3ff; font-weight: bold; margin-top: 10px;'>🛡️ Xây dựng các kịch bản phản biện, củng cố vững chắc lập luận của đội.</div>",
        "x": 10,
        "y": 25,
        "w": 80,
        "h": 15.8,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "t2-s5-a6-right",
        "type": "box",
        "content": "<div style='font-size: 16px; color: #a0aec0;'>Thử thách tiếp theo:</div><div style='font-size: 20px; color: #ffd633; font-weight: bold; margin-top: 10px;'>📂 Làm thế nào để đóng gói toàn bộ chứng cứ và kịch bản thành một Hồ sơ chiến lược hoàn chỉnh?</div>",
        "x": 10,
        "y": 44.7,
        "w": 80,
        "h": 20.7,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 214, 51, 0.05)",
        "border": "1px solid rgba(255, 214, 51, 0.2)"
      },
      {
        "id": "t2-s5-a6-icon",
        "type": "visual",
        "content": "stage-transition-arrow",
        "x": 40.7,
        "y": 69.2,
        "w": 19.5,
        "h": 24.8,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S6-Intro",
    "stage": "GĐ6 — HOÀN THIỆN HỒ SƠ",
    "title": "Giai đoạn 6: Hoàn thiện hồ sơ tranh biện",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s6-num",
        "type": "subheading",
        "content": "Giai đoạn 6",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s6-title",
        "type": "heading",
        "content": "HOÀN THIỆN HỒ SƠ TRANH BIỆN",
        "x": 7.1,
        "y": 27.1,
        "w": 85.3,
        "h": 12,
        "fontSize": "48px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s6-icon",
        "type": "visual",
        "content": "project-folder-compressed",
        "x": 36.4,
        "y": 45.1,
        "w": 30.4,
        "h": 42.9,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S6-ACT-01",
    "stage": "GĐ6 — HOÀN THIỆN HỒ SƠ",
    "title": "Hoạt động: Đóng gói hồ sơ chuyên gia",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s6-a1-title",
        "type": "heading",
        "content": "HOẠT ĐỘNG: ĐÓNG GÓI HỒ SƠ CHUYÊN GIA",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s6-a1-info",
        "type": "box",
        "content": "<div style=\"color: rgb(0, 255, 204); font-size: 20px; margin-bottom: 12px;\"><b>📁&nbsp;</b><span style=\"background-color: rgba(0, 243, 255, 0.02); font-size: 23px; text-align: center; color: rgb(255, 255, 255);\">Đóng gói và trình bày hồ sơ tranh biện của nhóm lên Poster một cách trực quan, sẵn sàng tranh luận trước lớp.</span></div>",
        "x": 10.1,
        "y": 38.3,
        "w": 45,
        "h": 29.1,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-s6-a1-visual",
        "type": "visual",
        "content": "project-folder-compressed",
        "x": 58,
        "y": 20,
        "w": 32,
        "h": 65,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S6-ACT-02",
    "stage": "GĐ6 — HOÀN THIỆN HỒ SƠ",
    "title": "Chuẩn bị dụng cụ & Hình thức",
    "type": "activity-prep",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s6-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "t2-s6-a2-tools",
        "type": "box",
        "content": "<h3>DỤNG CỤ:</h3><div style=\"font-size: 26px; color: #ffd633; margin-top: 20px;\">📄 Giấy A4<br>🖍️ Bút màu<br><br></div>",
        "x": 10,
        "y": 20,
        "w": 38,
        "h": 48,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-s6-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC:</h3><div style='font-size: 30px; color: #00f3ff; margin-top: 25px;'>👥 4 Nhóm chuyên gia</div>",
        "x": 52,
        "y": 20,
        "w": 38,
        "h": 48,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      }
    ]
  },
  {
    "id": "T2-S6-ACT-03",
    "stage": "GĐ6 — HOÀN THIỆN HỒ SƠ",
    "title": "Hướng dẫn thực hiện",
    "type": "activity-howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s6-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s6-a3-steps",
        "type": "box",
        "content": "<div style=\"font-size: 20pt; display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;\"><div style=\"padding: 15px; border-top: 4px solid #ff66b2; background: rgba(255,102,178,0.03); border-radius: 6px;\"><strong style=\"color: #ff66b2; display: block; margin-bottom: 8px;\">BƯỚC 1:</strong> Thu thập các sản phẩm đã hoàn thành từ các nhiệm vụ trước.</div><div style=\"padding: 15px; border-top: 4px solid #ffd633; background: rgba(255,214,51,0.03); border-radius: 6px;\"><strong style=\"color: #ffd633; display: block; margin-bottom: 8px;\">BƯỚC 2:</strong> Thiết kế \"Hồ sơ chiến lược bảo vệ thành phần câu lệnh AI\".</div><div style=\"padding: 15px; border-top: 4px solid #2eb82e; background: rgba(46,184,46,0.03); border-radius: 6px;\"><strong style=\"color: #2eb82e; display: block; margin-bottom: 8px;\">BƯỚC 3:</strong> Hoàn thành và trưng bày sản phẩm tại khu vực nhóm.</div></div>",
        "x": 10,
        "y": 16,
        "w": 80,
        "h": 60,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.02)",
        "border": "1px solid rgba(255,255,255,0.1)"
      }
    ]
  },
  {
    "id": "T2-S6-ACT-04",
    "stage": "GĐ6 — HOÀN THIỆN HỒ SƠ",
    "title": "Nhiệm vụ: Thiết kế Poster",
    "type": "activity-workspace",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s6-a4-poster",
        "type": "box",
        "content": "<div style=\"font-size: 16px; display: flex; gap: 20px; align-items: stretch; height: 100%;\"><div style=\"flex: 2; display: flex; flex-direction: column; justify-content: center; gap: 12px; padding-right: 10px;\"><div style=\"color: #00f3ff; font-size: 20pt; font-weight: bold; margin-bottom: 5px;\">YÊU CẦU TRÌNH BÀY HỒ SƠ CHIẾN LƯỢC</div><p style=\"margin: 0; font-size: 14pt; color: #e2e8f0; line-height: 1.5;\"><br></p><div style=\"font-size: 13pt; color: #ffbd59; border-left: 3px solid #ffbd59; padding-left: 10px; line-height: 1.4; margin-top: 10px;\">💡 <strong>Yêu cầu:</strong> Trình bày trực quan, chữ viết to rõ, bố cục khoa học</div></div><div style=\"flex: 3; background: rgba(255, 255, 255, 0.05); border: 2px dashed rgba(0, 243, 255, 0.4); border-radius: 8px; padding: 15px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 8px 24px rgba(0,0,0,0.3); background-image: radial-gradient(rgba(0, 243, 255, 0.03) 1px, transparent 1px); background-size: 16px 16px;\"><div style=\"background: rgba(0, 243, 255, 0.15); border: 1px solid #00f3ff; padding: 8px; text-align: center; border-radius: 4px; margin-bottom: 8px;\"><strong style=\"font-size: 15pt; color: #00f3ff; display: block; margin-top: 4px;\">🎯 TÊN THÀNH PHẦN CỦA ĐỘI</strong></div><div style=\"display: flex; flex-direction: column; gap: 8px; flex: 1; justify-content: center;\"><div style=\"background: rgba(255, 102, 178, 0.08); border-left: 4px solid #ff66b2; padding: 8px; border-radius: 0 4px 4px 0;\"><strong style=\"color: #ff66b2; font-size: 13pt; display: block;\">1. LUẬN ĐIỂM CHÍNH (Assertion)</strong><span style=\"font-size: 12pt; color: #e2e8f0; margin-top: 2px; display: block;\">Khẳng định tầm quan trọng của thành phần đối với câu lệnh AI.</span></div><div style=\"background: rgba(255, 214, 51, 0.08); border-left: 4px solid #ffd633; padding: 8px; border-radius: 0 4px 4px 0;\"><strong style=\"color: #ffd633; font-size: 13pt; display: block;\">2. LÝ DO (Reasoning)</strong><span style=\"font-size: 12pt; color: #e2e8f0; margin-top: 2px; display: block;\">Giải thích cơ chế logic tại sao AI cần thông tin này để hiểu yêu cầu.</span></div><div style=\"background: rgba(46, 184, 46, 0.08); border-left: 4px solid #2eb82e; padding: 8px; border-radius: 0 4px 4px 0;\"><strong style=\"color: #2eb82e; font-size: 13pt; display: block;\">3. VÍ DỤ / BẰNG CHỨNG (Evidence)</strong><span style=\"font-size: 12pt; color: #e2e8f0; margin-top: 2px; display: block;\">Trích dẫn từ \"Dữ liệu lỗi\" cụ thể để chứng minh hậu quả khi thiếu.</span></div></div></div></div>",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 79.4,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.03)",
        "border": "1px solid rgba(255,255,255,0.1)"
      }
    ]
  },
  {
    "id": "T2-S6-ACT-06",
    "stage": "GĐ6 — HOÀN THIỆN HỒ SƠ",
    "title": "Chuyển tiếp",
    "type": "activity-transition",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s6-a6-header",
        "type": "subheading",
        "content": "CHUYỂN TIẾP NHIỆM VỤ",
        "x": 10,
        "y": 10,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s6-a6-left",
        "type": "box",
        "content": "<div style='font-size: 16px; color: #a0aec0;'>Chúng ta vừa hoàn thành:</div><div style='font-size: 20px; color: #00f3ff; font-weight: bold; margin-top: 10px;'>📂 Thiết kế thành công Poster hồ sơ lập luận bảo vệ cấu trúc câu lệnh AI.</div>",
        "x": 10,
        "y": 25,
        "w": 80,
        "h": 15.6,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "t2-s6-a6-right",
        "type": "box",
        "content": "<div style='font-size: 16px; color: #a0aec0;'>Thử thách tiếp theo:</div><div style='font-size: 20px; color: #ffd633; font-weight: bold; margin-top: 10px;'>📓 Sau hành trình bảo vệ và phản biện này, các chuyên gia rút ra bài học cá nhân nào trong nhật ký?</div>",
        "x": 9.8,
        "y": 43.4,
        "w": 80,
        "h": 20,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 214, 51, 0.05)",
        "border": "1px solid rgba(255, 214, 51, 0.2)"
      },
      {
        "id": "t2-s6-a6-icon",
        "type": "visual",
        "content": "stage-transition-arrow",
        "x": 38.3,
        "y": 69.2,
        "w": 22.5,
        "h": 26.6,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S7-Intro",
    "stage": "GĐ7 — NHẬT KÝ CHUYÊN GIA",
    "title": "Giai đoạn 7: Nhật ký chuyên gia",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s7-num",
        "type": "subheading",
        "content": "Giai đoạn 7",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s7-title",
        "type": "heading",
        "content": "NHẬT KÝ CHUYÊN GIA",
        "x": 10,
        "y": 26,
        "w": 80,
        "h": 12,
        "fontSize": "48px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s7-icon",
        "type": "visual",
        "content": "digital-diary-illustration",
        "x": 38.9,
        "y": 47.7,
        "w": 22.6,
        "h": 40.3,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S7-ACT-01",
    "stage": "GĐ7 — NHẬT KÝ CHUYÊN GIA",
    "title": "Hoạt động: Nhật ký Chuyên gia AI",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s7-a1-title",
        "type": "heading",
        "content": "HOẠT ĐỘNG: NHẬT KÝ CHUYÊN GIA AI",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s7-a1-text",
        "type": "box",
        "content": "<div style=\"color: rgb(0, 255, 204); font-size: 20px; margin-bottom: 12px;\"><b>📓 </b><span style=\"background-color: rgba(0, 243, 255, 0.02); font-size: 23px; text-align: center; color: rgb(255, 255, 255);\">Suy ngẫm cá nhân, tự ghi chép lại những điểm đắt giá nhất đã thu hoạch được.</span></div>",
        "x": 10,
        "y": 41.2,
        "w": 50,
        "h": 21.5,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-s7-a1-visual",
        "type": "visual",
        "content": "digital-diary-illustration",
        "x": 63,
        "y": 20,
        "w": 27,
        "h": 68,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S7-ACT-02",
    "stage": "GĐ7 — NHẬT KÝ CHUYÊN GIA",
    "title": "Chuẩn bị dụng cụ & Hình thức",
    "type": "activity-prep",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s7-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "t2-s7-a2-tools",
        "type": "box",
        "content": "<h3>DỤNG CỤ:</h3><div style='font-size: 28px; color: #ffd633; margin-top: 20px;'>📓 Phiếu nhật ký<br>✏️ Bút viết</div>",
        "x": 10,
        "y": 20,
        "w": 38,
        "h": 48,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-s7-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC:</h3><div style=\"font-size: 32px; color: #00f3ff; margin-top: 20px;\">👤 Cá nhân</div>",
        "x": 52,
        "y": 20,
        "w": 38,
        "h": 48,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      }
    ]
  },
  {
    "id": "T2-S7-ACT-04",
    "stage": "GĐ7 — NHẬT KÝ CHUYÊN GIA",
    "title": "Nhiệm vụ: Hoàn thành nhật ký",
    "type": "activity-workspace",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s7-a4-title",
        "type": "heading",
        "content": "NHIỆM VỤ: GHI NHẬT KÝ CÁ NHÂN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#ffd633",
        "align": "center"
      },
      {
        "id": "t2-s7-a4-quest",
        "type": "box",
        "content": "<div style=\"color: #00f3ff; font-size: 20px; font-weight: bold; margin-bottom: 15px;\">✍️ HOÀN THÀNH PHIẾU NHẬT KÝ CÁ NHÂN:</div><div style=\"font-size: 24px; font-style: italic; line-height: 1.6; color: #ffbd59; padding: 20px; border-left: 5px solid #ffbd59; background: rgba(255, 189, 89, 0.03);\">\"Điều em hiểu rõ hơn sau khi chuẩn bị tranh biện là…\"</div><p style=\"margin-top: 20px; font-size: 16px; opacity: 0.8;\"><br></p>",
        "x": 9.6,
        "y": 25.2,
        "w": 50,
        "h": 44.9,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.03)",
        "border": "1px solid rgba(255,255,255,0.1)"
      },
      {
        "id": "t2-s7-a4-visual",
        "type": "visual",
        "content": "icon-personal-notebook",
        "x": 65.4,
        "y": 22.5,
        "w": 27,
        "h": 50,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S7-ACT-06",
    "stage": "GĐ7 — NHẬT KÝ CHUYÊN GIA",
    "title": "Chuyển tiếp",
    "type": "activity-transition",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s7-a6-header",
        "type": "subheading",
        "content": "CHUYỂN TIẾP NHIỆM VỤ",
        "x": 10,
        "y": 10,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s7-a6-left",
        "type": "box",
        "content": "<div style='font-size: 16px; color: #a0aec0;'>Chúng ta vừa hoàn thành:</div><div style='font-size: 20px; color: #00f3ff; font-weight: bold; margin-top: 10px;'>📓 Phản chiếu suy ngẫm cá nhân trong phiếu Nhật ký chuyên gia AI.</div>",
        "x": 10,
        "y": 25,
        "w": 80,
        "h": 15.5,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "t2-s7-a6-right",
        "type": "box",
        "content": "<div style='font-size: 16px; color: #a0aec0;'>Thử thách tiếp theo:</div><div style='font-size: 20px; color: #ffd633; font-weight: bold; margin-top: 10px;'>⚙️ Làm sao để vận hành hệ thống này vào thói quen hàng ngày mà không bỏ sót bất kỳ thành phần nào?</div>",
        "x": 9.9,
        "y": 43.6,
        "w": 80,
        "h": 20.2,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 214, 51, 0.05)",
        "border": "1px solid rgba(255, 214, 51, 0.2)"
      },
      {
        "id": "t2-s7-a6-icon",
        "type": "visual",
        "content": "stage-transition-arrow",
        "x": 39.3,
        "y": 68.4,
        "w": 21.5,
        "h": 25.6,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S8-Intro",
    "stage": "GĐ8 — VẬN HÀNH HỆ THỐNG",
    "title": "Giai đoạn 8: Vận hành hệ thống",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "t2-s8-num",
        "type": "subheading",
        "content": "Giai đoạn 8",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 8,
        "fontSize": "24px",
        "color": "#8ab4f8",
        "align": "center"
      },
      {
        "id": "t2-s8-title",
        "type": "heading",
        "content": "VẬN HÀNH HỆ THỐNG",
        "x": 10,
        "y": 26,
        "w": 80,
        "h": 12,
        "fontSize": "48px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s8-icon",
        "type": "visual",
        "content": "system-operation-check",
        "x": 36.2,
        "y": 47.5,
        "w": 28.4,
        "h": 39.4,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S8-ACT-01",
    "stage": "GĐ8 — VẬN HÀNH HỆ THỐNG",
    "title": "Hoạt động: QUAN SÁT THÓI QUEN",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "t2-s8-a1-title",
        "type": "heading",
        "content": "HOẠT ĐỘNG: QUAN SÁT THÓI QUEN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-s8-a1-text",
        "type": "box",
        "content": "<div style=\"color: rgb(0, 255, 204); font-size: 20px; margin-bottom: 12px;\"><b>🔍 </b><span style=\"background-color: rgba(0, 243, 255, 0.02); font-size: 23px; text-align: center; color: rgb(255, 255, 255);\">Quan sát hành vi sử dụng AI vào thực tiễn trong học tập.</span></div>",
        "x": 10,
        "y": 39.3,
        "w": 45,
        "h": 25.5,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "t2-s8-a1-visual",
        "type": "visual",
        "content": "system-operation-check",
        "x": 58,
        "y": 20,
        "w": 32,
        "h": 65,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-S8-ACT-04",
    "stage": "GĐ8 — VẬN HÀNH HỆ THỐNG",
    "title": "Nhiệm vụ: Quan sát trong tuần",
    "type": "activity-workspace",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "t2-s8-a4-title",
        "type": "heading",
        "content": "NHIỆM VỤ: QUAN SÁT THÓI QUEN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#ffd633",
        "align": "center"
      },
      {
        "id": "t2-s8-a4-survey",
        "type": "box",
        "content": "<div style='color: #00f3ff; font-size: 20px; font-weight: bold; margin-bottom: 15px;'>📝 ĐỀ BÀI QUAN SÁT:</div><p style='font-size: 22px; line-height: 1.6;'>Trong tuần tới, hãy chú ý quan sát thói quen gõ câu lệnh AI của em:</p><div style='font-size: 24px; font-style: italic; color: #ffbd59; margin-top: 20px; padding-left: 20px; border-left: 4px solid #ffbd59;'>\"Khi đặt câu lệnh cho AI, em thường quên hoặc chưa chú ý đến thành phần nào nhất?\"</div>",
        "x": 10,
        "y": 18,
        "w": 50,
        "h": 72,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,214,51,0.03)",
        "border": "1px solid rgba(255,214,51,0.2)"
      },
      {
        "id": "t2-s8-a4-visual",
        "type": "visual",
        "content": "action-checklist-board",
        "x": 63,
        "y": 18,
        "w": 27,
        "h": 72,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "T2-END-01",
    "stage": "TỔNG KẾT BÀI HỌC",
    "title": "Bài học rút ra (Key Takeaways)",
    "type": "end-lesson",
    "bgStyle": "welcome-bg",
    "elements": [
      {
        "id": "t2-e1-title",
        "type": "heading",
        "content": "BÀI HỌC RÚT RA HÔM NAY",
        "x": 4.9,
        "y": 2.7,
        "w": 90,
        "h": 8,
        "fontSize": "32px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "t2-e1-box",
        "type": "box",
        "content": "<div style=\"font-size: 22pt; display: flex; flex-direction: column; gap: 20px; justify-content: center; height: 100%;\"><div style=\"padding: 16px 20px; border: 1px solid rgba(0, 243, 255, 0.25); background: rgba(0, 243, 255, 0.05); border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 243, 255, 0.05);\">🤖 <strong style=\"color: #00f3ff; margin-right: 8px;\">AI là công cụ hỗ trợ:</strong> AI giúp xử lý thông tin dựa trên câu lệnh của người dùng, không thể tự hiểu suy nghĩ của con người.</div><div style=\"padding: 16px 20px; border: 1px solid rgba(0, 255, 204, 0.25); background: rgba(0, 255, 204, 0.05); border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 255, 204, 0.05);\">🗣️ <strong style=\"color: #00ffcc; margin-right: 8px;\">Kết quả phụ thuộc câu lệnh:</strong> Câu lệnh rõ ràng và chi tiết quyết định sự chính xác của phản hồi.</div><div style=\"padding: 16px 20px; border: 1px solid rgba(255, 214, 51, 0.25); background: rgba(255, 214, 51, 0.05); border-radius: 8px; box-shadow: 0 4px 15px rgba(255, 214, 51, 0.05);\">⚙️ <strong style=\"color: #ffd633; margin-right: 8px;\">Câu lệnh 4 thành phần:</strong> AI không thể cho ra kết quả tốt nhất nếu thiếu đi một trong 4 thành phần cơ bản.</div></div>",
        "x": 9.9,
        "y": 12.4,
        "w": 80,
        "h": 85.2,
        "fontSize": "22pt",
        "color": "#ffffff",
        "align": "left"
      }
    ]
  },
  {
    "id": "T2-END-02",
    "stage": "TỔNG KẾT BÀI HỌC",
    "title": "Nhìn lại câu hỏi lớn (Big Question Revisit)",
    "type": "end-lesson",
    "bgStyle": "welcome-bg",
    "elements": [
      {
        "id": "t2-e2-title",
        "type": "heading",
        "content": "NHÌN LẠI CÂU HỎI LỚN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "32px",
        "color": "#ffbd59",
        "align": "center"
      },
      {
        "id": "t2-e2-question",
        "type": "box",
        "content": "<strong><span style=\"font-size: calc(20px * var(--font-boost, 1.25) * var(--slide-scale, 1));\">Tại sao AI không cho ra kết quả tốt nhất nếu thiếu một trong các thành phần của câu lệnh?</span></strong>",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 16.9,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "t2-e2-answer",
        "type": "box",
        "content": "<h3>CÂU TRẢ LỜI CỦA CHUYÊN GIA:</h3><p style=\"font-size: 16pt; margin-bottom: 15px; color: #ffffff; opacity: 0.9;\">Mỗi thành phần đóng vai trò riêng giúp AI hiểu và phản hồi chính xác. Khi thiếu đi:</p><div style=\"display: flex; justify-content: space-between; align-items: stretch; gap: 15px; height: 75%;\"><div style=\"flex: 1; display: flex; flex-direction: column; justify-content: flex-start; background: rgba(255,102,178,0.03); border: 1px solid rgba(255,102,178,0.2); border-radius: 8px; padding: 12px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.15);\"><div style=\"width: 36px; height: 36px; margin: 0 auto 10px auto; border-radius: 50%; background: rgba(255,102,178,0.1); border: 2px solid #ff66b2; display: flex; justify-content: center; align-items: center; font-size: 14px; color: #ff66b2; font-weight: bold;\">1</div><div style=\"font-weight: bold; color: #ff66b2; font-size: 14pt; margin-bottom: 8px;\">Thiếu \"AI là ai?\"</div><div style=\"font-size: 12pt; line-height: 1.4; color: #ffffff; opacity: 0.9;\">Câu trả lời thiếu góc nhìn, tông giọng&nbsp;</div><div style=\"font-size: 12pt; line-height: 1.4; color: #ffffff; opacity: 0.9;\">phù hợp.</div></div><div style=\"flex: 1; display: flex; flex-direction: column; justify-content: flex-start; background: rgba(255,214,51,0.03); border: 1px solid rgba(255,214,51,0.2); border-radius: 8px; padding: 12px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.15);\"><div style=\"width: 36px; height: 36px; margin: 0 auto 10px auto; border-radius: 50%; background: rgba(255,214,51,0.1); border: 2px solid #ffd633; display: flex; justify-content: center; align-items: center; font-size: 14px; color: #ffd633; font-weight: bold;\">2</div><div style=\"font-weight: bold; color: #ffd633; font-size: 14pt; margin-bottom: 8px;\">Thiếu \"Làm gì?\"</div><div style=\"font-size: 12pt; line-height: 1.4; color: #ffffff; opacity: 0.9;\">AI không rõ nhiệm vụ hoặc hành động cần thực hiện.</div></div><div style=\"flex: 1; display: flex; flex-direction: column; justify-content: flex-start; background: rgba(46,184,46,0.03); border: 1px solid rgba(46,184,46,0.2); border-radius: 8px; padding: 12px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.15);\"><div style=\"width: 36px; height: 36px; margin: 0 auto 10px auto; border-radius: 50%; background: rgba(46,184,46,0.1); border: 2px solid #2eb82e; display: flex; justify-content: center; align-items: center; font-size: 14px; color: #2eb82e; font-weight: bold;\">3</div><div style=\"font-weight: bold; color: #2eb82e; font-size: 14pt; margin-bottom: 8px;\">Thiếu \"Cho ai?\"</div><div style=\"font-size: 12pt; line-height: 1.4; color: #ffffff; opacity: 0.9;\">Nội dung quá khó hoặc quá dễ, không hợp đối tượng.</div></div><div style=\"flex: 1; display: flex; flex-direction: column; justify-content: flex-start; background: rgba(0,243,255,0.03); border: 1px solid rgba(0,243,255,0.2); border-radius: 8px; padding: 12px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.15);\"><div style=\"width: 36px; height: 36px; margin: 0 auto 10px auto; border-radius: 50%; background: rgba(0,243,255,0.1); border: 2px solid #00f3ff; display: flex; justify-content: center; align-items: center; font-size: 14px; color: #00f3ff; font-weight: bold;\">4</div><div style=\"font-weight: bold; color: #00f3ff; font-size: 14pt; margin-bottom: 8px;\">Thiếu \"Kết quả thế nào?\"</div><div style=\"font-size: 12pt; line-height: 1.4; color: #ffffff; opacity: 0.9;\">Kết quả đầu ra lộn xộn, dài dòng,&nbsp;</div><div style=\"font-size: 12pt; line-height: 1.4; color: #ffffff; opacity: 0.9;\">khó sử dụng.</div></div></div>",
        "x": 10,
        "y": 34.5,
        "w": 80,
        "h": 54.5,
        "fontSize": "16pt",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.08)",
        "border": "2px solid #00f3ff"
      },
      {
        "id": "t2-e2-footer",
        "type": "text",
        "content": "🎯 HỒ SƠ CHIẾN LƯỢC BẢO VỆ CÂU LỆNH AI HOÀN THÀNH XUẤT SẮC!",
        "x": 10.1,
        "y": 91,
        "w": 80,
        "h": 7.1,
        "fontSize": "18px",
        "color": "#00ffcc",
        "align": "center"
      }
    ]
  }
];