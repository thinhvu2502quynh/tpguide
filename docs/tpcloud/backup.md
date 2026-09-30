---
title: "7. Backup trên Portal Cloud"
---

Quản lý dịch vụ sao lưu (backup) hệ thống với Veeam trên Portal Cloud.

- Để sử dụng tính năng backup trên Portal Cloud, khách hàng cần phải mua thêm gói dịch vụ backup riêng cho hệ thống của mình. Để cấu hình backup trên Portal Cloud ta thực hiện các bước sau:
- Trên Portal Cloud truy cập dịch vụ backup bằng cách nhấn vào More → Data Protection with Veeam.

![TPCLOUD Portal](/images/tpcloud/img_165.jpeg)

Giao diện Dashboard dịch vụ backup của TPCOMS.

![TPCLOUD Portal](/images/tpcloud/img_166.png)

Tạo job backup từ dịch vụ backup chọn tab Jobs → Create…

![TPCLOUD Portal](/images/tpcloud/img_167.png)

- Nhập tên job backup và điều chỉnh thời gian lưu trữ backup sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_168.png)

- Tại phần cấu hình Virtual Machines chọn Add sau đó chọn đối tượng cần backup (VM, vApp, ORGVDC) sau đó nhấn OK → NEXT.

![TPCLOUD Portal](/images/tpcloud/img_169.png)

- Tại phần Guest Processing nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_170.png)

- Tại phần Job Schedule tiến hành cấu hình lên lịch tự động backup và cấu hình số lần retry khi backup lỗi sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_171.png)

Phần Email Notifications tiến hành tích chọn Enable e-mail notifycations nhập thông tin Email nếu muốn nhận thông báo về trạng thái backup qua mail và tích chọn loại thông báo cần thiết sau đó nhấn Finish.

![TPCLOUD Portal](/images/tpcloud/img_172.png)

Job backup đã tạo.

![TPCLOUD Portal](/images/tpcloud/img_173.png)

- Để quản lý các bản backup vào tab VMs.

![TPCLOUD Portal](/images/tpcloud/img_174.png)

Về trang chủ tài liệu
