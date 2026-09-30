---
title: "6. Quản lý User và Monitor"
---

Quản lý user, theo dõi task và event trên Portal Cloud.

## 6.1 - Quản lý User {#quan-ly-user}

- Để thêm/xóa/sửa user đăng nhập sử dụng vCloud Portal, từ giao diện quản trị chọn menu Administration → Users.

![TPCLOUD Portal](/images/tpcloud/img_160.jpeg)

Để tạo user mới nhấn chọn NEW:

- Nhập tên và mật khẩu vào ô Username, Password và các thông tin cá nhân trong mục Contact Info.
- Chọn quyền trong mục Available Role. Thông thường chọn quyền cao nhất là: Organization Administrator.

![TPCLOUD Portal](/images/tpcloud/img_161.png)

User đã tạo.

![TPCLOUD Portal](/images/tpcloud/img_162.png)

## 6.2 - Quản lý Task {#quan-ly-task}

Task là danh sách các hành động hoặc yêu cầu mà người dùng đã thực hiện hoặc hệ thống đã khởi tạo. Mỗi tác vụ đại diện cho một quá trình cụ thể chẳng hạn như tạo máy ảo, cập nhật cấu hình mạng, hoặc di chuyển tài nguyên,... Để truy cập quản lý task trên portal cloud chọn Monitor → Tasks. Task cung cấp thông tin chi tiết về từng tác vụ, bao gồm:

Task: Mô tả loại tác vụ như tạo vApp, xóa máy ảo, cập nhật cấu hình,...

Status: Tình trạng của tác vụ, chẳng hạn như Running, Succeded, hoặc Failed.

Type: giúp phân loại tác vụ liên quan đến các loại tài nguyên khác nhau như: vm, gateway, vapp, network,...

Initiator: Người dùng hoặc tài khoản đã khởi tạo tác vụ.

Start time, Completion time: Ghi lại mốc thời gian khi tác vụ được khởi tạo và khi hoàn thành hoặc gặp lỗi.

![TPCLOUD Portal](/images/tpcloud/img_163.png)

## 6.3 - Quản lý Event {#quan-ly-event}

Event là các hoạt động hoặc thông báo liên quan đến hệ thống hoặc các tài nguyên trên Portal. Event cung cấp chi tiết về các sự kiện như:

Description: Cung cấp mô tả chi tiết về sự kiện đã xảy ra, bao gồm thông tin về người dùng và hành động thực hiện.

Status: Tình trạng của sự kiện, chẳng hạn như Running, Succeded, hoặc Failed.

Type: giúp phân loại hành động của sự kiện liên quan đến các loại tài nguyên khác nhau như: user, task, gateway,...

Target: đối tượng bị ảnh hưởng bởi hành động.

Owner: Người sở hữu hoặc tài khoản thực hiện hành động.

Occurred At: ghi lại thời điểm diễn ra sự kiện. Để truy cập quản lý Events trên portal cloud chọn Monitor → Events.

![TPCLOUD Portal](/images/tpcloud/img_164.png)
