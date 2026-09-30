---
title: "3. Creating and managing VMs"
---

Creating VMs from ISO files and Templates (Ubuntu, Windows Server), managing VM configuration and snapshots.

## 3.1 - VM from ISO {#vm-tu-iso}

Installing from an ISO file allows the administrator to customize the installation from the start, from the operating system version to the bundled components and software. This is very useful when you want detailed control over the installation process and have special system requirements. To create a virtual machine from an ISO file, perform the following steps:

- On the VM management page, select NEW VM.

![TPCLOUD Portal](/images/tpcloud/img_046.png)

Enter the Name and Computer Name information.

Set Type to New to install from an ISO file.

Untick Power on so that, after setup is complete, the VM is in the off state and you can enable the CPU and RAM hot-add feature.

- Select the Operating System matching the OS of the VM to be installed.

![TPCLOUD Portal](/images/tpcloud/img_047.png)

Leave the Boot Options parameters at default.

Compute: enter configuration parameters matching your usage needs.

Storage: leave the Storage Policy at default and enter the hard disk capacity as needed in the size field.

![TPCLOUD Portal](/images/tpcloud/img_048.png)

- Under Networking, select the Network to be used and adjust the parameters according to your usage needs.

![TPCLOUD Portal](/images/tpcloud/img_049.png)

- After completing the configuration parameters, click OK to proceed with creating the VM.

![TPCLOUD Portal](/images/tpcloud/img_050.jpeg)

- Enable the Virtual CPU hot add and Memory hot add features to allow the VM to hot-add CPU and RAM while the VM is running.
- On the VM, click DETAILS. Then select Compute → EDIT.

![TPCLOUD Portal](/images/tpcloud/img_051.png)

- In the Edit Compute window, enable the Virtual CPU hot add and Memory hot add features and click SAVE to save.

![TPCLOUD Portal](/images/tpcloud/img_052.jpeg)

- Select VM Console to open the web console interface to install the OS for the VM.

![TPCLOUD Portal](/images/tpcloud/img_053.png)

Perform the VM OS installation steps to complete the installation process.

![TPCLOUD Portal](/images/tpcloud/img_054.png)

## 3.2 - VM from Template {#vm-tu-template}

Templates are usually standardized according to configurations that have been tested and approved. This helps ensure consistency between VMs, thereby minimizing errors caused by configuration differences or mistakes from manual setup.

Creating a VM from a template helps deploy the system quickly without having to install the operating system manually. This is very beneficial when many VMs with similar configurations need to be deployed. The TPCLOUD Portal already has pre-built templates for the Windows Server and Ubuntu operating systems.

### 3.2.1 - Ubuntu from Template {#vm-ubuntu-template}

To create a VM from a template, perform the following steps:

- On the vApp management page, select NEW → Add vApp From Catalog.

![TPCLOUD Portal](/images/tpcloud/img_055.png)

- In the Create vApp from Template window, select the Template according to your needs, then click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_056.png)

- In the Select Name window, enter the vApp name in the Name field.

![TPCLOUD Portal](/images/tpcloud/img_057.png)

- In the Configure Resources window, enter the VM name in the Virtual Machine field.

![TPCLOUD Portal](/images/tpcloud/img_058.png)

- In the Compute Policies window, adjust the Ram/Memory parameters according to your usage needs.

![TPCLOUD Portal](/images/tpcloud/img_059.png)

- In the Customize Hardware window, enter the Computer Name and the VM hard disk capacity in the Hard Disks field.

![TPCLOUD Portal](/images/tpcloud/img_060.png)

In the vApp Networking window, adjust the following information:

- Network Type: select Direct (this is the Routed Network created in 2.2.2 CREATING A ROUTED NETWORK).
- Organization VDC Network connection: select the desired network.
- Enable the Configure VM Networking option to customize the network configuration.

![TPCLOUD Portal](/images/tpcloud/img_061.png)

- In the VM Networking window, set up the IP for the VM.

![TPCLOUD Portal](/images/tpcloud/img_062.png)

- In the Custom Properties window, enter A Unique Instance ID for this instance and enter the password for the first login in Default User&#x27;s password.

