---
title: "5. Khôi phục dữ liệu"
---

Chức năng: Khôi phục tệp/thư mục hoặc toàn bộ hệ điều hành từ restore point trên Cloud Repository.

Cảnh báo: Luôn xác nhận đúng máy, job, restore point và vị trí đích. Khôi phục kiểu Overwrite hoặc Bare Metal Recovery có thể ghi đè dữ liệu hiện hữu; chỉ thực hiện trong cửa sổ bảo trì được phê duyệt.

## 5.1 - Khôi phục tệp từ Portal {#cc-restore-portal}

Chức năng: Duyệt restore point và khôi phục/tải xuống tệp từ giao diện Portal mà không cần trực tiếp mở Veeam Agent trên máy nguồn.

- Chọn Protected Data, đánh dấu máy cần khôi phục và chọn File-Level Restore Portal.

![CloudConnect](/images/cloudconnect/cc2026/p052_1.png)

- Chọn đúng Job, chọn Select tại Restore Point, chọn thời điểm cần khôi phục rồi chọn Select.

![CloudConnect](/images/cloudconnect/cc2026/p052_2.png)

- Duyệt cây thư mục, đánh dấu tệp/thư mục cần phục hồi và chọn Add to Restore List. Kiểm tra đường dẫn, owner, kích thước và Last Modified trước khi tiếp tục.

![CloudConnect](/images/cloudconnect/cc2026/p053_1.png)

- Trong Restore List, chọn Restore và chọn Keep để giữ tệp hiện có hoặc Overwrite để ghi đè. Dùng Overwrite chỉ khi đã xác minh đúng phiên bản cần phục hồi.

![CloudConnect](/images/cloudconnect/cc2026/p053_2.png)

- Nếu cần tải tệp về máy quản trị, chọn Download. Nhập thông tin local administrator của máy từ xa khi Portal yêu cầu và chọn Verify; theo dõi Restore Status đến khi thành công.

![CloudConnect](/images/cloudconnect/cc2026/p053_3.png)

## 5.2 - Khôi phục tệp từ Veeam Agent {#cc-restore-agent}

Chức năng: Khôi phục tệp ngay trên máy nguồn bằng Backup Browser, phù hợp khi quản trị viên có quyền truy cập trực tiếp Veeam Agent.

- Mở Veeam Agent, chọn job cần dùng, mở menu và chọn Restore file.

![CloudConnect](/images/cloudconnect/cc2026/p054_1.jpg)

- Trong wizard, chọn restore point theo ngày/giờ và loại Full/Increment phù hợp, sau đó chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p055_1.png)

- Tại Summary, xác nhận tên máy và restore point rồi chọn Open để mở Backup Browser.

![CloudConnect](/images/cloudconnect/cc2026/p056_1.png)

- Trong Backup Browser, duyệt tới tệp, chọn Restore rồi chọn Keep hoặc Overwrite; có thể dùng Copy To nếu muốn khôi phục sang thư mục khác.

![CloudConnect](/images/cloudconnect/cc2026/p057_1.png)

- Khi cửa sổ tiến trình báo Restore completed successfully, kiểm tra Success/Errors, chọn Close và mở tệp tại vị trí đích để nghiệm thu.

![CloudConnect](/images/cloudconnect/cc2026/p057_2.png)

## 5.3 - Tạo Recovery Media {#cc-recovery-media}

Chức năng: Tạo file ISO khởi động dùng cho Bare Metal Recovery khi máy không thể vào Windows hoặc cần phục hồi hệ điều hành sang máy/VM mới.

- Trên máy đã cài Veeam Agent, mở Start Menu và chọn Create Recovery Media.

![CloudConnect](/images/cloudconnect/cc2026/p058_1.png)

- Chọn tạo ISO image file. Bật Include network connections settings và Include hardware drivers from this computer; chỉ đưa decryption key vào media khi có quy trình bảo vệ ISO nghiêm ngặt.

![CloudConnect](/images/cloudconnect/cc2026/p059_1.png)

- Nếu khôi phục lên VMware, bật Include the following additional storage and network hardware drivers, chọn Add và thêm thư mục driver VMware (hình minh họa: `C:\Program Files\Common Files\VMware\Drivers`).

![CloudConnect](/images/cloudconnect/cc2026/p060_1.png)

