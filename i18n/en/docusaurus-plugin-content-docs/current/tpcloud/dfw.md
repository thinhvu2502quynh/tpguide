---
title: "5. Distributed Firewall"
---

Configuring the Distributed Firewall (DFW) for micro-segmentation security via NSX-T.

On VMware Cloud Director (VCD), the Distributed Firewall (DFW) feature is integrated through NSX-T to provide micro-segmentation security for tenants - helping to control East-West traffic between VMs within the same virtual network (Org VDC Network). Use case: networks on the same edge gateway will be able to communicate with each other; use the distributed firewall to block them. Before creating a distributed firewall rule: test ping from network 10.0.24.0/24 to 11.0.0.0/24.

![TPCLOUD Portal](/images/tpcloud/img_146.png)

To create a distributed firewall, perform the following steps:

- Create Data Center Groups: Networking → Data Center Group → New.

![TPCLOUD Portal](/images/tpcloud/img_147.png)

- Select the ORGVDC.

![TPCLOUD Portal](/images/tpcloud/img_148.png)

Enter a name for the VDC Group.

![TPCLOUD Portal](/images/tpcloud/img_149.png)

- Select the ORGVDC to join the VDC Group.

![TPCLOUD Portal](/images/tpcloud/img_150.png)

Review the information and click FINISH to complete.

![TPCLOUD Portal](/images/tpcloud/img_151.png)

Configure the distributed firewall: click the VDC Group you just created to go to the distributed firewall configuration page.

![TPCLOUD Portal](/images/tpcloud/img_152.png)

- Add the Edge Gateway to the VDC Group.

![TPCLOUD Portal](/images/tpcloud/img_153.png)

- Select the EDGE you want to configure and click SAVE.

![TPCLOUD Portal](/images/tpcloud/img_154.png)

Activate the distributed firewall feature.

![TPCLOUD Portal](/images/tpcloud/img_155.png)

![TPCLOUD Portal](/images/tpcloud/img_156.png)

- Create a rule to block IP 10.0.24.10 to 11.0.0.10. On the distributed firewall tab, select new.

![TPCLOUD Portal](/images/tpcloud/img_157.png)

Enter the parameters according to your intended use.

![TPCLOUD Portal](/images/tpcloud/img_158.png)

Test the distributed firewall rule: we can see that the ping from 10.0.24.10 to 11.0.0.10 has been blocked.

![TPCLOUD Portal](/images/tpcloud/img_159.png)