![TPCLOUD Portal](/images/tpcloud/img_063.png)

Finally, review the information and click FINISH to complete the installation process.

![TPCLOUD Portal](/images/tpcloud/img_064.png)

- After the VM is created, open the VM and go to the web console to configure the VM.

![TPCLOUD Portal](/images/tpcloud/img_065.jpeg)

The default user to log in to the VM is ubuntu. Change the password at the first login as required by the system.

![TPCLOUD Portal](/images/tpcloud/img_066.png)

- Enable ssh using a user account: Note: to be able to ssh into the VM from outside, you need to create a DNAT rule on the Edge Gateway (See section 5.2.2 configuring DNAT).

Switch to the root user with the command sudo -i

![TPCLOUD Portal](/images/tpcloud/img_067.png)

- Open the path “vim /etc/ssh/sshd_config.d/60-cloudimg-settings.conf”, change “PasswordAuthentication no” to “PasswordAuthentication yes”, save it, then restart the ssh service.

![TPCLOUD Portal](/images/tpcloud/img_068.png)

Enable ssh using the root user:

Set the root user password: use the command “passwd root”.

![TPCLOUD Portal](/images/tpcloud/img_069.png)

- Open the path “vim /etc/ssh/sshd_config”, uncomment the line “PermitRootLogin prohibit-password” and change it to “PermitRootLogin yes”, then save it and restart the ssh service.

![TPCLOUD Portal](/images/tpcloud/img_070.png)

Expanding the disk when creating an Ubuntu VM from a Template:

The current capacity is 50GB.

![TPCLOUD Portal](/images/tpcloud/img_071.png)

![TPCLOUD Portal](/images/tpcloud/img_072.png)

![TPCLOUD Portal](/images/tpcloud/img_073.png)

- On the Cloud Portal, increase the capacity to 100 GB.

![TPCLOUD Portal](/images/tpcloud/img_074.png)

Identify the partition to be increased as sda, then run the following command to rescan the disk: “echo 1>/sys/class/block/sda/device/rescan”.

![TPCLOUD Portal](/images/tpcloud/img_075.png)

Run the following command to expand the sda1 partition: “growpart /dev/sda 1”.

![TPCLOUD Portal](/images/tpcloud/img_076.png)

Resize the file system with the command “resize2fs /dev/sda1” and check that the capacity has been increased.

![TPCLOUD Portal](/images/tpcloud/img_077.png)

### 3.2.2 - Windows Server from Template {#vm-windows-template}

- On the vApp management page, select NEW → Add vApp From Catalog and select the Windows version you want to install.

![TPCLOUD Portal](/images/tpcloud/img_078.png)

In Select name, enter the vApp name in the Name field.

![TPCLOUD Portal](/images/tpcloud/img_079.png)

- In the Configure Resources window, enter the VM name in the Virtual Machine field.

![TPCLOUD Portal](/images/tpcloud/img_080.png)

- In the Compute Policies window, adjust the Ram/Memory parameters according to your usage needs.

![TPCLOUD Portal](/images/tpcloud/img_081.png)

- In the Customize Hardware window, enter the Computer Name and the VM hard disk capacity in the Hard Disks field.

![TPCLOUD Portal](/images/tpcloud/img_082.png)

In the vApp Networking window, adjust the following information:

- Network Type: select Direct (this is the Routed Network created in 2.2.2 CREATING A ROUTED NETWORK).
- Organization VDC Network connection: select the desired network.
- Enable the Configure VM Networking option to customize the network configuration.

![TPCLOUD Portal](/images/tpcloud/img_083.png)

- In the VM Networking window, set up the IP for the VM.

![TPCLOUD Portal](/images/tpcloud/img_084.png)

Review the information and click FINISH to complete the installation process.

![TPCLOUD Portal](/images/tpcloud/img_085.png)

- After the VM is created, power on the VM and go to the web console to set up the VM.

![TPCLOUD Portal](/images/tpcloud/img_086.jpeg)

Customize the initial settings for the VM:

- Click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_087.png)

- Click Accept.

