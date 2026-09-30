---
title: "3. Create a backup job"
---

- Click Jobs >> Create

![BaaS](/images/baas/baas_04_p5.png)

- Name the job and set the Retention policy, which defines how many days or how many restore points to keep.

![BaaS](/images/baas/baas_05_p5.png)

- Select the VM to back up.

![BaaS](/images/baas/baas_06_p6.png)

- Enable advanced backup features if needed. See:

https://helpcenter.veeam.com/docs/backup/vsphere/application_aware_processing.html?ver=120

https://helpcenter.veeam.com/docs/backup/vsphere/indexing.html?ver=120

![BaaS](/images/baas/baas_07_p6.png)

- Schedule the backup and configure retry.

![BaaS](/images/baas/baas_08_p7.png)

- Configure the notification email.

![BaaS](/images/baas/baas_09_p7.png)

- Click Start to run the backup job.

![BaaS](/images/baas/baas_10_p8.png)

- Check the backup job: click the job Status to view details.

![BaaS](/images/baas/baas_11_p8.png)

- Check the VM restore points: open the VM tab >> Restore Point

![BaaS](/images/baas/baas_12_p8.png)
