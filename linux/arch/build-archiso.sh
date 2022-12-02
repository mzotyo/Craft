#!/bin/bash

ARCH_LIVE=~/ArchLiveISO
ROOT=$ARCH_LIVE/baseline/airootfs/root

# ------------------------------------------------------------------------------
# Making directory structure
# ------------------------------------------------------------------------------
mkdir $ARCH_LIVE
mkdir -p $ARCH_LIVE/{out,work}

# ------------------------------------------------------------------------------
# Create baseline
# ------------------------------------------------------------------------------
pacman -Syu --noconfirm
pacman -S archiso --noconfirm
cp -r /usr/share/archiso/configs/baseline $ARCH_LIVE

# ------------------------------------------------------------------------------
# Create build script
# ------------------------------------------------------------------------------
echo "#!/bin/bash" > $ARCH_LIVE/build.sh
echo "rm -r work/*" >> $ARCH_LIVE/build.sh
echo "rm -r out/*" >> $ARCH_LIVE/build.sh
echo "pacman -Scc --noconfirm" >> $ARCH_LIVE/build.sh
echo "mkarchiso -v -w work -o out baseline" >> $ARCH_LIVE/build.sh
chmod +x $ARCH_LIVE/build.sh

# ------------------------------------------------------------------------------
# Configurations
# ------------------------------------------------------------------------------
echo "LANG=hu_HU.UTF-8" > $ARCH_LIVE/baseline/airootfs/etc/locale.conf

# ------------------------------------------------------------------------------
# Packages to install
# ------------------------------------------------------------------------------
PACKAGES=$ARCH_LIVE/baseline/packages.x86_64
echo "xorg-server" >> $PACKAGES
echo "xorg-xinit" >> $PACKAGES
echo "xorg-xrandr" >> $PACKAGES
echo "xorg-xsetroot" >> $PACKAGES
echo "nitrogen" >> $PACKAGES
echo "picom" >> $PACKAGES
echo "webkit2gtk" >> $PACKAGES
echo "mesa" >> $PACKAGES
echo "xf86-video-ati" >> $PACKAGES
echo "zsh" >> $PACKAGES
echo "networkmanager" >> $PACKAGES
echo "vim" >> $PACKAGES
echo "git" >> $PACKAGES
echo "firefox" >> $PACKAGES

# ------------------------------------------------------------------------------
# Installing dwm, dmenu, st
# ------------------------------------------------------------------------------
ORIGINAL_PATH=$(pwd)
LOCAL_BIN=$ARCH_LIVE/baseline/airootfs/usr/local/bin

mkdir -p $ROOT
mkdir -p $ROOT/../usr/local/bin

cd $ROOT
git clone https://git.suckless.org/dwm
cd $ROOT/dwm
make
cp dwm $LOCAL_BIN

cd $ROOT
git clone https://git.suckless.org/dmenu
cd $ROOT/dmenu
make
cp dmenu $LOCAL_BIN
cp dmenu_path $LOCAL_BIN
cp dmenu_run $LOCAL_BIN
cp stest $LOCAL_BIN

cd $ROOT
git clone https://git.suckless.org/st

cd $ROOT/st
make
cp st $LOCAL_BIN

cd $ORIGINAL_PATH

# .xinitrc
XINITRC=$ARCH_LIVE/baseline/airootfs/.xinitrc

echo "#!/bin/sh" > $XINITRC

echo "userresources=$HOME/.Xresources" >> $XINITRC
echo "usermodmap=$HOME/.Xmodmap" >> $XINITRC
echo "sysresources=/etc/X11/xinit/.Xresources" >> $XINITRC
echo "sysmodmap=/etc/X11/xinit/.Xmodmap" >> $XINITRC

echo "if [ -f $sysresources ]; then" >> $XINITRC
echo "    xrdb -merge $sysresources" >> $XINITRC
echo "fi" >> $XINITRC

echo "if [ -f $sysmodmap ]; then" >> $XINITRC
echo "    xmodmap $sysmodmap" >> $XINITRC
echo "fi" >> $XINITRC

echo "if [ -f \"$userresources\" ]; then" >> $XINITRC
echo "    xrdb -merge "$userresources"" >> $XINITRC
echo "fi" >> $XINITRC

echo "if [ -f \"$usermodmap\" ]; then" >> $XINITRC
echo "    xmodmap \"$usermodmap\"" >> $XINITRC
echo "fi" >> $XINITRC

echo "if [ -d /etc/X11/xinit/xinitrc.d ] ; then" >> $XINITRC
echo " for f in /etc/X11/xinit/xinitrc.d/?*.sh ; do" >> $XINITRC
echo "  [ -x \"$f\" ] && . \"$f\"" >> $XINITRC
echo " done" >> $XINITRC
echo " unset f" >> $XINITRC
echo "fi" >> $XINITRC

echo "setxkbmap hu -model \"pc101\" -variant \"101_qwerty_comma_dead\"  &" >> $XINITRC
echo "xrandr --output Virtual-1 --mode 1920x1080 &" >> $XINITRC
echo "picom -f &" >> $XINITRC
echo "nitrogen --restore &" >> $XINITRC
echo "exec dwm" >> $XINITRC
