# Install Guide for Arch Linux

List available key maps
```bash
ls /usr/share/kbd/keymaps/**/*.map.gz | grep hu
```

Load the preferred keymap
```bash
loadkeys hu101
```

Connect to the insternet
```bash
ip link
ping archlinux.org
```

Update system clock
```bash
timedatectl set-ntp true
```

Disk partitioning
```bash
# List partitions
fdisk -l

# Partitioning a given disk
fdisk /dev/sda

# Commands executed on the fdisk
0 - create a new empty DOS partition table

n - add new partition
p - primary partition
2 - second partition, on the default sector 2048, with size 4096K

t - change a partition type
2 - second partition
L - list all available options
82 - swap

n - add new partition
p - primary partition
1 - first partition, on default sector, with default (remaining) size

t - change a partition type
1 - first partition
L - list all available options
83 - Linux

a - toggle boot flag
1 - first partition

p - print the partition table
w - write table to disk and exit
```

Format partitions
```bash
mkfs.ext4 /dev/sda1
mkswap /dev/sda2
```

Mount the file system
```bash
mount /dev/sda1 /mnt
swapon /dev/sda2
```

Install essential packages
```bash
pacstrap /mnt base linux linux-firmware
```

Install *grub*
```bash
pacman -S grub dosfstools os-prober mtools
grub-install --target=i386-pc /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg
```

Configure the system
```bash
genfstab -U /mnt >> /mnt/etc/fstab

arch-chroot /mnt

ln -sf /usr/share/zoninfo/Europe/Bucharest /etc/localtime
hwclock --systohc

pacman -S vim

locale-gen
vim /etc/locale.conf
#LANG=hu_HU.UTF-8
vim /etc/vconsole.conf
# KEYMAP=hu101

vim /etc/hostname
# arch

passwd
exit
reboot
```
