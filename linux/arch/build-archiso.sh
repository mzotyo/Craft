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
echo "" >> $PACKAGES
echo "xorg-server" >> $PACKAGES
echo "xorg-xinit" >> $PACKAGES
echo "xorg-xrandr" >> $PACKAGES
echo "xorg-xsetroot" >> $PACKAGES
echo "nitrogen" >> $PACKAGES
echo "picom" >> $PACKAGES
echo "webkit2gtk" >> $PACKAGES

echo "" >> $PACKAGES
echo "mesa" >> $PACKAGES
echo "xf86-video-ati" >> $PACKAGES

echo "" >> $PACKAGES
echo "zsh" >> $PACKAGES

echo "" >> $PACKAGES
echo "networkmanager" >> $PACKAGES

echo "" >> $PACKAGES
echo "vim" >> $PACKAGES
echo "git" >> $PACKAGES

echo "" >> $PACKAGES
echo "firefox" >> $PACKAGES
echo "zsh" >> $PACKAGES

# ------------------------------------------------------------------------------
# Installing dwm, dmenu, st
# ------------------------------------------------------------------------------
ORIGINAL_PATH=$(pwd)
LOCAL_BIN=$ARCH_LIVE/baseline/airootfs/usr/local/bin

mkdir -p $ROOT
mkdir -p $ROOT/../usr/local/bin

# ------------------------------------------------------------------------------
# dwm
cd $ROOT
git clone https://git.suckless.org/dwm
cd $ROOT/dwm
make
cp dwm $LOCAL_BIN

# ------------------------------------------------------------------------------
# dmenu
cd $ROOT
git clone https://git.suckless.org/dmenu
cd $ROOT/dmenu
make
cp dmenu $LOCAL_BIN
cp dmenu_path $LOCAL_BIN
cp dmenu_run $LOCAL_BIN
cp stest $LOCAL_BIN

# ------------------------------------------------------------------------------
# st
cd $ROOT
git clone https://git.suckless.org/st
cd $ROOT/st
CONFIG_H=config.def.h
# Change font size
sed -i 's/pixelsize=12/pixelsize=16/' $CONFIG_H
# Configure zsh as shell
sed -i 's/\/bin\/sh/\/bin\/zsh/' $CONFIG_H
make
cp st $LOCAL_BIN
cd $ORIGINAL_PATH

# ------------------------------------------------------------------------------
# Git repositories
# ------------------------------------------------------------------------------
cp ~/Craft $ROOT -r

# ------------------------------------------------------------------------------
# profile.sh
# ------------------------------------------------------------------------------
SHADOW='\["\/etc\/shadow"\]="0:0:400"'
DWM='\["\/usr\/local\/bin\/dwm"\]="0:0:500"'
DMENU='\["\/usr\/local\/bin\/dmenu"\]="0:0:500"'
DMENU_PATH='\["\/usr\/local\/bin\/dmenu_path"\]="0:0:500"'
DMENU_RUN='\["\/usr\/local\/bin\/dmenu_run"\]="0:0:500"'
STEST='\["\/usr\/local\/bin\/stest"\]="0:0:500"'
ST='\["\/usr\/local\/bin\/st"\]="0:0:500"'
ID_RSA='\["\/root\/.ssh\/id_rsa"\]="0:0:600"'
KNOWN_HOSTS='\["\/root\/.ssh\/known_hosts"\]="0:0:600"'

sed -i 's/  '$SHADOW'/\t'$SHADOW'\
 '$DWM'\
 '$DMENU'\
 '$DMENU_PATH'\
 '$DMENU_RUN'\
 '$STEST'\
 '$ST'\
 '$ID_RSA'\
 '$KNOWN_HOSTS'\
 /'\
 $ARCH_LIVE/baseline/profiledef.sh

# ------------------------------------------------------------------------------
# .xinitrc
# ------------------------------------------------------------------------------
XINITRC=$ARCH_LIVE/baseline/airootfs/root/.xinitrc

