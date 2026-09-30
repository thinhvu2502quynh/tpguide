---
title: "3. Tạo backup job"
---

- Click Jobs >> Create

![BaaS](/images/baas/baas_04_p5.png)

- Đặt tên Job và cài đặt Retention policy quy định giữ lại bao nhiêu ngày hoặc bao nhiêu bản.

![BaaS](/images/baas/baas_05_p5.png)

- Chọn VM muốn backup.

![BaaS](/images/baas/baas_06_p6.png)

- Chọn các tính năng backup nâng cao nếu cần thiết. Tham khảo:

https://helpcenter.veeam.com/docs/backup/vsphere/application_aware_processing.html?ver=120

https://helpcenter.veeam.com/docs/backup/vsphere/indexing.html?ver=120

![BaaS](/images/baas/baas_07_p6.png)

- Lập lịch backup và cài đặt chế độ retry.

![BaaS](/images/baas/baas_08_p7.png)

- Cài đặt email thông báo.

![BaaS](/images/baas/baas_09_p7.png)

- Click Start để chạy job backup.

![BaaS](/images/baas/baas_10_p8.png)

- Kiểm tra backup job: Click trực tiếp vào Status của job để xem chi tiết.

![BaaS](/images/baas/baas_11_p8.png)

- Kiểm tra các restore point của VM: vào tab VM >> Restore Point

![BaaS](/images/baas/baas_12_p8.png)
