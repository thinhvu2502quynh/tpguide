---
title: "4. Create and run a Backup Job"
---

Chức năng: Gán Backup Policy cho máy được quản lý, điều khiển lịch chạy và theo dõi kết quả sao lưu trên Portal hoặc tại giao diện Veeam Agent.

## 4.1 - Create a Backup Job from the Portal {#cc-job-portal}

Chức năng: Quản lý tập trung job của nhiều máy, tái sử dụng policy và kiểm soát giới hạn băng thông mà không cần đăng nhập từng máy.

- Trong Backup Jobs, chọn máy rồi mở Settings. Cấu hình retry, thông báo, backup qua metered connection. Có thể tùy chỉnh Limit bandwidth consumption theo nhu cầu thực tế để tránh việc quá tải băng thông hệ thống sau đó chọn Apply.

![CloudConnect](/images/cloudconnect/cc2026/p034_1.png)

- Theo dõi danh sách Backup Jobs qua các cột Successful Jobs, Running Jobs, Backup Policy, UI Mode và Last Activity. Chọn đúng máy cần tạo job.

![CloudConnect](/images/cloudconnect/cc2026/p034_2.png)

- Chọn Create Job. Chọn Create a new job khi cần cấu hình với Backup policy mới hoàn toàn ( cấu hình tương tự ở bước cấu hình Backup policy); chọn Use a job template để dùng lại Backup Policy đã tạo và duy trì cấu hình chuẩn.

![CloudConnect](/images/cloudconnect/cc2026/p035_1.png)

- Nếu dùng template, chọn Backup Policy phù hợp với OS và vai trò máy rồi chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p036_1.png)

- Tại Summary, xác nhận template/policy đã chọn và chọn Finish để thêm job vào máy.

![CloudConnect](/images/cloudconnect/cc2026/p037_1.png)

- Trên máy client, mở Veeam Agent để xác nhận job đã nhận policy và đang chạy. Theo dõi phần trăm, dung lượng xử lý và cảnh báo Recovery Media; không tắt máy khi job đang ghi dữ liệu.

![CloudConnect](/images/cloudconnect/cc2026/p038_1.png)

## 4.2 - Create a Backup Job in Veeam Agent {#cc-job-agent}

Chức năng: Cho phép quản trị viên cấu hình job ngay trên máy trong trường hợp đặc biệt hoặc khi cần thao tác chi tiết; Portal phải cấp quyền Full Admin Access.

Quản trị cấu hình: Ưu tiên quản lý tập trung bằng Portal. Chỉ tạo/sửa job cục bộ khi đã thống nhất với người quản trị Portal để tránh policy bị ghi đè hoặc tạo lịch chạy trùng.

- Trên Portal vào Backup Jobs, chọn máy, mở Backup Agent UI và chọn Switch to Full Admin Access.

![CloudConnect](/images/cloudconnect/cc2026/p039_1.png)

- Trên máy cần cấu hình, tìm và mở Veeam Agent for Microsoft Windows.

![CloudConnect](/images/cloudconnect/cc2026/p039_2.png)

- Trong Veeam Agent, mở menu và chọn Add New Job để bắt đầu wizard.

![CloudConnect](/images/cloudconnect/cc2026/p040_1.png)

- Tại bước Name, đặt tên job theo quy ước, bổ sung mô tả và chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p041_1.jpg)

- Tại Backup Mode, chọn Entire computer, Volume level hoặc File level đúng nhu cầu.

![CloudConnect](/images/cloudconnect/cc2026/p042_1.jpg)

- Tại Destination, chọn Veeam Cloud Connect repository và chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p043_1.jpg)

- Tại Service Provider, nhập DNS/IP và port cloudconnect.tpcloud.vn:6180. Chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p044_1.jpg)

- Xác nhận chứng thực kết nối, nhập username/password Cloud Connect và chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p045_1.jpg)

- Chọn Cloud Repository được cấp, kiểm tra Free space/Capacity, đặt Retention policy và mở Advanced nếu cần cấu hình mã hóa, compression hoặc full backup.

![CloudConnect](/images/cloudconnect/cc2026/p046_1.jpg)

- Tại Backup Cache, bật cache và chọn vị trí/dung lượng chỉ khi cần duy trì backup lúc đích từ xa gián đoạn; mặc định nên để tắt.

![CloudConnect](/images/cloudconnect/cc2026/p047_1.jpg)

- Tại Guest Processing, bật Application-Aware Processing cho ứng dụng cần nhất quán; cấu hình tài khoản ứng dụng/indexing theo yêu cầu.

![CloudConnect](/images/cloudconnect/cc2026/p048_1.jpg)

- Tại Schedule, bật lịch tự động, chọn thời điểm/chu kỳ, retry và backup window. Chọn Apply/Next để tiếp tục.

![CloudConnect](/images/cloudconnect/cc2026/p049_1.jpg)

- Tại Summary, rà soát repository, retention, cache, guest processing và lịch. Bật Run the job when I click Finish nếu cần chạy ngay, sau đó chọn Finish.

![CloudConnect](/images/cloudconnect/cc2026/p050_1.jpg)

- Theo dõi cửa sổ Veeam Agent đến khi job hoàn tất. Ghi nhận tốc độ, dung lượng và lỗi nếu tiến trình dừng hoặc kéo dài bất thường.

![CloudConnect](/images/cloudconnect/cc2026/p051_1.png)