- Tại Image Path, chọn thư mục lưu và đặt tên ISO dễ nhận biết theo hostname/phiên bản; không lưu bản duy nhất trên chính máy đang được bảo vệ.

![CloudConnect](/images/cloudconnect/cc2026/p061_1.png)

- Tại Ready to Apply, kiểm tra thành phần driver, network settings và đường dẫn đích; chọn Create.

![CloudConnect](/images/cloudconnect/cc2026/p062_1.png)

- Sau khi hoàn tất, kiểm tra file ISO tồn tại và dung lượng hợp lý. Sao chép ISO sang kho an toàn/khác máy và kiểm soát quyền truy cập.

![CloudConnect](/images/cloudconnect/cc2026/p062_2.png)

## 5.4 - Khôi phục toàn máy {#cc-bmr}

Chức năng: Khởi động máy/VM bằng Recovery Media, kết nối Cloud Repository và phục hồi toàn bộ hệ điều hành/dữ liệu từ restore point.

Chuẩn bị: Tạo VM/máy đích có firmware (UEFI/BIOS), controller, số lượng disk và dung lượng bằng hoặc lớn hơn máy nguồn khi có thể. Bare Metal Recovery sẽ ghi dữ liệu lên disk đích.

- Gắn Recovery Media ISO vào CD/DVD của VM/máy đích, mở Boot Manager và chọn thiết bị CD-ROM/ISO (trong hình: EFI VMware Virtual IDE CDROM Drive).

![CloudConnect](/images/cloudconnect/cc2026/p063_1.png)

- Chờ màn hình Veeam Recovery Media xuất hiện. Nếu biểu tượng mạng ở góc dưới có dấu đỏ, mở biểu tượng này để kiểm tra adapter trước khi chọn Bare Metal Recovery.

![CloudConnect](/images/cloudconnect/cc2026/p064_1.png)

- Nếu cửa sổ Network settings báo No network adapters detected, chọn Load network adapter driver.

![CloudConnect](/images/cloudconnect/cc2026/p065_1.png)

- Trong Hardware Drivers, chọn Load Driver.

![CloudConnect](/images/cloudconnect/cc2026/p066_1.png)

- Duyệt tới file INF của driver mạng. Với VMware VMXNET3 trong Recovery Media minh họa, đường dẫn là `X:\Drivers\Drivers\vmxnet3\Win10\vmxnet3.inf` (driver có sẵn khi tạo Recovery media ở mục 5.3.3); chọn Install.

![CloudConnect](/images/cloudconnect/cc2026/p067_1.png)

- Khi thông báo Driver has been installed successfully xuất hiện, chọn OK và quay lại danh sách adapter.

![CloudConnect](/images/cloudconnect/cc2026/p068_1.png)

- Nếu Recovery Media chưa nhận disk/controller SCSI, chọn Load Driver và trỏ tới file INF phù hợp; hình minh họa VMware PVSCSI dùng `X:\Drivers\Drivers\pvscsi\Win10\pvscsi.inf`(driver có sẵn khi tạo Recovery media ở mục 5.3.3). Và nhấn Install để cài đặt.

![CloudConnect](/images/cloudconnect/cc2026/p069_1.png)

- Xác nhận disk controller và network adapter đều hiển thị trạng thái Online, sau đó chọn OK.

![CloudConnect](/images/cloudconnect/cc2026/p070_1.png)

- Mở lại Network settings, xác nhận adapter đã xuất hiện. Chọn Properties để đặt IP/DNS thủ công nếu môi trường không có DHCP.

![CloudConnect](/images/cloudconnect/cc2026/p071_1.png)

- Tại màn hình chính, chọn Bare Metal Recovery.

![CloudConnect](/images/cloudconnect/cc2026/p072_1.png)

- Tại Backup Location, chọn Network storage vì backup nằm trên Cloud Connect Repository; chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p073_1.png)

- Tại Network Storage, chọn Veeam Cloud Connect repository và chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p074_1.png)

- Tại Service Provider, nhập DNS/IP và port do TPCOMS cung cấp cloudconnect.tpcloud.vn và 6180.

![CloudConnect](/images/cloudconnect/cc2026/p075_1.png)

- Kiểm tra chứng thực được xác minh, nhập username/password Cloud Connect rồi chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p076_1.png)