echo "#!/bin/sh" > $XINITRC
echo "" >> $XINITRC

echo "userresources=$HOME/.Xresources" >> $XINITRC
echo "usermodmap=$HOME/.Xmodmap" >> $XINITRC
echo "sysresources=/etc/X11/xinit/.Xresources" >> $XINITRC
echo "sysmodmap=/etc/X11/xinit/.Xmodmap" >> $XINITRC
echo "" >> $XINITRC

echo "# merge in defaults and keymaps" >> $XINITRC
echo "if [ -f \$sysresources ]; then" >> $XINITRC
echo "    xrdb -merge \$sysresources" >> $XINITRC
echo "fi" >> $XINITRC
echo "" >> $XINITRC

echo "if [ -f \$sysmodmap ]; then" >> $XINITRC
echo "    xmodmap \$sysmodmap" >> $XINITRC
echo "fi" >> $XINITRC
echo "" >> $XINITRC

echo "if [ -f \"\$userresources\" ]; then" >> $XINITRC
echo "    xrdb -merge \"\$userresources\"" >> $XINITRC
echo "fi" >> $XINITRC
echo "" >> $XINITRC

echo "if [ -f \"\$usermodmap\" ]; then" >> $XINITRC
echo "    xmodmap \"\$usermodmap\"" >> $XINITRC
echo "fi" >> $XINITRC
echo "" >> $XINITRC

echo "# start some nice programs" >> $XINITRC
echo "if [ -d /etc/X11/xinit/xinitrc.d ] ; then" >> $XINITRC
echo " for f in /etc/X11/xinit/xinitrc.d/?*.sh ; do" >> $XINITRC
echo "  [ -x \"$f\" ] && . \"$f\"" >> $XINITRC
echo " done" >> $XINITRC
echo " unset f" >> $XINITRC
echo "fi" >> $XINITRC
echo "" >> $XINITRC

echo "# Keyboard Layout" >> $XINITRC
echo "setxkbmap hu -model \"pc101\" -variant \"101_qwerty_comma_dead\"  &" >> $XINITRC
echo "" >> $XINITRC

echo "# Display Resolution" >> $XINITRC
echo "xrandr --output Virtual-1 --mode 1920x1080 &" >> $XINITRC
echo 'xsetroot -name "Arch Linux"' >> $XINITRC
echo "" >> $XINITRC

echo "# Compositor" >> $XINITRC
echo "picom -f &" >> $XINITRC
echo "" >> $XINITRC

echo "# Set wallpaper" >> $XINITRC
echo "nitrogen --restore &" >> $XINITRC
echo "" >> $XINITRC

echo "# Execute DWM" >> $XINITRC
echo "exec dwm" >> $XINITRC

# ------------------------------------------------------------------------------
# config files
# ------------------------------------------------------------------------------
HOME_FOLDER=$ARCH_LIVE/baseline/airootfs/root
cp ~/.config $HOME_FOLDER -r
cp ~/.oh-my-zsh $HOME_FOLDER -r
cp ~/.ssh $HOME_FOLDER -r
cp ~/.vim $HOME_FOLDER -r
cp ~/.gitconfig $HOME_FOLDER
cp ~/.shell.pre-oh-my-zsh $HOME_FOLDER
cp ~/.vimrc $HOME_FOLDER
cp ~/.zcompdump $HOME_FOLDER
cp ~/.zcompdump-virt-development-5.9 $HOME_FOLDER
cp ~/.zcompdump-virt-development-5.9.zwc $HOME_FOLDER
cp ~/.zsh_history $HOME_FOLDER
cp ~/.zshrc $HOME_FOLDER
cp ~/.zshrc.pre-oh-my-zsh $HOME_FOLDER

# ------------------------------------------------------------------------------
# .bashrc
# ------------------------------------------------------------------------------

BASHRC=$ARCH_LIVE/baseline/airootfs/root/.bashrc

echo "exec zsh" > $BASHRC
echo "chsh -s $(which zsh)" >> $BASHRC
echo "" >> $BASHRC
