---
title: "2. Creating and managing vApps"
---

A vApp is a logical unit that allows different VMs and resources to be managed as a single unit, making deployment, startup, and management simpler.

## 2.1 - Create a new vApp {#tao-vapp}

CREATING A NEW vApp

To create a vApp, perform the following steps:

- On the CLOUD Portal interface, select Applications → Virtual Applications → NEW VAPP.

![TPCLOUD Portal](/images/tpcloud/img_028.png)

- In the Select Target Virtual Data Center window, select the ORGVDC where the vApp is to be created, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_029.png)

- In the New vApp window, enter the vApp Name, enter a Description (if needed), tick the Power on check box if you want the vApp to be powered on after creation, then click CREATE.

![TPCLOUD Portal](/images/tpcloud/img_030.png)

- After creating the vApp, the user will see the newly created vApp appear in the vApp list.

![TPCLOUD Portal](/images/tpcloud/img_031.jpeg)

## 2.2 - vApp from OVF {#vapp-ovf}

CREATING A vApp FROM AN OVF FILE

Files packaged in OVF format make it easy to deploy virtual machines on different platforms without reconfiguration, saving time while minimizing errors caused by incompatibility. With this method, you need to download the OVF file to the local machine in advance. To create a vApp from an OVF file, perform the following steps:

- On the vApp management page, select NEW → Add vApp From OVF.

![TPCLOUD Portal](/images/tpcloud/img_032.jpeg)

- Select the ORGVDC-NAME, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_033.png)

- In the Create a vApp from An OVF file window, click the icon to select the source OVF for creating the vApp.

![TPCLOUD Portal](/images/tpcloud/img_034.png)

- Select the OVF file → click Open.

![TPCLOUD Portal](/images/tpcloud/img_035.png)

- After selecting the OVF file, proceed to configure the remaining steps to complete the vApp creation.

![TPCLOUD Portal](/images/tpcloud/img_036.png)

- VM created by vApp From OVF.

![TPCLOUD Portal](/images/tpcloud/img_037.png)

## 2.3 - vApp from Catalog {#vapp-catalog}

CREATING A vApp FROM A CATALOG

vApp Templates are standard versions stored in the Catalog, pre-created by the provider. vApp Templates include operating systems, software, and configurations that have been tested.

Deploying from a Catalog allows users to quickly deploy a complete vApp from pre-tested and prepared templates. The vApps always maintain consistency in configuration and features, helping to minimize errors and ensure that all users work on the same standard platform. To create a vApp from a Catalog, perform the following steps:

- On the vApp management page, select NEW → Add vApp From Catalog.

![TPCLOUD Portal](/images/tpcloud/img_038.png)

- In the Create vApp from Template window, select the Template according to your needs, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_039.jpeg)

Proceed with the next configuration steps depending on the setup of each Template to complete the vApp creation process.

![TPCLOUD Portal](/images/tpcloud/img_040.png)

- VM created by vApp From Catalog.

![TPCLOUD Portal](/images/tpcloud/img_041.jpeg)

## 2.4 - Add network to vApp {#them-network-vapp}

ADDING AN ORGVDC NETWORK TO A vApp

Adding a Network to a vApp allows the VMs belonging to the vApp to use it. The steps to add a network to a vApp are as follows:

- On the vApp, select ACTIONS → Add → Add Network.

![TPCLOUD Portal](/images/tpcloud/img_042.jpeg)

- In the Add Network window, select the vApp Network type as Direct → tick the network to be added to the vApp, then click ADD.

![TPCLOUD Portal](/images/tpcloud/img_043.png)

- After adding the network to the vApp, the user can view the networks on the vApp by selecting DETAILS of the vApp.

![TPCLOUD Portal](/images/tpcloud/img_044.jpeg)

- Select the Networks tab to view the networks on the vApp, where you can also edit and configure the network in this interface.

![TPCLOUD Portal](/images/tpcloud/img_045.png)
