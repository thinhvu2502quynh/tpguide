---
title: "4. Edge Gateway"
---

Configuring Firewall, NAT, IPSec VPN and the Load Balancer on the Edge Gateway.

The Edge Gateway acts as a virtual router that manages the networks attached to it and also provides services such as Firewall, NAT, Routing, VPN, Load Balancer, etc. It is provided free of charge to users by TPCOMS. To configure services on the Edge Gateway, select Networking → Edge Gateways → select the Edge Gateway to configure.

![TPCLOUD Portal](/images/tpcloud/img_108.png)

## 4.1 - Firewall rule {#firewall}

To create a firewall rule, the user performs the following steps:

- On the Edge Gateway service management page, select Firewall → Rules → NEW.

![TPCLOUD Portal](/images/tpcloud/img_109.png)

- In the New Rule window, enter the firewall rule name and click the icon to set up some basic configurations to match your usage needs.

![TPCLOUD Portal](/images/tpcloud/img_110.png)

Configure Applications to identify the specific application whose traffic needs to be controlled based on IP or port.

![TPCLOUD Portal](/images/tpcloud/img_111.png)

The Source section identifies the source IP address or IP range to which the rule applies.

![TPCLOUD Portal](/images/tpcloud/img_112.png)

The Destination section identifies the destination IP address or IP range to which the rule applies.

![TPCLOUD Portal](/images/tpcloud/img_113.png)

Firewall rule configured.

![TPCLOUD Portal](/images/tpcloud/img_114.png)

## 4.2 - NAT rule {#nat}



### 4.2.1 - SNAT rule {#snat}

SNAT is used to manage outbound traffic from the internal network to the outside, allowing virtual machines in a private network to connect to public networks or other external networks. To create an SNAT rule, the user performs the following steps:

- On the Edge Gateway service management page, select NAT → NEW.

![TPCLOUD Portal](/images/tpcloud/img_115.png)

- In the Add NAT Rule window, set a Name for the NAT rule.

For NAT Action, select SNAT.

For External IP, enter the public IP of the Edge Gateway.

Internal IP is the IP that needs to reach the network.

- After completing the basic configuration information, click SAVE to save.

![TPCLOUD Portal](/images/tpcloud/img_116.png)

The SNAT rule has been created.

![TPCLOUD Portal](/images/tpcloud/img_117.png)

### 4.2.2 - DNAT rule {#dnat}

DNAT allows machines or applications outside the internal network to access a specific virtual machine or service inside the internal network by using a public IP address. To create a DNAT rule, the user performs the following steps:

- On the Edge Gateway service management page, select NAT → NEW.

![TPCLOUD Portal](/images/tpcloud/img_118.png)

- In the Add NAT Rule window, set a Name for the NAT rule.

For NAT Action, select DNAT.

For External IP, enter the public IP of the Edge Gateway.

For External Port, enter the port number you want to access from outside.

For Internal IP, enter the IP that is translated after NAT.

For Application, click the icon and select the service you want to access.

![TPCLOUD Portal](/images/tpcloud/img_119.png)

- After completing the basic configuration information, click SAVE to save.

![TPCLOUD Portal](/images/tpcloud/img_120.png)

The DNAT rule has been created.

![TPCLOUD Portal](/images/tpcloud/img_121.png)

For an Application Port that is not available in the Application list, you can create it as follows:

- On the Edge Gateway service management page, select Application Port Profiles → NEW.

![TPCLOUD Portal](/images/tpcloud/img_122.png)

- In the New Application Port Profile window, enter the Name, select the Protocol, and enter the port number, then click SAVE to save.

![TPCLOUD Portal](/images/tpcloud/img_123.png)

The Application Port has been created.

![TPCLOUD Portal](/images/tpcloud/img_124.png)

## 4.3 - IPSec VPN {#ipsec-vpn}

IPSec VPN is a security technology used to create a secure connection between two networks over the internet or any public network. IPSec is a set of standard protocols used to secure data transmitted over IP networks, providing features such as encryption, authentication, and data integrity. Below are the steps to set up an IPSec VPN connection:

- On the Edge Gateway service management page, select IPSec VPN → NEW.

![TPCLOUD Portal](/images/tpcloud/img_125.png)

- In the General Settings window, enter the Name, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_126.png)

