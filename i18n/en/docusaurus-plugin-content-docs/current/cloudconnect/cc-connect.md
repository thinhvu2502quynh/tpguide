---
title: "2. Connect servers and workstations to the Portal"
---

Chức năng: Đưa máy cần bảo vệ vào phạm vi quản lý của Portal. Có thể dùng Discovery Rule cho nhiều máy hoặc cài Management Agent trực tiếp cho một máy/nhóm nhỏ.

Lựa chọn phương án: Ưu tiên Discovery Rule khi mạng cho phép quản trị từ xa và cần triển khai đồng loạt. Dùng cài trực tiếp Management Agent khi máy nằm ngoài miền, bị chặn RPC/SMB hoặc chỉ có ít máy cần kết nối.

## 2.1 - Create a Discovery Rule {#cc-discovery}

Chức năng: Tự động quét dải mạng, xác định hệ điều hành và đưa các máy truy cập được vào danh sách Managed Computers để triển khai agent/policy.

Điều kiện: Tài khoản discovery cần quyền quản trị trên máy đích. Máy đích phải cho phép admin share, File and Printer Sharing và Remote Scheduled Tasks Management (RPC) qua firewall.

- Tại menu trái chọn Rules > chọn New và chọn Windows hoặc Linux đúng với hệ điều hành cần quét. Phần dưới đây minh họa rule cho Windows.

![CloudConnect](/images/cloudconnect/cc2026/p004_1.png)

- Tại bước Rule Name, nhập tên sau đó chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p004_2.png)

- Tại Locations, chọn location chứa Master Management Agent có khả năng truy cập dải mạng cần quét.

![CloudConnect](/images/cloudconnect/cc2026/p005_1.png)

- Tại Discovery Method, chọn Network-based discovery khi quét theo IP range. Có thể dùng Microsoft Active Directory discovery nếu quản trị theo domain/container hoặc Computers from CSV file khi đã có danh sách hostname chuẩn.

![CloudConnect](/images/cloudconnect/cc2026/p006_1.png)

- Tại Network Discovery, chọn Add, nhập tên dải mạng, địa chỉ From/To đúng subnet cần quét rồi chọn OK. Chỉ khai báo phạm vi cần thiết để giảm thời gian quét và số máy ngoài dự kiến.

![CloudConnect](/images/cloudconnect/cc2026/p007_1.png)

- Tại Access Account, chọn dùng thông tin xác thực đã cấu hình trên Master Management Agent hoặc nhập tài khoản quản trị riêng. Kiểm tra tài khoản có quyền local administrator trên các máy đích.

![CloudConnect](/images/cloudconnect/cc2026/p008_1.png)

- Tại Discovery Filters, chọn Edit nếu cần lọc theo OS, ứng dụng hoặc nền tảng. Bật Do not show inaccessible computers để danh sách chỉ hiển thị máy truy cập được.

![CloudConnect](/images/cloudconnect/cc2026/p009_1.png)

- Tại Email Notification, bật gửi thông báo nếu Portal đã được cấu hình mail server; thiết lập chu kỳ, địa chỉ nhận và tiêu đề.

![CloudConnect](/images/cloudconnect/cc2026/p010_1.png)

- Tại Backup Agent Deployment, nên chọn Discover remote computer without installing backup agent trong lần chạy đầu để kiểm tra phạm vi. Sau khi xác nhận danh sách, agent sẽ được cài ở bước riêng.

![CloudConnect](/images/cloudconnect/cc2026/p011_1.png)

- Tại Schedule, bật Run this rule automatically nếu cần quét định kỳ; chọn lịch và kiểm tra đúng múi giờ UTC+07:00 Bangkok, Hanoi, Jakarta. Nếu chỉ chạy một lần, giữ chế độ thủ công.

![CloudConnect](/images/cloudconnect/cc2026/p012_1.png)

- Tại Summary, rà soát company, location, IP range, access account và tùy chọn agent. Bật Launch the discovery rule when I click Finish rồi chọn Finish để chạy ngay.

