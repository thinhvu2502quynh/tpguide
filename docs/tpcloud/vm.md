---
title: "3. Tạo và quản lý máy ảo"
---

Tạo máy ảo từ file ISO và từ Template (Ubuntu, Windows Server), quản lý cấu hình và snapshot VM.

## 3.1 - VM từ file ISO {#vm-tu-iso}

Việc cài đặt từ file ISO giúp quản trị viên tùy chỉnh cài đặt ngay từ đầu, từ phiên bản hệ điều hành đến các thành phần và phần mềm cài đặt kèm theo. Điều này rất hữu ích khi muốn kiểm soát chi tiết quá trình cài đặt và có các yêu cầu đặc biệt về hệ thống. Để tạo máy ảo từ file iso ta thực hiện các bước sau:

- Tại trang quản lý VM chọn NEW VM.

![TPCLOUD Portal](/images/tpcloud/img_046.png)

- Nhập thông tin Name, Computer Name.

Type chọn là New để cài đặt từ file iso.

Bỏ tích chọn Power on để khi setup xong VM ở trạng thái off ta có thể enable tính năng tăng nóng CPU và RAM.

Operating System lựa chọn phù hợp với OS ủa VM cần cài.

![TPCLOUD Portal](/images/tpcloud/img_047.png)

Thông số Boot Options để mặc định.

Compute: nhập thống số cấu hình phù hợp với nhu cầu sử dụng.

Storage: Storage Policy để mặc định và nhập dung lượng ổ cứng theo nhu cầu vào ô size.

![TPCLOUD Portal](/images/tpcloud/img_048.png)

- Tại mục Networking ta chọn Network cần dùng và điều chỉnh các thông số theo nhu cầu sử dụng.

![TPCLOUD Portal](/images/tpcloud/img_049.png)

- Sau khi hoàn chỉnh các thống số cấu hình ta nhấn OK để tiến hành tạo VM.

![TPCLOUD Portal](/images/tpcloud/img_050.jpeg)

- Enable tính năng Virtual CPU hot add và Memory hot add để cho phép VM có thể tăng nóng CPU và RAM khi VM đang hoạt động.
- Trên VM ta nhấn vào DETAILS. Tiếp tục chọn Compute → EDIT.

![TPCLOUD Portal](/images/tpcloud/img_051.png)

- Tại cửa sổ Edit Compute Enable tính năng Virtual CPU hot add và Memory hot add và nhấn SAVE để lưu lại.

![TPCLOUD Portal](/images/tpcloud/img_052.jpeg)

- Chọn VM Console mở giao diện web console để cài đặt OS cho VM.

![TPCLOUD Portal](/images/tpcloud/img_053.png)

Tiến hành thao tác các bước cài đặt OS của VM để hoàn tất quá trình cài đặt.

![TPCLOUD Portal](/images/tpcloud/img_054.png)

## 3.2 - VM từ Template {#vm-tu-template}

Template thường được chuẩn hóa theo các cấu hình đã được kiểm tra và phê duyệt. Điều này giúp đảm bảo tính đồng nhất giữa các VM, từ đó giảm thiểu sai sót do cấu hình khác biệt hoặc lỗi từ việc thiết lập thủ công.

Tạo VM từ template giúp triển khai hệ thống nhanh chóng mà không cần phải cài đặt hệ điều hành thủ công. Điều này rất có lợi khi cần triển khai nhiều VM với cấu hình tương tự. Hiện trên portal TPCLOUD đã tạo sẵn các template cho hệ điều hành Windows Server và Ubuntu.

### 3.2.1 - Ubuntu từ Template {#vm-ubuntu-template}

Để tạo VM từ template ta thực hiện các bước sau:

- Tại trang quản lý vApp chọn NEW → Add vApp From Catalog.

![TPCLOUD Portal](/images/tpcloud/img_055.png)

- Tại cửa sổ Create vApp from Template ta chọn Template theo nhu cầu sử dụng và nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_056.png)

- Tại cửa sổ Select Name nhập tên vAPP vào ô Name.

![TPCLOUD Portal](/images/tpcloud/img_057.png)

- Tại cửa sổ Configure Resources nhập tên VM vào ô Virtual Machine.

![TPCLOUD Portal](/images/tpcloud/img_058.png)

- Tại cửa sổ Compute Policies điều chỉnh thông số Ram/Memory theo nhu cầu sử dụng.

![TPCLOUD Portal](/images/tpcloud/img_059.png)

- Tại cửa sổ Customize Hardware nhập thông tin Computer Name và dung lượng ổ cứng VM vào ô Hard Disks.

![TPCLOUD Portal](/images/tpcloud/img_060.png)

Tại cửa sổ vApp Networking điều chỉnh các thông tin sau:

- Network Type: chọn Direct (đây là Route Network được tạo ở 2.2.2 TẠO ROUTED NETWORK).
- Organization VDC Network connection: chọn network mong muốn.
- Enable cấu hình Configure VM Networking để tùy chỉnh cấu hình network.

![TPCLOUD Portal](/images/tpcloud/img_061.png)

- Tại cửa sổ VM Networking tiến hành thiết lập IP cho VM.