![TPCLOUD Portal](/images/tpcloud/img_088.png)

Set a password for the VM and click FINISH.

![TPCLOUD Portal](/images/tpcloud/img_089.png)

Log in to the VM with the password you just set.

![TPCLOUD Portal](/images/tpcloud/img_090.jpeg)

Note: a Windows Server VM installed from a template needs the C drive expanded, using the capacity adjusted in the Hard Disks section:

- In the Server Manager window, select Tools → Computer Management.

![TPCLOUD Portal](/images/tpcloud/img_091.png)

- In the Computer Management window, select Disk Management.

![TPCLOUD Portal](/images/tpcloud/img_092.png)

Right-click the C drive partition and select Extend Volume.

![TPCLOUD Portal](/images/tpcloud/img_093.png)

- In the Welcome to the Extend Volume Wizard window, click NEXT.

![TPCLOUD Portal](/images/tpcloud/img_094.png)

Leave it at default and click NEXT if you want to use all free space for the C drive, or customize as needed.

![TPCLOUD Portal](/images/tpcloud/img_095.png)

- Click FINISH to complete the disk extension process.

![TPCLOUD Portal](/images/tpcloud/img_096.png)

The C drive capacity has been extended.

![TPCLOUD Portal](/images/tpcloud/img_097.png)

## 3.3 - Managing VMs {#quan-ly-vm}

- To perform basic management operations on a VM, click DETAILS on the VM.

![TPCLOUD Portal](/images/tpcloud/img_098.png)

### 3.3.1 - VM network card {#vm-nic}

- To edit the VM network card, go to NICs → EDIT.

![TPCLOUD Portal](/images/tpcloud/img_099.png)

- Select NEW to add a network card.

Primary NIC: select the primary network card.

Tick Connected to connect the network card to the VM.

Adapter type: select VMXNET 3.

- IP mode: select DHCP mode if DHCP has been configured (see section 2.2.3), or select Static - Manual mode if you want to assign a specific IP to the VM.

IP: enter the specific IP address if the IP mode is set to Static - Manual.

- To delete a network card, tick the corresponding network card and click DELETE.

![TPCLOUD Portal](/images/tpcloud/img_100.png)

### 3.3.2 - Disk capacity {#vm-disk}

- To edit the VM capacity, go to Hard Disks → EDIT.

![TPCLOUD Portal](/images/tpcloud/img_101.png)

- To add a new disk, select ADD.

Size: customize the capacity as needed.

Policy: leave at default.

- To delete a disk, select the icon corresponding to the disk to be deleted.

![TPCLOUD Portal](/images/tpcloud/img_102.png)

### 3.3.3 - CPU & RAM {#vm-compute}

- To edit the CPU and RAM configuration of the VM, go to Compute → EDIT.

![TPCLOUD Portal](/images/tpcloud/img_103.png)

- In the Edit Compute window, you can configure CPU, Cores per socket, and Memory.
- Enable the Virtual CPU hot add and Memory hot add options to be able to hot-add CPU and RAM while the VM is running. (Note: to enable this feature, the VM must be in the Off state.)

![TPCLOUD Portal](/images/tpcloud/img_104.png)

### 3.3.4 - Snapshot {#vm-snapshot}

A snapshot is a backup copy of the state of a VM at a given point in time. It records all data related to the VM at that moment, including configuration, memory, and disk files. Snapshots are not a long-term backup solution; they are suitable for short-term backups and should usually be deleted after the necessary changes are complete. The default number of snapshots in the system is one; if the user needs to increase the number of snapshots, please contact TPCOMS for support. To create a snapshot, select Snapshots → TAKE SNAPSHOT or ACTIONS → Snapshot > Create Snapshot.

![TPCLOUD Portal](/images/tpcloud/img_105.png)

Name the snapshot, then click CREATE.

![TPCLOUD Portal](/images/tpcloud/img_106.png)

- After creating a snapshot, on the snapshot management page you can perform additional operations such as EDIT, DELETE, REVERT, etc. on the snapshots.

![TPCLOUD Portal](/images/tpcloud/img_107.jpeg)