![CloudConnect](/images/cloudconnect/cc2026/p013_1.png)

- Theo dõi rule trên danh sách Rules. Trạng thái Running cho biết Portal đang quét dải mạng; không tạo thêm rule trùng phạm vi trong thời gian này.

![CloudConnect](/images/cloudconnect/cc2026/p013_2.png)

- Khi hoàn tất, xác nhận trạng thái Success và đối chiếu các cột Total Computers, Online và Inaccessible. Nếu số lượng không đúng dự kiến, kiểm tra lại dải IP/quyền/firewall trước khi cài agent.

![CloudConnect](/images/cloudconnect/cc2026/p014_1.png)

- Chọn Managed Computers. Tại tab Discovered Computers, xác nhận hostname, Guest OS và Connection Status; chọn máy cần bảo vệ rồi chọn Install Backup Agent.

![CloudConnect](/images/cloudconnect/cc2026/p014_2.jpg)

- Mở Task Details để theo dõi từng tác vụ tải Management Agent, Backup Agent, upload và cài đặt.

![CloudConnect](/images/cloudconnect/cc2026/p015_1.jpg)

Tiêu chí hoàn tất: Rule được xem là đạt khi trạng thái Success, máy mục tiêu hiển thị Online, Management Agent Healthy/Up-to-date và không còn lỗi deployment cần xử lý.

## 2.2 - Install the Management Agent directly {#cc-mgmt-direct}

Chức năng: Kết nối một máy vào Portal bằng bộ cài cục bộ, phù hợp khi discovery từ xa không khả dụng hoặc cần chủ động cài theo từng máy.

- Trên Portal vào Managed Computers, chọn Download Management Agent và chọn đúng hệ điều hành Windows/Linux/Mac. Lưu bộ cài vào máy cần kết nối.

![CloudConnect](/images/cloudconnect/cc2026/p015_2.jpg)

- Mở thư mục Downloads, kiểm tra tệp Management Agent đã tải xong và chạy bộ cài bằng quyền Run as administrator.

![CloudConnect](/images/cloudconnect/cc2026/p016_1.png)

- Tại màn hình chào của InstallShield Wizard chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p017_1.jpg)

- Đọc thỏa thuận sử dụng, chọn I Accept để tiếp tục.

![CloudConnect](/images/cloudconnect/cc2026/p018_1.jpg)

- Tại Ready to Install, kiểm tra đường dẫn cài đặt và chọn Install. Cho phép Windows/UAC thực thi nếu được hỏi.

![CloudConnect](/images/cloudconnect/cc2026/p019_1.jpg)

- Khi xuất hiện InstallShield Wizard Completed, chọn Finish để đóng trình cài.

![CloudConnect](/images/cloudconnect/cc2026/p020_1.jpg)

- Từ Start Menu, tìm và mở Veeam Management Agent để kiểm tra kết nối sau cài đặt.

![CloudConnect](/images/cloudconnect/cc2026/p021_1.png)

- Trong Veeam Management Agent Settings, xác nhận Agent status: Connected, Cloud gateway đúng địa chỉ và port đúng thông số dịch vụ.

![CloudConnect](/images/cloudconnect/cc2026/p022_1.png)

- Quay lại Portal, làm mới Managed Computers và xác nhận máy hiển thị Online, Management Agent Healthy và phiên bản Up-to-date.

![CloudConnect](/images/cloudconnect/cc2026/p022_2.jpg)

## 2.3 - Install the Backup Agent and assign a policy {#cc-backup-agent-policy}

Chức năng: Cài thành phần thực hiện sao lưu trên máy đã có Management Agent và gán chính sách bảo vệ ban đầu từ Portal.

- Chọn máy trong Managed Computers và chọn Install Backup Agent. Chọn tài khoản quản trị từ discovery/Management Agent hoặc khai báo tài khoản mới; chọn Backup Policy phù hợp. Giữ Read-only UI access nếu muốn ngăn người dùng sửa cấu hình cục bộ, sau đó chọn Apply.

