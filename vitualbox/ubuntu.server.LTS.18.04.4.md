# Install Virtual Box
1. Download: [ubuntu-18.04.4-live-server-amd64.iso](http://www.mirrorservice.org/sites/releases.ubuntu.com/18.04.4/ubuntu-18.04.4-live-server-amd64.iso)

2. Create a new **Ubuntu 64 bit** virtual machine. Leave every settings on default.

3. Username: developer Password: developer

## Insert Guest Additions
1. Click on the menu: **Device / Insert Guest Additions CD image ...**

```bash
sudo mount /dev/cdrom /mnt
cd /mnt
sudo apt-get install -y dkms build-essential linux-headers-generic linux-headers-$(uname -r)
sudo su
./VboxLinuxAdditions.run
reboot
```
[source](https://virtualzero.net/blog/how-to-install-virtualbox-guest-additions-in-ubuntu-server-18.04-lts)
	
## Install basic apps
```bash
sudo apt-get install vim -y
```

## Maker a restore ponit to the linux environment
From the **Oracle VM VirtualBox Manager** crate a snapshot with a title. E.x. **Clean install**

