---
title: "6. Configure and use reports"
---

Chức năng: Tạo báo cáo định kỳ về mức độ bảo vệ/RPO/SLA, lưu cấu hình và gửi kết quả đến email người nhận đã được khai báo trên Portal.

Điều kiện: Chọn đúng loại report cho tài nguyên cần theo dõi. Địa chỉ email của người nhận phải được cấu hình trong hồ sơ người dùng.

- Chọn Reports > Configurations, chọn New và chọn nhóm báo cáo phù hợp: Virtual Machines, Data Backup, Computers, Databases, Microsoft 365 Objects hoặc Cloud Networks.

![CloudConnect](/images/cloudconnect/cc2026/p093_1.png)

- Tại Name, nhập tên report và mô tả rõ phạm vi, sau đó chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p094_1.png)

- Tại Report Type, chọn RPO-based report để đánh giá theo RPO hoặc SLA-based report khi tenant có chính sách SLA/CDP tương ứng.

![CloudConnect](/images/cloudconnect/cc2026/p095_1.png)

- Tại Locations, chọn location cần đưa vào báo cáo và chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p096_1.png)

- Tại Parameters, đặt ngưỡng RPO, platform, job type và exclusion mask nếu cần. Chỉ loại trừ job đã được phê duyệt để tránh che khuất máy không đạt RPO.

![CloudConnect](/images/cloudconnect/cc2026/p097_1.png)

- Tại Schedule, bật Generate this report automatically, chọn Daily/Monthly, thời gian, ngày và múi giờ. Nhập biến/người nhận email theo cấu hình tổ chức (hình minh họa dùng %Company Owner%).

![CloudConnect](/images/cloudconnect/cc2026/p098_1.png)

- Trong hồ sơ người dùng và kiểm tra trường Email address trong User Info. Đây là email được phê duyệt để nhận mail.

![CloudConnect](/images/cloudconnect/cc2026/p099_1.png)

- Tại Summary, kiểm tra template, tên, locations, RPO, platform, job type, lịch và địa chỉ nhận; chọn Finish.

![CloudConnect](/images/cloudconnect/cc2026/p100_1.png)

- Chuyển sang All Reports để xem báo cáo đã sinh. Chọn report và dùng View để mở, Send để gửi lại hoặc Remove khi không còn nhu cầu.

![CloudConnect](/images/cloudconnect/cc2026/p100_2.png)
