---
title: "1. Hướng dẫn sử dụng Portal TPCLOUD"
---

Đăng nhập Portal và tạo OrgVDC Network: Isolated Network, Routed Network, cấu hình DHCP.

Portal TPCLOUD là cổng giao diện dùng để quản trị dịch vụ Cloud của TPCOMS, giúp thực hiện các thao tác cơ bản như cấu hình network, cấu hình tạo VM và quản lý VM, cũng như các tác vụ liên quan đến quản lý user, monitor hệ thống... Giao diện Portal nhiều tính năng mới và thân thiện với người dùng. Sơ đồ quy trình sử dụng Portal Cloud cơ bản:

![TPCLOUD Portal](/images/tpcloud/img_001.png)

## 1.1 - Đăng nhập {#dang-nhap}

Truy cập portal TPCLOUD theo đường dẫn và thông tin đăng nhập đã được TPCOMS cung cấp qua email. Đường dẫn truy cập có định dạng:

`https://console-01.tpcloud.vn/tenant/organization_name`

Với organization_name được thay đổi theo thông tin khách hàng. Mỗi Khách hàng sẽ được phân tách thành các chủ thể riêng biệt thường được gọi là Organization. Tài nguyên được tổ chức thành các trung tâm dữ liệu ảo (Virtual Data Center - VDC) riêng biệt cho từng khách hàng.

- Sau khi truy cập vào trang đăng nhập do TPCOMS cung cấp người dùng tiến hành nhập User name và Password đã được TPCOMS cung cấp qua email.

![TPCLOUD Portal](/images/tpcloud/img_002.jpeg)

- Sau khi đăng nhập thành công, từ màn hình quản trị chính người dùng có thể xem được các thông số tổng quát trong Datacenter ảo như: Site, vApp, VM, tài nguyên cấp phát, tài nguyên đã dùng,...

![TPCLOUD Portal](/images/tpcloud/img_003.png)

## 1.2 - OrgVDC Network {#orgvdc-network}

Network type hỗ trợ 2 kiểu kết nối:

- Isolated: dạng cô lập nội bộ giữa các VM, hoàn toàn không có kết nối ra bên ngoài.
- Routed: Kết nối với vFirewall/VLB, các VM sẽ truy cập có kiểm soát ra mạng bên ngoài thông qua NAT và Firewall rule.

### 1.2.1 - Isolated Network {#isolated-network}

Các bước tạo Isolated Network:

- Tại Portal TPCLOUD chọn Networking → Networks → NEW.

![TPCLOUD Portal](/images/tpcloud/img_004.png)

- Tại cửa sổ New Organization VDC Network mục Scope tích chọn Organization VDC cần tạo network sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_005.jpeg)

- Tại phần Network Type tích chọn type là Isolated sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_006.png)

- Tại phần General tiến hành nhập Name và Gateway CIDR sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_007.png)

- Tại phần Static IP Pools tiến hành nhập các range Static IP Pool nếu cần và nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_008.png)

- Tại phần DNS tiến hành nhập DNS sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_009.png)

- Tại phần Ready to Complete xem lại thông tin network vừa cấu hình sau đó nhấn FINISH để hoàn thành quá trình khởi tạo network.

![TPCLOUD Portal](/images/tpcloud/img_010.png)

- Sau khi tạo xong người dùng sẽ thấy một network mới được tạo ra trên bảng danh sách network.

![TPCLOUD Portal](/images/tpcloud/img_011.png)

### 1.2.2 - Routed Network {#routed-network}

Routed Network là network được tạo ra nhằm sử dụng cho các VM trong VDC hoặc VDC group. Chúng được quản lý thông quan Edge Gateway.

Edge Gateway đóng vai trò như một router ảo nhằm quản lý các network được gắn vào nó và đồng thời cung cấp các dịch vụ như Firewall, NAT, Routing, VPN, Load Balancer,…. Được TPCOMS cung cấp miễn phí đến người dùng. Các bước tạo Routed Network:

- Tại Portal TPCLOUD chọn Networking → Networks → NEW.

![TPCLOUD Portal](/images/tpcloud/img_012.png)

- Tại cửa sổ New Organization VDC Network mục Scope tích chọn Organization VDC cần tạo network sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_013.png)

- Tại phần Network Type tích chọn Type là Routed sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_014.png)

- Tại phần Edge Connection chọn Edge mà network này kết nối vào sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_015.png)

- Tại phần General nhập Name của network và Gateway CIDR sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_016.png)

- Tại phần Static IP Pools nhập range static IP Pool muốn cấu hình và nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_017.png)

- Tại phần DNS tiến hành cấu hình DNS và nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_018.png)

- Tại phần Ready to Complete tiến hành xem lại các thông tin đã cấu hình trước đó và nhấn FINISH để hoàn thành quá trình khởi tạo network.

![TPCLOUD Portal](/images/tpcloud/img_019.png)

- Sau khi hoàn thành tạo Routed Network trên danh sách network sẽ xuất hiện routed network vừa được tạo.

![TPCLOUD Portal](/images/tpcloud/img_020.png)

### 1.2.3 - Cấu hình DHCP {#cau-hinh-dhcp}

Để cấu hình DHCP ta thực hiện các bước sau:

- Tại trang quản lý network ta chọn network cần cấu hình DHCP.

![TPCLOUD Portal](/images/tpcloud/img_021.jpeg)

- Tiếp tục chọn mục DHCP → ACTIVE.

![TPCLOUD Portal](/images/tpcloud/img_022.png)

- Tại phần General Settings cấu hình DHCP Mode chọn Gateway sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_023.jpeg)

- Tại phần DHCP Pools nhấn add và nhập range IP pools sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_024.png)

- Tại phần DNS through DHCP nhập DNS Server sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_025.png)

Kiểm tra lại cấu hình sau đó nhấn FINISH để hoàn thành cấu hình DHCP.

![TPCLOUD Portal](/images/tpcloud/img_026.png)

DHCP đã cấu hình cho NETWORK-ROUTED.

![TPCLOUD Portal](/images/tpcloud/img_027.png)
