---
title: "5. Distributed Firewall"
---

Cấu hình Distributed Firewall (DFW) cho bảo mật micro-segmentation qua NSX-T.

Trên VMware Cloud Director (VCD), tính năng Distributed Firewall (DFW) được tích hợp thông qua NSX-T để cung cấp bảo mật micro-segmentation cho các tenant – giúp kiểm soát lưu lượng East-West giữa các VM trong cùng một mạng ảo (Org VDC Network). Use case: các network trên cùng edge gateway sẽ thông mạng với nhau, sử dụng distributed firewall để chặn. Trước khi tạo rule distributed firewall: test ping từ network 10.0.24.0/24 đến 11.0.0.0/24

![TPCLOUD Portal](/images/tpcloud/img_146.png)

Để tạo distributed firewall ta thực hiện các bước sau:

Tạo Data Center Groups: Networking → Data Center Group → New.

![TPCLOUD Portal](/images/tpcloud/img_147.png)

- Chọn ORGVDC.

![TPCLOUD Portal](/images/tpcloud/img_148.png)

- Nhập tên cho VDC Group.

![TPCLOUD Portal](/images/tpcloud/img_149.png)

- Chọn ORGVDC tham gia vào VDC Group.

![TPCLOUD Portal](/images/tpcloud/img_150.png)

Kiểm tra lại thông tin và nhấn FINISH để hoàn tất.

![TPCLOUD Portal](/images/tpcloud/img_151.png)

Cấu hình distributed firewall: Nhấn vào VDC Group vừa tạo để vào trang cấu hình distributed firewall.

![TPCLOUD Portal](/images/tpcloud/img_152.png)

Thêm Edge gateway vào VDC Group.

![TPCLOUD Portal](/images/tpcloud/img_153.png)

- Chọn EDGE muốn configure và nhấn SAVE

![TPCLOUD Portal](/images/tpcloud/img_154.png)

Active tính năng distributed firewall.

![TPCLOUD Portal](/images/tpcloud/img_155.png)

![TPCLOUD Portal](/images/tpcloud/img_156.png)

Tạo rule chặn IP 10.0.24.10 đến 11.0.0.10. Tại tab distributed firewall chọn new.

![TPCLOUD Portal](/images/tpcloud/img_157.png)

- Nhập các thông số theo mục đích sử dụng.

![TPCLOUD Portal](/images/tpcloud/img_158.png)

Test rule distributed firewall: ta thấy đã chặn pig từ 10.0.24.10 đến 11.0.0.10.

![TPCLOUD Portal](/images/tpcloud/img_159.png)