![TPCLOUD Portal](/images/tpcloud/img_062.png)

- Tại cửa sổ Custom Properties nhập thông tin A Unique Instance ID for this instance và nhập thông tin mật khẩu cho lần đầu đăng nhập tại Default User&#x27;s password.

![TPCLOUD Portal](/images/tpcloud/img_063.png)

Cuối cùng review lại thông tin và nhấn FINISH để hoàn tất quá trình cài đặt.

![TPCLOUD Portal](/images/tpcloud/img_064.png)

- Sau khi VM được tạo tiến hành mở VM và vào web console để cấu hình VM.

![TPCLOUD Portal](/images/tpcloud/img_065.jpeg)

User mặc định login vào VM là ubuntu. Tiến hành thay đổi password ở lần đâu login theo yêu cầu của hệ thống.

![TPCLOUD Portal](/images/tpcloud/img_066.png)

- Enable ssh bằng user: Lưu ý: để có thể ssh từ bên ngoài vào VM ta cần tạo rule DNAT trên Edge Gateway (Xem phần 5.2.2 cấu hình DNAT).

Chuyển qua dùng user root bằng lệnh sudo -i

![TPCLOUD Portal](/images/tpcloud/img_067.png)

Truy cập đường dẫn “vim /etc/ssh/sshd_config.d/60-cloudimg-settings.conf” chỉnh “PasswordAuthentication no” sang “PasswordAuthentication yes” lưu lại sau đó restart dịch vụ ssh.

![TPCLOUD Portal](/images/tpcloud/img_068.png)

Enable ssh bằng user root:

Đặt pass user root: dùng lệnh “passwd root”

![TPCLOUD Portal](/images/tpcloud/img_069.png)

Truy cập đường dẫn “vim /etc/ssh/sshd_config” bỏ command dòng “PermitRootLogin prohibit-password” và chỉnh thành “PermitRootLogin yes” sau đó lưu lại và restart dịch vụ ssh.

![TPCLOUD Portal](/images/tpcloud/img_070.png)

Mở rộng ổ đĩa khi tạo VM ubuntu bằng Template:

Tình trạng dung lượng hiện tại là 50GB.

![TPCLOUD Portal](/images/tpcloud/img_071.png)

![TPCLOUD Portal](/images/tpcloud/img_072.png)

![TPCLOUD Portal](/images/tpcloud/img_073.png)

- Tại portal cloud tăng dung lượng lên 100 GB.

![TPCLOUD Portal](/images/tpcloud/img_074.png)

Xác định phân vùng cần tăng là sda sau đó chạy lệnh sau để rescan ổ đĩa “echo 1>/sys/class/block/sda/device/rescan”.

![TPCLOUD Portal](/images/tpcloud/img_075.png)

Chạy lệnh sau để mở rộng phân vùng sda1 “growpart /dev/sda 1”.

![TPCLOUD Portal](/images/tpcloud/img_076.png)

Resize lại file system bằng lệnh “resize2fs /dev/sda1” và kiểm tra dung lượng đã được tăng.

![TPCLOUD Portal](/images/tpcloud/img_077.png)

### 3.2.2 - Windows Server từ Template {#vm-windows-template}

- Tại trang quản lý vApp chọn NEW → Add vApp From Catalog và chọn Version Windows muốn cài.

![TPCLOUD Portal](/images/tpcloud/img_078.png)

- Tại Select name nhập tên vAPP vào ô Name.

![TPCLOUD Portal](/images/tpcloud/img_079.png)

- Tại cửa sổ Configure Resources nhập tên VM vào ô Virtual Machine.

![TPCLOUD Portal](/images/tpcloud/img_080.png)

- Tại cửa sổ Compute Policies điều chỉnh thông số Ram/Memory theo nhu cầu sử dụng.

![TPCLOUD Portal](/images/tpcloud/img_081.png)

- Tại cửa sổ Customize Hardware nhập thông tin Computer Name và dung lượng ổ cứng VM vào ô Hard Disks.

![TPCLOUD Portal](/images/tpcloud/img_082.png)

Tại cửa sổ vApp Networking điều chỉnh các thông tin sau:

- Network Type: chọn Direct (đây là Route Network được tạo ở 2.2.2 TẠO ROUTED NETWORK).
- Organization VDC Network connection: chọn network mong muốn.
- Enable cấu hình Configure VM Networking để tùy chỉnh cấu hình network.

![TPCLOUD Portal](/images/tpcloud/img_083.png)

- Tại cửa sổ VM Networking tiến hành thiết lập IP cho VM.

![TPCLOUD Portal](/images/tpcloud/img_084.png)

Review lại thông tin và nhấn FINISH để hoàn tất quá trình cài đặt.

![TPCLOUD Portal](/images/tpcloud/img_085.png)

- Sau khi VM được tạo tiến hành bật VM và vào web console để setup VM.

![TPCLOUD Portal](/images/tpcloud/img_086.jpeg)

Tùy chỉnh các thiết lập ban đầu cho VM:

- Nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_087.png)

- Nhấn Accept.

![TPCLOUD Portal](/images/tpcloud/img_088.png)

