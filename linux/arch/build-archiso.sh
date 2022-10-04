#!/bin/bash

# Making directory structure
mkdir ~/ArchLiveISO
mkdir -p ~/ArchLiveISO/{out,work}

# Create baseline
pacman -Syu --noconfirm
pacman -S archiso --noconfirm
cp -r /usr/share/archiso/configs/baseline ~/ArchLiveISO

# Create build script
echo "#!/bin/bash" > ~/ArchLiveISO/build.sh
echo "rm -r work/*" >> ~/ArchLiveISO/build.sh
echo "rm -r out/*" >> ~/ArchLiveISO/build.sh
echo "pacman -Scc --noconfirm" >> ~/ArchLiveISO/build.sh
echo "mkarchiso -v -w work -o out baseline" >> ~/ArchLiveISO/build.sh
chmod +x ~/ArchLiveISO/build.sh

# Configurations
echo "LANG=hu_HU.UTF-8" > ~/ArchLiveISO/baseline/airootfs/etc/locale.conf

# Packages to install
echo "xorg-server" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "xorg-xinit" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "xorg-xrandr" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "xorg-xsetroot" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "nitrogen" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "picom" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "webkit2gtk" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "mesa" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "xf86-video-ati" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "zsh" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "networkmanager" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "vim" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "git" >> ~/ArchLiveISO/baseline/packages.x86_64
echo "firefox" >> ~/ArchLiveISO/baseline/packages.x86_64

# Installing dwm
ORIGINAL_PATH=$(pwd)
ROOT=~/ArchLiveISO/baseline/airootfs/root

mkdir -p $ROOT

cd $ROOT
git clone https://git.suckless.org/dwm
cd $ROOT/dwm
make

cd $ROOT
git clone https://git.suckless.org/dmenu
cd $ROOT/dmenu
make

cd $ROOT
git clone https://git.suckless.org/st
cd $ROOT/st
make

cd $ORIGINAL_PATH
