---
title: "2. Tạo và quản lý vApp"
---

vApp là một khối logic cho phép quản lý các VM và tài nguyên khác nhau như một khối duy nhất, giúp việc triển khai, khởi động, và quản lý đơn giản hơn.

## 2.1 - Tạo mới vApp {#tao-vapp}

Để tạo vAPP ta thực hiện các bước sau:

- Trên giao diện Portal CLOUD chọn Applications → Virtual Applications → NEW VAPP.

![TPCLOUD Portal](/images/tpcloud/img_028.png)

- Tại cửa sổ Select Target Virtual Data Center tích chọn ORGVDC để tạo vAPP sau đó nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_029.png)

- Tại cửa sổ New vApp nhập Name của vApp, nhập Description (nếu cần), tích vào ô check box Power on nếu muốn vApp được bật sau khi tạo sau đó nhấn CREATE.

![TPCLOUD Portal](/images/tpcloud/img_030.png)

- Sau khi tạo vApp người dùng sẽ thấy được vApp vừa tạo hiện lên trên danh sách vApp.

![TPCLOUD Portal](/images/tpcloud/img_031.jpeg)

## 2.2 - vApp từ OVF {#vapp-ovf}

Các file được đóng gói dưới dạng OVF giúp máy ảo được triển khai dễ dàng trên các nền tảng khác nhau mà không cần cấu hình lại, tiết kiệm thời gian đồng thời giảm thiểu lỗi phát sinh do không tương thích. Với cách này ta cần download sẵn file OVF về máy local. Để tạo vApp từ OVF ta thực hiện các bước sau:

- Tại trang quản lý vApp chọn NEW → Add vApp From OVF.

![TPCLOUD Portal](/images/tpcloud/img_032.jpeg)

- Chọn vào ORGVDC-NAME rồi nhấn NEXT

![TPCLOUD Portal](/images/tpcloud/img_033.png)

- Tại cửa sổ Create a vApp from An OVF file nhấn vào icon chọn source OVF để tạo vApp.

![TPCLOUD Portal](/images/tpcloud/img_034.png)

- Chọn file OVF → nhấn Open.

![TPCLOUD Portal](/images/tpcloud/img_035.png)

- Sau khi chọn được file OVF ta tiến hành cấu hình các bước còn lại để hoàn thành cấu hình tạo vApp.

![TPCLOUD Portal](/images/tpcloud/img_036.png)

- VM được tạo bởi vApp From OVF.

![TPCLOUD Portal](/images/tpcloud/img_037.png)

## 2.3 - vApp từ Catalog {#vapp-catalog}

vApp Templates là các phiên bản tiêu chuẩn lưu trữ trong Catalog được nhà cung cấp tạo sẵn. vApp Templates bao gồm các hệ điều hành, phần mềm và cấu hình đã được kiểm thử.

Khi triển khai từ Catalog cho phép người dùng triển khai nhanh chóng một vApp hoàn chỉnh từ các mẫu đã được kiểm tra và chuẩn bị trước, các vApp luôn giữ được tính đồng nhất trong cấu hình và tính năng, giúp giảm thiểu lỗi và đảm bảo rằng tất cả người dùng đều làm việc trên cùng một nền tảng tiêu chuẩn. Để tạo vApp từ Catalog ta thực hiện các bước sau:

- Tại trang quản lý vApp chọn NEW → Add vApp From Catalog.

![TPCLOUD Portal](/images/tpcloud/img_038.png)

- Tại cửa sổ Create vApp from Template ta chọn Template theo nhu cầu sử dụng và nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_039.jpeg)

Tiến hành cấu hình các bước tiếp theo tùy theo setup của từng Template để hoàn thành quá trình tạo vApp.

![TPCLOUD Portal](/images/tpcloud/img_040.png)

- VM được tạo bởi vApp From Catalog.

![TPCLOUD Portal](/images/tpcloud/img_041.jpeg)

## 2.4 - Thêm network vào vApp {#them-network-vapp}

Việc thêm Network vào vApp giúp các VM thuộc vApp có thể sử dụng. Các bước thêm network vào vApp như sau:

- Trên vApp ta chọn ACTIONS → Add → Add Network.

![TPCLOUD Portal](/images/tpcloud/img_042.jpeg)

- Tại cửa sổ Add Network chọn loại Network của vApp là Direct → tích chọn network cần thêm vào vApp sau đó nhấn ADD.

![TPCLOUD Portal](/images/tpcloud/img_043.png)

- Sau khi thêm network vào vApp người dùng có thể xem các network trên vApp bằng cách chọn DETAILS của vApp.

![TPCLOUD Portal](/images/tpcloud/img_044.jpeg)

- Chọn tab Networks để xem các network trên vApp cũng như có thể chỉnh sửa, cấu hình network ở giao diện này.

![TPCLOUD Portal](/images/tpcloud/img_045.png)
