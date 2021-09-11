# Installing Arch Linux
[sourse](https://wiki.archlinux.org/index.php/Installation_guide#Boot_the_live_environment)

## Install base system

### Set keyboard layout
View existing hungarian keyboard layouts

```bash
ls /usr/share/kbd/keymaps/**/*.map.gz | grep hu
```

Load keymap

```bash
loadkeys hu101
```


### Test internet connection
```bash
ping archlinux.org
```

### Update the system clock
```bash
timedatectl set-ntp true
```

### Partition the disks
List all available hardwares 

```bash
fdisk -l
```
	
Format the first hardware 

```bash
fdisk /dev/sda
```

 - *o* create a new empty DOS partition table
 - press *n* to create a new partition with size: +4G (swap partition, the size of the swap is equal to the size of the *RAM* in the machine)
 - press *n* to create a new partition with the remaining size. (root partition)
 - press *t* to change the type of the first partition to: *Linux swap* (19)
 - The second partition type is by default a *Linux* (20) type. It should not be set.
 - press *w* to store changes

### Format the partitions
First partition (swap)

```bash
mkswap /dev/sda1
```

Second partition (ext4)

```bash
mkfs.ext4 /dev/sda2
```

### Mount the file sytem

```bash
swapon /dev/sda1
mount /dev/sda2 /mnt
```

### Install essential packages
```bash
pacstrap /mnt base linux

# linux-firmware on virtualbox is optional
pacstrap /mnt linux-firmware
```

### Configure the system

Configure *fstab*
```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

Chroot into the new partition
```bash
arch-chroot /mnt
```

#### Time zone
List available time zones

```bash
ls /usr/share/zoneinfo
ls /usr/share/zoneinfo/Europe
```

Change time zone

```bash
ln -sf /usr/share/zoneinfo/Europe/Bucharest /etc/localtime
hwclock --systohc
```

#### Localization
Edit the ```/etc/locale.gen``` file, uncomment the ```hu_HU.UTF-8 UTF-8``` line. To edit the file nano should be installed first.

```bash
pacman -S nano
nano /etc/locale.gen
```

Generate locales by runnin the command

```bash
locale-gen
```

Create the `/etc/locale.conf`
 
```bash
nano /etc/locale.conf
# LANG=hu_HU.UTF-8
```

Create the `/etc/vconsole.conf`

```bash
nano /etc/vconsole.conf
# KEYMAP=hu101
```

#### Network configuration

```bash
nano /etc/hostname
# arch-vbox

nano /etc/hosts
# 127.0.0.1		localhost
# ::1			localhost
# 127.0.1.1		arch-vbox.localdomain arch-vbox
```

#### Inint ramfs
```bash
mkinitcpio -P
```

#### Root password
```bash
passwd
```

#### Boot loader
Install *grub* application

```bash
pacman -S grub
```

Install the *grub* bootloader

```bash
grub-install --target=i386-pc /dev/sda
```

Create *grub* configuration file

```bash 
grub-mkconfig -o /boot/grub/grub.cfg
```

### Install additionals

Network manager

```bash
pacman -S networkmanager
```

### Reboot

```bash
exit
umount -R /mnt
shutdown -h now
```

## Install Desktop Environment

### Install Graphics Driver
`pacman -S xf86-video-intel`

### Install Xorg server
`pacman -S xorg`

### Display Manager 

#### Install Gnome

```bash 
pacman -S gnome
systemctl enable gdm
```

## Additional settings

Autostart *NetworkManager*

```bash
systemctl enable NetworkManager.service
```

Add new user

```bash
# add user
useradd -m arch

# set password
passwd arch

# add user to groups
usermod -aG wheel,audio,video,optical,storage arch
```

Add *NTFS* support

`pacman -S ntfs-3g`

Setup a firewall ([source](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server))

```bash
# install
pacman -S ufw

# enable on startup
systemctl enable ufw 
systemctl start ufw
systemctl status ufw

# configure
ufw default deny incoming
ufw default allow outgoing

# install gui
pacman -S gufw
```
