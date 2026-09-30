---
title: "7. Backup on the Cloud Portal"
---

Managing the system backup service with Veeam on the Cloud Portal.

- To use the backup feature on the Cloud Portal, the customer needs to purchase a separate backup service package for their system. To configure backup on the Cloud Portal, perform the following steps:
- On the Cloud Portal, access the backup service by clicking More → Data Protection with Veeam.

![TPCLOUD Portal](/images/tpcloud/img_165.jpeg)

The Dashboard interface of the TPCOMS backup service.

![TPCLOUD Portal](/images/tpcloud/img_166.png)

To create a backup job from the backup service, select the Jobs tab → Create...

![TPCLOUD Portal](/images/tpcloud/img_167.png)

Enter the backup job name and adjust the backup retention time, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_168.png)

- In the Virtual Machines configuration section, select Add, then select the object to be backed up (VM, vApp, ORGVDC), then click OK → NEXT.

![TPCLOUD Portal](/images/tpcloud/img_169.png)

- In the Guest Processing section, click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_170.png)

- In the Job Schedule section, configure the automatic backup schedule and set the number of retries when a backup fails, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_171.png)

- In the Email Notifications section, tick Enable e-mail notifications, enter the Email information if you want to receive backup status notifications by email, tick the necessary notification types, then click Finish.

![TPCLOUD Portal](/images/tpcloud/img_172.png)

The backup job has been created.

![TPCLOUD Portal](/images/tpcloud/img_173.png)

- To manage the backups, go to the VMs tab.

![TPCLOUD Portal](/images/tpcloud/img_174.png)

Back to the home page
