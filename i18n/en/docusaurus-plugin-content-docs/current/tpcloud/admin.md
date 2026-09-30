---
title: "6. Managing users and monitoring"
---

Managing users and tracking tasks and events on the Cloud Portal.

## 6.1 - Managing users {#quan-ly-user}

- To add/delete/edit users that log in to the vCloud Portal, from the administration interface select the menu Administration → Users.

![TPCLOUD Portal](/images/tpcloud/img_160.jpeg)

To create a new user, click NEW:

Enter the name and password in the Username and Password fields, and the personal information in the Contact Info section.

- Select the role in the Available Role section. Typically, the highest role is selected: Organization Administrator.

![TPCLOUD Portal](/images/tpcloud/img_161.png)

The user has been created.

![TPCLOUD Portal](/images/tpcloud/img_162.png)

## 6.2 - Managing tasks {#quan-ly-task}

A Task is a list of actions or requests that the user has performed or that the system has initiated. Each task represents a specific process, such as creating a virtual machine, updating network configuration, or migrating resources, etc. To access task management on the Cloud Portal, select Monitor → Tasks. Tasks provide detailed information about each task, including:

Task: describes the type of task such as creating a vApp, deleting a virtual machine, updating configuration, etc.

Status: the status of the task, such as Running, Succeeded, or Failed.

Type: helps classify tasks related to different types of resources such as vm, gateway, vapp, network, etc.

Initiator: the user or account that initiated the task.

Start time, Completion time: records the timestamps when the task was initiated and when it completed or encountered an error.

![TPCLOUD Portal](/images/tpcloud/img_163.png)

## 6.3 - Managing events {#quan-ly-event}

An Event is an activity or notification related to the system or resources on the Portal. Events provide details about events such as:

Description: provides a detailed description of the event that occurred, including information about the user and the action performed.

Status: the status of the event, such as Running, Succeeded, or Failed.

Type: helps classify the action of the event related to different types of resources such as user, task, gateway, etc.

Target: the object affected by the action.

Owner: the owner or account that performed the action.

Occurred At: records the time the event occurred. To access Events management on the Cloud Portal, select Monitor → Events.

![TPCLOUD Portal](/images/tpcloud/img_164.png)
