---
title: "1. Using the TPCLOUD Portal"
---

Logging in to the Portal and creating OrgVDC Networks: Isolated Network, Routed Network, and DHCP configuration.

The TPCLOUD Portal is the interface used to administer the TPCOMS Cloud service. It supports basic operations such as configuring networks, creating and managing VMs, as well as tasks related to user management and system monitoring... The Portal interface offers many new and user-friendly features. The basic Cloud Portal workflow diagram:

![TPCLOUD Portal](/images/tpcloud/img_001.png)

## 1.1 - Logging in {#dang-nhap}

Access the TPCLOUD Portal using the URL and login credentials provided by TPCOMS via email. The access URL has the format:

`https://console-01.tpcloud.vn/tenant/organization_name`

Where organization_name is changed according to the customer&#x27;s information. Each customer is separated into a distinct entity commonly called an Organization. Resources are organized into separate Virtual Data Centers (VDC) for each customer.

- After accessing the login page provided by TPCOMS, the user enters the User name and Password provided by TPCOMS via email.

![TPCLOUD Portal](/images/tpcloud/img_002.jpeg)

- After logging in successfully, from the main administration screen the user can view general parameters of the virtual Datacenter such as: Site, vApp, VM, allocated resources, used resources, etc.

![TPCLOUD Portal](/images/tpcloud/img_003.png)

## 1.2 - OrgVDC Network {#orgvdc-network}

The network type supports 2 connection modes:

- Isolated: an internally isolated mode between VMs, with no connection to the outside at all.
- Routed: connected to the vFirewall/VLB; VMs access the external network in a controlled manner through NAT and Firewall rules.

### 1.2.1 - Isolated Network {#isolated-network}

Steps to create an Isolated Network:

- In the TPCLOUD Portal, select Networking → Networks → NEW.

![TPCLOUD Portal](/images/tpcloud/img_004.png)

- In the New Organization VDC Network window, under Scope, select the Organization VDC where the network is to be created, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_005.jpeg)

- Under Network Type, select the type as Isolated, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_006.png)

- Under General, enter the Name and Gateway CIDR, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_007.png)

- Under Static IP Pools, enter the Static IP Pool ranges if needed, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_008.png)

- Under DNS, enter the DNS, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_009.png)

- Under Ready to Complete, review the network information just configured, then click FINISH to complete the network creation process.

![TPCLOUD Portal](/images/tpcloud/img_010.png)

Once created, the user will see a new network added to the network list.

![TPCLOUD Portal](/images/tpcloud/img_011.png)

### 1.2.2 - Routed Network {#routed-network}

A Routed Network is a network created for use by VMs within a VDC or VDC group. They are managed through the Edge Gateway.

The Edge Gateway acts as a virtual router that manages the networks attached to it and also provides services such as Firewall, NAT, Routing, VPN, Load Balancer, etc. It is provided free of charge to users by TPCOMS. Steps to create a Routed Network:

- In the TPCLOUD Portal, select Networking → Networks → NEW.

![TPCLOUD Portal](/images/tpcloud/img_012.png)

- In the New Organization VDC Network window, under Scope, select the Organization VDC where the network is to be created, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_013.png)

- Under Network Type, select the Type as Routed, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_014.png)

- Under Edge Connection, select the Edge that this network connects to, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_015.png)

- Under General, enter the network Name and Gateway CIDR, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_016.png)

- Under Static IP Pools, enter the static IP Pool range you want to configure, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_017.png)

- Under DNS, configure the DNS, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_018.png)

- Under Ready to Complete, review the previously configured information and click FINISH to complete the network creation process.

![TPCLOUD Portal](/images/tpcloud/img_019.png)

- After completing the Routed Network creation, the newly created routed network will appear in the network list.

![TPCLOUD Portal](/images/tpcloud/img_020.png)

### 1.2.3 - Configuring DHCP {#cau-hinh-dhcp}

To configure DHCP, perform the following steps:

- On the network management page, select the network for which DHCP is to be configured.

![TPCLOUD Portal](/images/tpcloud/img_021.jpeg)

![TPCLOUD Portal](/images/tpcloud/img_022.png)

- Under General Settings, configure the DHCP Mode by selecting Gateway, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_023.jpeg)

- Under DHCP Pools, click add and enter the IP pool range, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_024.png)

- Under DNS through DHCP, enter the DNS Server, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_025.png)

Review the configuration, then click FINISH to complete the DHCP configuration.

![TPCLOUD Portal](/images/tpcloud/img_026.png)

DHCP has been configured for NETWORK-ROUTED.

![TPCLOUD Portal](/images/tpcloud/img_027.png)
