## Installing Arch Linux
[sourse](https://wiki.archlinux.org/index.php/Installation_guide#Boot_the_live_environment)

### Install base system

**Set keyboard layout**

View existing hungarian keyboard layouts
```bash
# ls /usr/share/kbd/keymaps/**/*.map.gz | grep hu
```

Load keymap
```bash
loadkeys hu101
```


**Test internet connection**
```bash
ping archlinux.org
```

**Update the system clock**
```bash
timedatectl set-ntp true
```

**Partition the disks**

List all available hardwares
```bash
fdisk -l
```

Format the first hardware
```bash
fdisk /dev/sda
```

Create partitions
- press *o* create a new empty DOS partition table
- press *n* to create a new partition with size: +4G (swap partition, the size of the swap is equal to the size of the *RAM* in the machine)
- press *n* to create a new partition with the remaining size. (root partition)
- press *t* to change the type of the first partition to: *Linux swap* (82)
- The second partition type is by default a *Linux* (83) type. It should not be set.
- press *a* to set first partition to bootable
- press *w* to store changes

Format the partitions
- First partition (swap)
    ```bash
    mkswap /dev/sda2
    ```

- Second partition (ext4)
    ```bash
    mkfs.ext4 /dev/sda1
    ```

**Mount the file sytem**
```bash
swapon /dev/sda2
mount /dev/sda1 /mnt
```

**Install essential packages**
```bash
pacstrap /mnt base linux linux-firmware
```

**Configure the system**

Configure *fstab*
```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

Chroot into the new partition
```bash
arch-chroot /mnt
```

**Time zone**

List available time zones
```bash
# ls /usr/share/zoneinfo
# ls /usr/share/zoneinfo/Europe
```

Change time zone
```bash
ln -sf /usr/share/zoneinfo/Europe/Bucharest /etc/localtime
hwclock --systohc
```

**Localization**

Edit the `/etc/locale.gen` file, uncomment the `hu_HU.UTF-8 UTF-8` line. To edit the file nano should be installed first.
```bash
pacman -S vim
vim /etc/locale.gen
```
Generate locales by runnin the command
```bash
locale-gen
```

Create the `/etc/locale.conf`
```bash
vim /etc/locale.conf
# LANG=hu_HU.UTF-8
```

Create the `/etc/vconsole.conf`
```bash
vim /etc/vconsole.conf
# KEYMAP=hu101
```

**Network configuration**
```bash
vim /etc/hostname
# arch-vbox

vim /etc/hosts
# 127.0.0.1		localhost
# ::1			localhost
# 127.0.1.1		arch-vbox.localdomain arch-vbox
```

**Inint ramfs**
```bash
mkinitcpio -P
```

**Root password**
```bash
passwd
```

**Grub Boot loader**

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

**Network manager**
```bash
pacman -S networkmanager

# enable network manager
systemctl enable NetworkManager
```

**Virtual Box Guest Additions**
```bash
pacman -S virtualbox-guest-utils
systemctl enable vboxservice
usermod -aG vboxsf root
```

**Reboot**
```bash
exit
umount -R /mnt
shutdown -h now
```

### Additional settings

**Mount shared folder**
```bash
mkdir /mnt/Host
mount -t vboxsf Host /mnt/Host
```

**Add new user**
```bash
# add user
useradd -m arch

# set password
passwd arch

# add user to groups
usermod -aG wheel,audio,video,optical,storage,vboxsf arch

# install sudo
pacman -S sudo

# add sudo rights for wheel group
nvim /etc/sudoers

# uncomment: %wheel ..
```

**For formatting fat and ntfs filesystems**
```bash
pacman -S dosfstools ntfsprogs

# For example
# makefs -t vfat /dev/sdb1
```

**Add *NTFS* support**
```bash
pacman -S ntfs-3g
```


**Setup a firewall** ([source](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server))
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

### Basic command line tools

**File managers**
```bash
pacman -S vifm
# pacman -S mc
```

**System monitoring**
```bash
pacman -S htop
```
### Basic applications

**Web browsers**
```bash
pacman -S lynx
# pacman -S netsurf
# pacman -S firefox
```
