---
title: "3. Create and manage a Backup Policy"
---

Chức năng: Xây dựng cấu hình sao lưu chuẩn có thể tái sử dụng cho nhiều máy, gồm phạm vi dữ liệu, repository, retention, hiệu năng, guest processing và lịch chạy.

- Chọn Configuration > Backup Policies, chọn New và chọn Windows, Linux hoặc Mac theo máy cần bảo vệ.

![CloudConnect](/images/cloudconnect/cc2026/p024_2.png)

- Nhập Backup Policy Name và mô tả thể hiện rõ mục đích/phạm vi, sau đó chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p025_1.png)

- Tại Operation Mode, chọn Server cho máy chủ/ứng dụng cần application-aware và lịch linh hoạt; chọn Workstation cho máy người dùng/laptop.

![CloudConnect](/images/cloudconnect/cc2026/p026_1.png)

- Tại Backup Mode, chọn Entire computer để phục hồi toàn máy, Volume level backup khi chỉ bảo vệ volume được chọn, hoặc File level backup cho tập tệp/thư mục.

![CloudConnect](/images/cloudconnect/cc2026/p027_1.png)

- Tại Destination, chọn Veeam Cloud Connect repository để lưu backup lên Cloud Repository do TPCOMS quản lý.

![CloudConnect](/images/cloudconnect/cc2026/p028_1.png)

- Tại Cloud Repository, đặt Retention policy theo yêu cầu. Mở Advanced Settings để điều chỉnh compression, storage optimization, full backup maintenance và encryption khi cần; chọn Apply để lưu.

![CloudConnect](/images/cloudconnect/cc2026/p029_1.png)

- Tại Backup Cache, chỉ bật cache khi cần duy trì lịch backup lúc Cloud Repository tạm thời mất kết nối; mặc định không chọn.

![CloudConnect](/images/cloudconnect/cc2026/p030_1.png)

- Tại Guest Processing, bật Application-aware processing cho máy chạy ứng dụng cần nhất quán (ví dụ SQL). Mở Applications để cấu hình tài khoản và cách xử lý transaction log; chỉ bật file system indexing khi có nhu cầu tìm kiếm. Với các máy thông thường mặc định không bật.

![CloudConnect](/images/cloudconnect/cc2026/p031_1.png)

- Tại Schedule, bật Run the job automatically, chọn thời gian và chu kỳ; cấu hình automatic retry và backup window nếu cần. Tránh trùng giờ cao điểm của nhiều máy.

![CloudConnect](/images/cloudconnect/cc2026/p032_1.png)

- Tại Summary, kiểm tra Operation mode, Backup mode, Destination, Retention, Compression, Cache, Guest Processing và Schedule; chọn Finish để tạo policy.

![CloudConnect](/images/cloudconnect/cc2026/p033_1.png)

Kiểm tra: Sau khi tạo, policy phải xuất hiện trong danh sách Backup Policies và có đúng loại OS/Operation Mode. Thử gán cho một máy pilot trước khi triển khai hàng loạt.
