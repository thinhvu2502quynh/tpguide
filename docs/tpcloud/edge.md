---
title: "4. Edge Gateway"
---

Cấu hình Firewall, NAT, IPSec VPN và Load Balancer trên Edge Gateway.

Edge Gateway đóng vai trò như một router ảo nhằm quản lý các network được gắn vào nó và đồng thời cung cấp các dịch vụ như Firewall, NAT, Routing, VPN, Load Balancer…. Được TPCOMS cung cấp miễn phí đến người dùng. Để cấu hình các dịch vụ trên Edge Gateway ta chọn Networking → Edge Gateways → chọn Edge gateway cần cấu hình.

![TPCLOUD Portal](/images/tpcloud/img_108.png)

## 4.1 - Rule Firewall {#firewall}

Để tạo rule firewall người dùng thực hiện các bước sau:

- Tại trang quản lý dịch vụ Edge Gateway chọn Firewall → Rules → NEW.

![TPCLOUD Portal](/images/tpcloud/img_109.png)

- Tại cửa sổ New Rule ta nhập tên rule firewall và nhấn vào icon để thiết lập một số cấu hình cơ bản để phù hợp với nhu cầu sử dụng.

![TPCLOUD Portal](/images/tpcloud/img_110.png)

Cấu hình Applications để xác định ứng dụng cụ thể cần kiểm soát lưu lượng truy cập dựa trên IP hoặc port.

![TPCLOUD Portal](/images/tpcloud/img_111.png)

Phần Source xác định địa chỉ IP, dải IP nguồn mà rule đó áp dụng.

![TPCLOUD Portal](/images/tpcloud/img_112.png)

Phần Destination xác định địa chỉ IP, dải IP đích mà rule đó áp dụng.

![TPCLOUD Portal](/images/tpcloud/img_113.png)

Rule firewall đã cấu hình.

![TPCLOUD Portal](/images/tpcloud/img_114.png)

## 4.2 - Rule NAT {#nat}



### 4.2.1 - Rule SNAT {#snat}

SNAT được dùng để quản lý lưu lượng outbound từ mạng nội bộ ra bên ngoài, giúp cho các máy ảo trong mạng riêng (private network) có thể kết nối với các mạng công cộng hoặc các mạng khác bên ngoài. Để tạo rule SNAT người dùng thực hiện các bước sau:

- Tại trang quản lý dịch vụ Edge Gateway chọn NAT → NEW.

![TPCLOUD Portal](/images/tpcloud/img_115.png)

- Tại cửa sổ Add NAT Rule tiến hành đặt Name cho rule NAT.

NAT Action chọn SNAT.

External IP nhập IP public của Edge Gateway.

Internal IP giá trị là IP cần ra mạng.

- Sau khi hoàn thành các thông tin cấu hình cơ bản nhấn SAVE để lưu lại.

![TPCLOUD Portal](/images/tpcloud/img_116.png)

Rule SNAT đã được tạo.

![TPCLOUD Portal](/images/tpcloud/img_117.png)

### 4.2.2 - Rule DNAT {#dnat}

DNAT cho phép các máy hoặc ứng dụng bên ngoài mạng nội bộ truy cập vào một máy ảo hoặc dịch vụ cụ thể trong mạng nội bộ bằng cách sử dụng một địa chỉ IP công cộng. Để tạo rule DNAT người dùng thực hiện các bước sau:

- Tại trang quản lý dịch vụ Edge Gateway chọn NAT → NEW.

![TPCLOUD Portal](/images/tpcloud/img_118.png)

- Tại cửa sổ Add NAT Rule tiến hành đặt Name cho rule NAT.

NAT Action chọn DNAT.

External IP nhập IP public của Edge Gateway.

External Port nhập số port muốn truy cập vào từ bên ngoài.

Internal IP nhập IP được chuyển đổi sau NAT.

Application nhấn vào icon và chọn dịch vụ muốn truy cập vào.

![TPCLOUD Portal](/images/tpcloud/img_119.png)

- Sau khi hoàn thành các thông tin cấu hình cơ bản nhấn SAVE để lưu lại.

![TPCLOUD Portal](/images/tpcloud/img_120.png)

Rule DNAT đã tạo.

![TPCLOUD Portal](/images/tpcloud/img_121.png)

Đối với Application Port không có sẵn trong danh sách Application ta có thể tạo như sau:

- Tại trang quản lý dịch vụ Edge Gateway chọn Application Port Profiles → NEW.

![TPCLOUD Portal](/images/tpcloud/img_122.png)

- Tại cửa sổ New Application Port Profile nhập Name, chọn Protocol và nhập số port sau đó nhấn SAVE để lưu lại.

![TPCLOUD Portal](/images/tpcloud/img_123.png)

Application Port đã tạo.

![TPCLOUD Portal](/images/tpcloud/img_124.png)

## 4.3 - IPSec VPN {#ipsec-vpn}

IPSec VPN là một công nghệ bảo mật được sử dụng để tạo ra một kết nối an toàn giữa hai mạng thông qua internet hoặc bất kỳ mạng công cộng nào. IPSec là một bộ giao thức tiêu chuẩn dùng để bảo mật dữ liệu truyền qua mạng IP, cung cấp các tính năng như mã hóa, xác thực, và toàn vẹn dữ liệu. Dưới đây là các bước thiết lập kết nối IPSec VPN:

- Tại trang quản lý dịch vụ Edge Gateway chọn IPSec VPN → NEW.

![TPCLOUD Portal](/images/tpcloud/img_125.png)

- Tại cửa sổ General Settings nhập Name sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_126.png)