- Tại Backup, chọn đúng computer/job chứa dữ liệu của máy nguồn rồi chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p077_1.png)

- Tại Restore Point, chọn thời điểm cần phục hồi.

![CloudConnect](/images/cloudconnect/cc2026/p078_1.png)

- Tại Restore Mode, chọn Entire computer khi disk đích tương thích; System volumes only khi chỉ cần volume khởi động; hoặc Manual restore (advanced) khi cần tự ánh xạ disk/partition.

![CloudConnect](/images/cloudconnect/cc2026/p079_1.png)

- Tại Summary, kiểm tra computer, restore point, restore mode và các volume sẽ bị ghi. Nếu mapping tự động đúng, chọn Restore.

![CloudConnect](/images/cloudconnect/cc2026/p080_1.png)

- Theo dõi Progress; không tắt máy, ngắt mạng hoặc tháo disk trong khi hệ thống đang cập nhật partition và ghi dữ liệu.

![CloudConnect](/images/cloudconnect/cc2026/p081_1.png)

- Khi tất cả dòng log có dấu kiểm xanh và xuất hiện Restore process finished, chọn Finish.

![CloudConnect](/images/cloudconnect/cc2026/p082_1.png)

- Khi được hỏi reboot, tháo Recovery Media ISO khỏi boot order rồi chọn Yes. Sau khi khởi động, kiểm tra OS, disk, network, dịch vụ ứng dụng và thực hiện backup mới.

![CloudConnect](/images/cloudconnect/cc2026/p083_1.png)

## 5.5 - Ánh xạ disk thủ công {#cc-disk-map}

Chức năng: Tự phân bổ partition/volume từ backup sang disk đích khi Veeam không thể tự ánh xạ do dung lượng, số disk, controller hoặc layout khác máy nguồn.

- Dung lượng disk đích khác disk nguồn.
- Số lượng hoặc thứ tự disk khác.
- Disk controller khác hoặc driver chưa được nạp.
- Kiểu partition GPT/MBR/UEFI khác.
- Backup có nhiều disk nhưng máy đích thiếu disk tương ứng.
- Nếu xuất hiện lỗi Unable to auto-match disks, chọn OK để quay lại bước Restore Mode; không tiếp tục chế độ tự động.

![CloudConnect](/images/cloudconnect/cc2026/p084_1.png)

- Chọn Manual restore (advanced) và chọn Next để mở bước Disk Mapping.

![CloudConnect](/images/cloudconnect/cc2026/p085_1.png)

- Chọn disk cấn mapping, khi Veeam hỏi Cannot find original disk layout. Do you want to partition this disk manually?, chọn Yes sau khi đã xác nhận đúng disk đích.

![CloudConnect](/images/cloudconnect/cc2026/p086_1.png)

- Trong Customize disk mapping, kiểm tra các partition hiện có. Chọn partition không cần giữ và Remove để tạo vùng Unallocated; không xóa partition còn chứa dữ liệu cần bảo toàn.

![CloudConnect](/images/cloudconnect/cc2026/p087_1.png)

- Chọn vùng Unallocated, chọn Restore > Disk 0 > (C:) hoặc volume nguồn tương ứng để ánh xạ volume backup vào vùng trống.

![CloudConnect](/images/cloudconnect/cc2026/p088_1.png)

- Kiểm tra layout sau ánh xạ: EFI/System partition, volume C: và vùng trống còn lại phải phù hợp với thiết kế mong muốn; chọn OK.

![CloudConnect](/images/cloudconnect/cc2026/p089_1.png)

- Quay lại Disk Mapping, xác nhận từng volume có Restore layout Automatic hoặc Manual đúng dự kiến; chọn Next.

![CloudConnect](/images/cloudconnect/cc2026/p090_1.png)

- Khi hộp thoại cảnh báo thao tác sẽ overwrite volume hiện hữu, đối chiếu lần cuối và chọn Yes để tiếp tục.

![CloudConnect](/images/cloudconnect/cc2026/p091_1.png)

- Tại Summary, kiểm tra Restore mode Manual, volume/disk đích và driver injection rồi chọn Restore. Theo dõi Progress và reboot như quy trình khôi phục tự động.

![CloudConnect](/images/cloudconnect/cc2026/p092_1.png)