- In the Peer Authentication Mode window, select Pre-Shared Key, enter the key shared between the two sites, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_127.png)

- In the Endpoint Configuration window. For the Local Endpoint, enter the IP Address and Network of the current site. For the Remote Endpoint, enter the IP Address and Network of the site you want to connect to, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_128.png)

- In the Ready To Complete window, review the configuration and click FINISH.

![TPCLOUD Portal](/images/tpcloud/img_129.png)

Configure the Customize Security Profile. Click the icon of the IPSec VPN rule you just created and select Customize Security Profile.

![TPCLOUD Portal](/images/tpcloud/img_130.png)

Adjust the encryption parameters so they match between the two sites, then click SAVE.

![TPCLOUD Portal](/images/tpcloud/img_131.png)

Proceed to configure the VPN at the customer site and check the connection status.

## 4.4 - Load Balancer {#load-balancer}

The Load Balancer allows users to distribute traffic among virtual machines, thereby ensuring that services are always available.

With the TPCOMS Load Balancer service, the system is integrated with the Advanced Load Balancer (ALB) - a powerful integrated service that provides advanced load balancing and traffic management features for applications deployed in the vCD environment. ALB helps optimize performance, enhance application availability, and ensure flexible scalability in the multi-tenant environment of vCD. By default, the system&#x27;s Load Balancer feature is in the Inactive state; please contact TPCOMS if you wish to use it. To configure the Load Balancer, perform the following steps:

### 4.4.1 - Server Pool {#server-pool}

A Server Pool is a set of virtual machines configured to handle requests from a Virtual Service. To create a Server Pool, perform the following steps:

- On the Edge Gateway service management page, select Load Balancer → Pools → ADD.

![TPCLOUD Portal](/images/tpcloud/img_132.png)

In the Add Load Balancer Pool window, on the General Settings tab, configure the following basic parameters:

Name: set a name for the Server Pool.

Load Balancer Algorithm: select the algorithm for distributing the traffic of the VMs.

Default Server Port: set the corresponding service port.

![TPCLOUD Portal](/images/tpcloud/img_133.png)

- On the Members tab, add the IPs of the VMs belonging to the pool that you want to run the load balancer.

![TPCLOUD Portal](/images/tpcloud/img_134.png)

- After completing the configuration, click SAVE to save.

![TPCLOUD Portal](/images/tpcloud/img_135.png)

### 4.4.2 - Virtual Services {#virtual-services}

A Virtual Service is a virtual service that the Load Balancer uses to distribute traffic to the servers. Virtual Services help route traffic efficiently and ensure that services or applications are always available and operate stably. To create a Virtual Service, perform the following steps: Select Load Balancer → Virtual Services → ADD.

![TPCLOUD Portal](/images/tpcloud/img_136.png)

In the Add Virtual Service window, configure the following basic parameters:

Name: set the Virtual Service name.

Service Type: select the type of service configured for the Virtual Service and specify the protocol or network layer that the service will use for load balancing.

Service Engine Group: the Service Engines that will be responsible for processing and load balancing. Select the Service Engine that TPCOMS has pre-added on the Cloud Portal.

![TPCLOUD Portal](/images/tpcloud/img_137.png)

Load Balancer Pool: select the corresponding server pool configured previously.

![TPCLOUD Portal](/images/tpcloud/img_138.jpeg)

IPv4 Virtual IP: enter the IP address that the Load Balancer will represent to receive traffic from clients and then distribute it to the VMs in the Server Pool.

TCP Proxy: enter the port corresponding to the running service.

![TPCLOUD Portal](/images/tpcloud/img_139.png)

- After completing the configuration, click SAVE to save.

![TPCLOUD Portal](/images/tpcloud/img_140.png)

Configure similarly for the HTTPS service port - 443 and check the status of the Server Pool and Virtual Service.

![TPCLOUD Portal](/images/tpcloud/img_141.png)

![TPCLOUD Portal](/images/tpcloud/img_142.jpeg)

- Create a DNAT rule to access the Virtual IP through the public IP.

![TPCLOUD Portal](/images/tpcloud/img_143.png)

Proceed to add the record, then test access via the public route.

![TPCLOUD Portal](/images/tpcloud/img_144.png)

![TPCLOUD Portal](/images/tpcloud/img_145.png)
