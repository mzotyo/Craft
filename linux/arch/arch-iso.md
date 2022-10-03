# Creating custom Arch ISO

## Prerequisites
```shell
pacman -S archiso
```

## Build environment
```shell
mkdir -p ~/ArchLiveISO
mkdir -p ~/ArchLiveISO/{out,work}

cp -r /usr/share/archiso/configs/baseline ~/ArchLiveISO

touch ~/ArchLiveISO/build.sh
chmod +x ~/ArchLiveISO/build.sh
```

**build.sh**
```shell
#!/bin/bash

rm -r work/*
rm -r out/*

pacman -Scc --noconfirm

mkarchiso -v -w work -o out baseline
```

## Customizing Baseline

### General settings

**airootfs/etc/locale.conf**
```shell
LANG=hu_HU.UTF-8
```

### Packages

**packages.x86_64**
```
base
cloud-init
hyperv
linux
mkinitcpio
mkinitcpio-archiso
open-vm-tools
openssh
pv
qemu-guest-agent
syslinux
virtualbox-guest-utils-nox

xorg-server
xorg-xinit
xorg-xrandr
xorg-xsetroot
nitrogen
picom
webkit2gtk

mesa
xf86-video-ati

zsh
networkmanager

vim
git

firefox
```

### Copying binaries

**dwm, dmenu, st, stest**
```shell
cp /usr/local/bin/dwm baseline/airootfs/usr/local/bin/
cp /usr/local/bin/dmenu baseline/airootfs/usr/local/bin/
cp /usr/local/bin/dmenu_path baseline/airootfs/usr/local/bin/
cp /usr/local/bin/dmenu_run baseline/airootfs/usr/local/bin/
cp /usr/local/bin/stest baseline/airootfs/usr/local/bin/
cp /usr/local/bin/st baseline/airootfs/usr/local/bin/
```

### DWM
```shell
mkdir ~/ArchLiveISO/airootfs/usr/local/bin
cp /ust/local/bin/dwm ~/ArchLiveISO/airootfs/usr/local/bin

mkdir ~/ArchLiveISO/airootfs/root
touch ~/ArchLiveISO/airootfs/root/.xinitrc
```
**.bashrc**
```shell
# scripts to run after login
```

**.xinitrc**
```shell
#!/bin/sh

userresources=$HOME/.Xresources
usermodmap=$HOME/.Xmodmap
sysresources=/etc/X11/xinit/.Xresources
sysmodmap=/etc/X11/xinit/.Xmodmap

# merge in defaults and keymaps
if [ -f $sysresources ]; then
    xrdb -merge $sysresources
fi

if [ -f $sysmodmap ]; then
    xmodmap $sysmodmap
fi

if [ -f "$userresources" ]; then
    xrdb -merge "$userresources"
fi

if [ -f "$usermodmap" ]; then
    xmodmap "$usermodmap"
fi

# start some nice programs
if [ -d /etc/X11/xinit/xinitrc.d ] ; then
 for f in /etc/X11/xinit/xinitrc.d/?*.sh ; do
  [ -x "$f" ] && . "$f"
 done
 unset f
fi

# ------------------------------------------------------------------------------
# CUSTOM SETTINGS:
# ------------------------------------------------------------------------------

# Keyboard Layout
setxkbmap hu -model "pc101" -variant "101_qwerty_comma_dead"  &

# Display Resolution
# xrandr --output Virtual-1 --mode 1920x1080 &
xrandr --output Virtual-1 --auto &

# Compositor
picom -f &

# Set wallpaper
nitrogen --restore &

# Execute DWM
exec dwm
```

### Pacman repository

```shell
cp /etc/pacman.conf baseline/airootfs/etc
cp /etc/pacman.d baseline/airootfs/etc -r
```

### Shell (zsh)

```shell
cp /etc/passwd ~/ArchLiveISO/airootfs/etc
cp ~/.zcompdump baseline/airootfs/root/
cp ~/.zcompdump-virt-development-5.9 baseline/airootfs/root/
cp ~/.zcompdump-virt-development-5.9.zwc baseline/airootfs/root/
cp ~/.zsh_history baseline/airootfs/root/
cp ~/.zshrc baseline/airootfs/root/
cp ~/.zshrc.pre-oh-my-zsh baseline/airootfs/root/
cp ~/.shell.pre-oh-my-zsh baseline/airootfs/root/
cp -r ~/.oh-my-zsh baseline/airootfs/root/
```

**etc/passwd**
```
t:x:0:0::/root:/usr/bin/zsh
bin:x:1:1::/:/usr/bin/nologin
daemon:x:2:2::/:/usr/bin/nologin
dbus:x:81:81:System Message Bus:/:/usr/bin/nologin
systemd-coredump:x:981:981:systemd Core Dumper:/:/usr/bin/nologin
systemd-network:x:980:980:systemd Network Management:/:/usr/bin/nologin
systemd-oom:x:979:979:systemd Userspace OOM Killer:/:/usr/bin/nologin
systemd-journal-remote:x:978:978:systemd Journal Remote:/:/usr/bin/nologin
systemd-resolve:x:977:977:systemd Resolver:/:/usr/bin/nologin
systemd-timesync:x:976:976:systemd Time Synchronization:/:/usr/bin/nologin
tss:x:975:975:tss user for tpm2:/:/usr/bin/nologin
uuidd:x:68:68::/:/usr/bin/nologin
git:x:974:974:git daemon user:/:/usr/bin/git-shell
avahi:x:973:973:Avahi mDNS/DNS-SD daemon:/:/usr/bin/nologin
polkitd:x:102:102:PolicyKit daemon:/:/usr/bin/nologin
```

### Background image

```shell
mkdir baseline/airootfs/Backgrounds
cp ~/Backgorunds/some-image.jpg baseline/airootfs/root/Backgrounds/default-image.jpg

mkdir -p baseline/airootfs/root/.config/nitrogen
touch baseline/airootfs/root/.config/nitrogen/nitorgen.cfg
touch baseline/airootfs/root/.config/nitrogen/bg-saved.cfg
```

**nitrogen.cfg**
```
[geometry]
posx=0
posy=0
sizex=1918
sizey=1078

[nitrogen]
view=icon
recurse=true
sort=alpha
icon_caps=false
dirs=/root/Backgrounds;
```

**bg-saved.cfg**
```
[xin_-1]
file=/root/Backgrounds/default-image.jpg
mode=5
bgcolor=#000000
```

### Application configuration files

#### vim

```shell
cp ~/.vimrc baseline/airootfs/root/
cp -r ~/.vim baseline/airootfs/root/
cp -r ~/.ssh baseline/airootfs/root
```

seline/airootfs/root/.config/nitrogen
### File access rights

**baseline/profiledef.sh**
```bash
...
file_permissions=(
    ...
    ["/usr/local/bin/dwm"]="0:0:500"
    ["/usr/local/bin/dmenu"]="0:0:500"
    ["/usr/local/bin/dmenu_path"]="0:0:500"
    ["/usr/local/bin/dmenu_run"]="0:0:500"
    ["/usr/local/bin/stest"]="0:0:500"
    ["/usr/local/bin/st"]="0:0:500"
    ["/root/.ssh/id_rsa"]="0:0:600"
    ["/root/.ssh/known_hosts"]="0:0:600"
)
...
```

### Craft repository

```shell
 cd ~/Craft
 git checkout init

 mkdir -p baseline/airootfs/root/Craft
 cp -r ~/Craft/.git baseline/airootfs/root/Craft
 cp ~/.gitconfig baseline/airootfs/root
 ```

### Users & Rights