![CloudConnect](/images/cloudconnect/cc2026/p023_1.jpg)

- Theo dõi Task Details đến 100%. Kiểm tra các bước upload bộ cài, install, start agent và apply policy đều có dấu kiểm xanh; chọn Download Logs nếu có bước thất bại.

![CloudConnect](/images/cloudconnect/cc2026/p024_1.jpg)

## 2.4 - Install Veeam Agent on Linux and Windows {#cc-veeam-agent}

**Cài đặt Veeam Agent trên Linux**

- Download file repository về máy ở đường dẫn: Ubuntu: https://drive.google.com/file/d/1b710XGN0X_4PLpDW9ofGLsKtiqZgMUWH/view?usp=drive_link CentOS: https://drive.google.com/file/d/1j4dwZVauLV19wiWYvKgbT9edXzOZ-S36/view?usp=sharing
- Connect tới Veeam Repository: đứng trong đường dẫn chứa file repository vừa down ở Step 1 và chạy lệnh sau: Ubuntu: dpkg -i ./veeam-release* && apt-get update CentOS: rpm -ivh ./veeam-release* && yum check-update
- Cài đặt pakage Veeam agent.
- Đối với Ubuntu 16.04, 18.04, 20.04 chạy lệnh sau: apt-get install veeam
- Đối với Ubuntu 22.04, 22.10, 23.04 chạy lệnh sau: apt-get install blksnap veeam
- Đối với CentOS chạy lệnh sau: yum install veeam
- Khai báo thông tin ban đầu bằng lệnh: veeam
- Tick chọn các mục I accept… Sau đó Click [Accept]

![CloudConnect](/images/cloudconnect/agent/p3_1.png)

- Click [Next] để tiếp tục, bở qua bước create Recovery Media.
- Tick chọn Server và Click [Finish].
- Config Job Backup.
- Nhấn phím C để cấu hình job.

![CloudConnect](/images/cloudconnect/agent/p4_1.png)

![CloudConnect](/images/cloudconnect/agent/p4_2.png)

![CloudConnect](/images/cloudconnect/agent/p4_3.png)

- Đặt tên job sau đó Click Next.
- Chọn Entire machine sau đó Click Next
- Chọn Veeam Backup & Replication sau đó Click Next.

![CloudConnect](/images/cloudconnect/agent/p5_1.png)

![CloudConnect](/images/cloudconnect/agent/p5_2.png)

![CloudConnect](/images/cloudconnect/agent/p5_3.png)

Điền Address, Port, Login và Password của Veeam Server do TPCOMS cung cấp, sau đó chọn Next.

- Click Next để tiếp tục.
- Bỏ chọn Run the Job automatically sau đó Click Next.

![CloudConnect](/images/cloudconnect/agent/p6_1.png)

![CloudConnect](/images/cloudconnect/agent/p6_3.png)

- Click Start job now sau đó Click Finish để hoàn thành.

**Cài đặt Veeam Agent trên Windows**

- Download file cài đặt: https://drive.google.com/file/d/1jyq8PvN-UyZMlHqvIT76rjk8Yhbt3q7O/view?usp=drive_link
- Chạy file cài đặt vừa download về. Click Next sau đó Click I Accept

![CloudConnect](/images/cloudconnect/agent/p7_1.png)

![CloudConnect](/images/cloudconnect/agent/p7_2.png)

- Bỏ tick Run Veeam Recovery Media sau đó Click Finish.
- Khởi động Veeam Agent và tạo job backup. Các thông số cấu hình và Veeam Server tương tự hướng dẫn cho Linux ở trên

![CloudConnect](/images/cloudconnect/agent/p8_1.png)

![CloudConnect](/images/cloudconnect/agent/p8_2.png)

![CloudConnect](/images/cloudconnect/agent/p8_3.png)

![CloudConnect](/images/cloudconnect/agent/p8_4.png)
