# Installing Arch Linux
[sourse](https://wiki.archlinux.org/index.php/Installation_guide#Boot_the_live_environment)

## Install base system

### Set keyboard layout
View existing keyboard layouts

```bash
ls /usr/share/kbd/keymaps/**/*.map.gz
```

Load keymap

```bash
loadkeys hu101loadkeys
```

### Verify the boot mode
If following command returns anything the boot mode is *UEFI* otherwise or also if the directories do not exist, then the system may booted in *BIOS*.

```bash
ls /sys/firmware/efi/efivars
```

> If the *OS* is installed on VirtualBox and *UEFI* boot is desired then it must be enabled.

### Test internet connection
`ping archlinux.org`

### Update the system clock
`timedatectl set-ntp true`

### Partition the disks
List all available hardwares 

```bash
fdisk -l
```
	
Format the first hardware 

```bash
fdisk /dev/sda
```

 - press *g* to create *GPT* partition
 - press *n* to create a new partition with size: +550M (boot partition)
 - press *n* to create a new partition with size: +4G (swap partition, the size of the swap is equal to the size of the *RAM* in the machine)
 - press *n* to create a new partition with the remaining size. (root partition)
 - press *t* to change the type of the first partition to: *EFI System* (1)
 - press *t* to change the type of the second partition to: *swap* (19)
 - Third partition type is by default a *Linux* type. It should not be set.
 - press *w* to store changes

### Format the partitions
First partition (FAT32)

```bash
mkfs.fat -F32 /dev/sda1
```

Second partition (swap)

```bash
mkswap /dev/sda2
```

Third partition (ext4)

```bash
mkfs.ext4 /dev/sda3
```

### Mount the file sytem

```bash
swapon /dev/sda2
mount /dev/sda3 /mnt
```

### Install essential packages
`pacstrap /mnt base linux linux-firmware`

### Configure the system

#### Fstab
`genfstab -U /mn	>> /mnt/etc/fstab`

#### Chroot
`arch-chroot /mnt`

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
`mkinitcpio -P`

#### Root password
`passwd`

#### Boot loader
Install *grub*

```bash
pacman -S grub efibootmgr dosfstools os-prober mtools
```

Create *EIF* directory

```bash
mkdir /boot/EFI
```

Mount *EFI* partition

```bash
mount /dev/sda1 /boot/EFI
```

Install *grub* to  *boot* partition

```bash
grub-install --target=x86_64-efi --bootloader-id=grub_uefi --recheck
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
reboot
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
