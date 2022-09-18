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

mkarchiso -v -w work -o out baseline
```

## Customizing Baseline

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

networkmanager
```

### General settings

**airootfs/etc/locale.conf**
```shell
LANG=hu_HU.UTF-8
```

### Users & Rights

### File access rights

### DWM
```shell
mkdir ~/ArchLiveISO/airootfs/usr/local/bin
cp /ust/local/bin/dwm ~/ArchLiveISO/airootfs/usr/local/bin

mkdir ~/ArchLiveISO/airootfs/root
touch ~/ArchLiveISO/airootfs/root/.xinitrc
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

**baseline/profiledef.sh**
```bash
...
file_permissions=(
    ...
    ["/usr/local/bin/dwm"]="0:0:500"
    ["/usr/local/bin/dmenu"]="0:0:500"
    ["/usr/local/bin/dmenu_path"]="0:0:500"
    ["/usr/local/bin/dmenu_run"]="0:0:500"
)
...
```
