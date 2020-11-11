# Tool Guide

- [vmtop](#vmtop)

## vmtop

### Overview
vmtop is a user-mode tool running on the host machine. You can use the vmtop tool to dynamically view the usage of VM resources in real time, such as CPU usage, memory usage, and the number of vCPU traps. Therefore, the vmtop tool can be used to locate virtualization problems and optimize performance.

The vmtop monitoring items are as follows (sampling difference: difference between two data obtained at a specified interval):
- VM/task-name: VM/Process name
- DID: VM ID
- PID: PID of the qemu process of the VM
- %CPU: CPU usage of a process
- EXThvc: Number of hvc-exits (sampling difference)
- EXTwfe: Number of wfe-exits (sampling difference)
- EXTwfi: Number of wfi-exits (sampling difference)
- EXTmmioU: Number of mmioU-exits (sampling difference)
- EXTmmioK: Number of mmioK-exits (sampling difference)
- EXTfp: Number of fp-exits (sampling difference)
- EXTirq: Number of irq-exits (sampling difference)
- EXTsys64: Number of sys64 exits (sampling difference)
- EXTmabt: Number of mem abort exits (sampling difference)
- EXTsum: Total number of KVM exits (sampling difference)
- S: Process status
- P: Physical CPU usage of a process
- %ST: Ratio of the preemption time to the CPU running time (KVM data)
- %GUE: Ratio of the VM internal occupation time to the CPU running time (KVM data)
- %HYP: Virtualization overhead ratio (KVM data)

### Usage
vmtop is a command line tool. You can directly run the vmtop in command line mode.
In addition, the vmtop tool provides different options for querying different information.

#### Syntax
```sh
vmtop [option]
```

#### Option Description
- -d: sets the refresh interval, in seconds.
- -H: displays the VM thread information.
- -n: sets the number of refresh times and exits after the refresh is complete.
- -b: displays Batch mode, which can be used to redirect to a file.
- -h: displays help information.
- -v: displays versions.

#### Keyboard Shortcut
Shortcut key used when the vmtop is running.
- H: displays or stops the VM thread information. The information is displayed by default.
- up/down: moves the VM list upwards or downwards.
- left/right: moves the cursor leftwards or rightwards to display the columns that are hidden due to the screen width.
- f: enters the editing mode of a monitoring item and selects the monitoring item to be enabled.
- q: exits the vmtop process.

### Example
Run the vmtop command on the host.
```sh
vmtop
```
The command output is as follows:
```sh
vmtop - 2020-09-14 09:54:48 - 1.0
Domains: 1 running

  DID  VM/task-name     PID  %CPU    EXThvc    EXTwfe    EXTwfi  EXTmmioU  EXTmmioK     EXTfp    EXTirq  EXTsys64   EXTmabt    EXTsum    S    P   %ST  %GUE  %HYP
    2       example 4054916  13.0         0         0      1206        10         0       144        62       174         0      1452    S  106   0.0  99.7  16.0
```
As shown in the output, there is only one VM named "example" on the host. The ID is 2. The CPU usage is 13.0%. The total number of traps within one second is 1452. The physical CPU occupied by the VM process is CPU 106. The ratio of the VM internal occupation time to the CPU running time is 99.7%.

1. Display VM thread information.
Press H to display the thread information.
```sh
vmtop - 2020-09-14 10:11:27 - 1.0
Domains: 1 running

  DID  VM/task-name     PID  %CPU    EXThvc    EXTwfe    EXTwfi  EXTmmioU  EXTmmioK     EXTfp    EXTirq  EXTsys64   EXTmabt    EXTsum    S    P   %ST  %GUE  %HYP
    2       example 4054916  13.0         0         0	   1191        17         4       120        76       147         0      1435    S  119   0.0 123.7   4.0
   |_      qemu-kvm 4054916   0.0         0         0         0         0         0         0         0         0         0         0    S  119   0.0   0.0   0.0
   |_      qemu-kvm 4054928   0.0         0         0         0         0         0         0         0         0         0         0    S  119   0.0   0.0   0.0
   |_  signalfd_com 4054929   0.0         0         0         0         0         0         0         0         0         0         0    S  120   0.0   0.0   0.0
   |_  IO mon_iothr 4054932   0.0         0         0         0         0         0         0         0         0         0         0    S  117   0.0   0.0   0.0
   |_     CPU 0/KVM 4054933   3.0         0         0       280         6         4        28        19        41         0       350    S  105   0.0  27.9   0.0
   |_     CPU 1/KVM 4054934   3.0         0         0       260         0         0        16        12        36         0       308    S   31   0.0  20.0   0.0
   |_     CPU 2/KVM 4054935   3.0         0         0       341         0         0        44        20        26         0       387    R  108   0.0  27.9   4.0
   |_     CPU 3/KVM 4054936   5.0         0         0       310        11         0        32        25        44         0       390    S  103   0.0  47.9   0.0
   |_   memory_lock 4054940   0.0         0         0         0         0         0         0         0         0         0         0    S  126   0.0   0.0   0.0
   |_    vnc_worker 4054944   0.0         0         0         0         0         0         0         0         0         0         0    S  118   0.0   0.0   0.0
   |_        worker 4143738   0.0         0         0         0         0         0         0         0         0         0         0    S  120   0.0   0.0   0.0
```
The example VM has 11 threads, including the vCPU thread, vnc_worker, and IO mon_iotreads. Each thread also displays detailed CPU usage and trap information.

2. Select the monitoring item.
Enter f to edit the monitoring item.
```sh
field filter - select which field to be showed
Use up/down to navigate, use space to set whether chosen filed to be showed
'q' to quit to normal display

 * DID
 * VM/task-name
 * PID
 * %CPU
 * EXThvc
 * EXTwfe
 * EXTwfi
 * EXTmmioU
 * EXTmmioK
 * EXTfp
 * EXTirq
 * EXTsys64
 * EXTmabt
 * EXTsum
 * S
 * P
 * %ST
 * %GUE
 * %HYP
```
By default, all monitoring items are displayed. You can press the up or down key to select a monitoring item. Press the space bar to set the monitoring item, and press q to exit.
After %ST, %GUE, and %HYP are hidden, the following information is displayed:
```sh
vmtop - 2020-09-14 10:23:25 - 1.0
Domains: 1 running

  DID  VM/task-name     PID  %CPU    EXThvc    EXTwfe    EXTwfi  EXTmmioU  EXTmmioK     EXTfp    EXTirq  EXTsys64   EXTmabt    EXTsum    S    P
    2       example 4054916  12.0         0         0      1213        14         1       144        68       168         0      1464    S  125
   |_	   qemu-kvm 4054916   0.0         0         0         0         0         0         0         0         0         0         0    S  125
   |_	   qemu-kvm 4054928   0.0         0         0         0         0         0         0         0         0         0         0    S  119
   |_  signalfd_com 4054929   0.0         0         0         0         0         0         0         0         0         0         0    S  120
   |_  IO mon_iothr 4054932   0.0         0         0         0         0         0         0         0         0         0         0    S  117
   |_     CPU 0/KVM 4054933   2.0         0         0       303         6         0        29        10        35         0       354    S   98
   |_     CPU 1/KVM 4054934   4.0         0         0       279         0         0        39        17        49         0       345    S    1
   |_     CPU 2/KVM 4054935   3.0         0         0       283         0         0        33        20        40         0       343    S  122
   |_     CPU 3/KVM 4054936   3.0         0         0       348         8         1        43        21        44         0       422    S  110
   |_   memory_lock 4054940   0.0         0         0         0         0         0         0         0         0         0         0    S  126
   |_    vnc_worker 4054944   0.0         0         0         0         0         0         0         0         0         0         0    S  118
   |_        worker    1794   0.0         0         0         0         0         0         0         0         0         0         0    S  126
```
%ST, %GUE, and %HYP will not be displayed on the screen.