Đặt mật khẩu cho VM và nhấn FINISH.

![TPCLOUD Portal](/images/tpcloud/img_089.png)

Login vào VM bằng mật khẩu vừa đặt.

![TPCLOUD Portal](/images/tpcloud/img_090.jpeg)

Lưu ý: VM windows server cài đặt bằng template cần extend dung lượng ổ C với dung lượng được điều chỉnh ở mục Hard Disks:

- Tại cửa số Server Manager chọn Tools → Computer Management.

![TPCLOUD Portal](/images/tpcloud/img_091.png)

- Tại cửa sổ Computer Management chọn Disk Management.

![TPCLOUD Portal](/images/tpcloud/img_092.png)

- Click chuột phải vào phân vùng ổ C chọn Extend Volume.

![TPCLOUD Portal](/images/tpcloud/img_093.png)

- Tại của sổ Welcome to the Extend Volume Wizard nhấn NEXT.

![TPCLOUD Portal](/images/tpcloud/img_094.png)

- Để mặc định và nhấn NEXT nếu muốn lấy toàn bộ dung lượng trống cho ổ C hoặc tùy chỉnh theo nhu cầu.

![TPCLOUD Portal](/images/tpcloud/img_095.png)

- Nhấn FINISH để hoàn thành quá trình extend ổ đĩa.

![TPCLOUD Portal](/images/tpcloud/img_096.png)

Dung lượng ổ C đã được Extend.

![TPCLOUD Portal](/images/tpcloud/img_097.png)

## 3.3 - Quản lý máy ảo {#quan-ly-vm}

- Để thao tác quản lý các tính năng cơ bản trên VM trên VM ta nhấn DETAILS.

![TPCLOUD Portal](/images/tpcloud/img_098.png)

### 3.3.1 - Card mạng VM {#vm-nic}

- Để chỉnh sửa card mạng VM ta vào NICs → EDIT.

![TPCLOUD Portal](/images/tpcloud/img_099.png)

- Chọn NEW để thêm card mạng.

Primary NIC: Chọn card mạng chạy chính.

Tích chọn Connected để kết nối card mạng cho VM.

Adapter type: chọn VMXNET 3

- IP mode: chọn mode DHCP nếu đã cấu hình DHCP (xem phần 2.2.3) hoặc chọn mode Static - Manual nếu muốn chỉ định một IP cụ thể cho VM.

IP: nhập địa chỉ IP cụ thể nếu IP mode chọn Static - Manual.

- Để xóa card mạng tích chọn card mạng tương ứng và nhấn DELETE.

![TPCLOUD Portal](/images/tpcloud/img_100.png)

### 3.3.2 - Dung lượng (Hard Disk) {#vm-disk}

- Để chỉnh sửa dung lượng VM ta vào Hard Disks → EDIT.

![TPCLOUD Portal](/images/tpcloud/img_101.png)

- Để thêm ổ đĩa mới chọn ADD.

Size: tùy chỉnh dung lượng theo nhu cầu.

Policy: để mặc định.

- Để xóa ổ đĩa chọn icon tương ứng với ổ đĩa cần xóa.

![TPCLOUD Portal](/images/tpcloud/img_102.png)

### 3.3.3 - Cấu hình CPU, RAM {#vm-compute}

- Để chỉnh sửa cấu hình CPU, RAM của VM ta vào Compute → EDIT.

![TPCLOUD Portal](/images/tpcloud/img_103.png)

- Tại cửa sổ Edit Compute ta có thể cấu hình CPU, Cores per socket, Memory.
- Enable cấu hình Virtual CPU hot add và Memory hot add để có thể tăng nóng CPU và RAM khi VM đang hoạt động. (lưu ý: để Enable tính năng này VM phải ở trạng thái Off).

![TPCLOUD Portal](/images/tpcloud/img_104.png)

### 3.3.4 - Snapshot {#vm-snapshot}

Snapshot là một bản sao lưu trạng thái của một VM tại một thời điểm nhất định. Nó ghi lại toàn bộ dữ liệu liên quan đến VM tại thời điểm đó, bao gồm cấu hình, bộ nhớ và các file đĩa. Snapshot không phải là giải pháp backup lâu dài, chúng phù hợp cho các bản sao lưu ngắn hạn và thường nên được xóa sau khi hoàn tất các thay đổi cần thiết. Số lượng snapshot mặc định của hệ thống một là bản, nếu người dùng có nhu cầu tăng số lượng bản snapshot vui lòng liên hệ TPCOMS để được hỗ trợ. Để tạo snapshot ta chọn Snapshots → TAKE SNAPSHOT hoặc ACTIONS → Snapshot > Create Snapshot.

![TPCLOUD Portal](/images/tpcloud/img_105.png)

Đặt tên cho bản snapshot sau đó nhấn CREATE.

![TPCLOUD Portal](/images/tpcloud/img_106.png)

- Sau khi tạo snapshot, tại trang quản lý snapshot ta có thể thực hiện thêm các thao tác như EDIT, DELETE, REVERT,… với các bản snapshot.

![TPCLOUD Portal](/images/tpcloud/img_107.jpeg)