- Tại cửa sổ Peer Authentication Mode chọn Pre-Shared Key nhập key share giữa hai site sau đó nhần NEXT.

![TPCLOUD Portal](/images/tpcloud/img_127.png)

- Tại cửa sổ Endpoint Configuration. Ở Local Endpoint nhập IP Address và Network của site hiện tại. Ở Remote Endpoint, nhập IP Address và Network của site muốn kết nối đến sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_128.png)

- Tại cửa sổ Ready To Complete, ta kiểm tra lại cấu hình và nhấn FINISH.

![TPCLOUD Portal](/images/tpcloud/img_129.png)

Cấu hình Customize Security Profile. Nhấn vào icon của rule IPsec VPN vừa tạo và chọn Customize Security Profile.

![TPCLOUD Portal](/images/tpcloud/img_130.png)

Điều chỉnh các thông số mã hóa cho phù hợp giữa hai site sau đó nhấn SAVE.

![TPCLOUD Portal](/images/tpcloud/img_131.png)

Tiến hành cấu hình VPN ở site khách hàng và kiểm tra trạng thái kết nối.

## 4.4 - Load Balancer {#load-balancer}

Load Balancer cho phép người dùng phân phối lưu lượng truy cập giữa các máy ảo, từ đó đảm bảo các dịch vụ luôn sẵn sàng.

Với dịch vụ Load Balancer của TPCOMS, hệ thống được tích hợp Advanced Load Balancer (ALB) - một dịch vụ tích hợp mạnh mẽ, cung cấp các tính năng cân bằng tải và quản lý lưu lượng nâng cao cho các ứng dụng triển khai trên môi trường vCD. ALB giúp tối ưu hóa hiệu suất, tăng cường độ sẵn sàng của ứng dụng và đảm bảo khả năng mở rộng linh hoạt trong môi trường đa khách hàng (multi-tenant) của vCD. Mặc định tính năng Load Balancer của hệ thống sẽ ở trạng thái Inactive, khách hàng vui lòng liên hệ TPCOMS nếu có nhu cầu sử dụng. Để cấu hình Load Balancer ta thực hiện các bước sau:

### 4.4.1 - Server Pool {#server-pool}

Server Pool là tập hợp các máy ảo được cấu hình để xử lý các yêu cầu từ Virtual Service. Để tạo Server Pool ta thực hiện các bước sau:

- Tại trang quản lý dịch vụ Edge Gateway chọn Load Balancer → Pools → ADD.

![TPCLOUD Portal](/images/tpcloud/img_132.png)

Tại cửa sổ Add Load Balancer Pool tab General Settings ta cấu hình các thông số cơ bản sau:

Name: đặt tên cho Server Pools.

Load Balancer Algorithm: Lựa chọn thuật toán để điều phối traffic của các VM.

Default Server Port: đặt cổng dịch vụ tương ứng.

![TPCLOUD Portal](/images/tpcloud/img_133.png)

- Tại tab Members ta thêm các IP của VM thuộc pools muốn chạy load balancer.

![TPCLOUD Portal](/images/tpcloud/img_134.png)

- Sau khi hoàn tất cấu hình nhấn SAVE để lưu lại.

![TPCLOUD Portal](/images/tpcloud/img_135.png)

### 4.4.2 - Virtual Services {#virtual-services}

Virtual Service là dịch vụ ảo mà Load Balancer sử dụng để phân phối lưu lượng tới các máy chủ. Virtual Services giúp định tuyến lưu lượng một cách hiệu quả và đảm bảo rằng các dịch vụ hoặc ứng dụng luôn sẵn sàng và hoạt động ổn định. Để tạo Virtual Service thực hiện các bước sau: Chọn Load Balancer → Virtual Services → ADD.

![TPCLOUD Portal](/images/tpcloud/img_136.png)

Tại cửa sổ Add Virtual Service cấu hình các thông số cơ bản sau:

Name: đặt tên Virtual Service.

Service Type: chọn loại dịch vụ được cấu hình cho Virtual Service và chỉ định giao thức hoặc lớp mạng mà dịch vụ sẽ sử dụng để cân bằng tải.

Service Engine Group: các Service Engine sẽ chịu trách nhiệm xử lý và cân bằng tải. Chọn Service Engine đã được TPCOMS add sẵn trên Portal Cloud.

![TPCLOUD Portal](/images/tpcloud/img_137.png)

Load Balancer Pool: chọn server pool tương ứng đã cấu hình trước đó.

![TPCLOUD Portal](/images/tpcloud/img_138.jpeg)

IPv4 Virtual IP: nhập địa chỉ IP mà Load Balancer sẽ đại diện để nhận lưu lượng từ client sau đó điều phối tới các VM trong Server Pool.

TCP Proxy: nhập port tương ứng với dịch vụ đang chạy.

![TPCLOUD Portal](/images/tpcloud/img_139.png)

- Sau khi hoàn tất cấu hình nhấn SAVE để lưu lại.

![TPCLOUD Portal](/images/tpcloud/img_140.png)

Cấu hình tương tự cho port dịch vụ HTTPS - 443 và kiểm tra trạng thái của Server Pool và Virtual Service.

![TPCLOUD Portal](/images/tpcloud/img_141.png)

![TPCLOUD Portal](/images/tpcloud/img_142.jpeg)

Tạo rule DNAT để truy cập thông qua IP public vào Virtual IP.

![TPCLOUD Portal](/images/tpcloud/img_143.png)

Tiến hành add record sau đó test truy cập qua đường public.

![TPCLOUD Portal](/images/tpcloud/img_144.png)

![TPCLOUD Portal](/images/tpcloud/img_145.png)
