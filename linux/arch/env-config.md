## Configure Arch linux environment

### Command line tools

**Terminal multiplexer**
```bash
pacman -S tmux
```

**Image viewer**
```bash
# feh
# feh -F
pacman -S feh
```

### Basic applications

**Web browsers**
```bash
pacman -S lynx
# pacman -S netsurf
# pacman -S firefox
```

### Development environment


**Git version manager**
```bash
pacman -S git
```

Git configuration
```bash
git config --global user.name "John Doe"
git config --global user.email "asghtr@freemail.com"
git config --global core.editor vim
```

Generating ssh key for personal github access
```bash
# The generated ssh key should be added to the github account as authorized
# ssh key.
ssh-keygen -t rsa -b 4096 - C "asghtr@freemail.com"
```

**Compilers**

Base development stuff
```bash
pacman -S base-devel cmake make unzip ninja tree-sitter curl, wget
```
JavaScrip, TypeScript
```bash
pacman -S nodejs
pacman -S npm
```
Java
```bash
pacman -S jdk18-openjdk
pacman -S maven
```
Markdown to pdf, doc or html
```bash
pacman -S pandoc
pacman -F pdflatex      # will show us that the pdflatex is in the texlive-bin package
pacman -S texlive-bin
pacman -S texlive-core
```
Python
```bash
pacman -S python
```

### SSH access

**OpenSSH**

For generating ssh keys
```bash
pacman -S  openssh
```

Starting SSH service
```bash
# systemctl status sshd
# systemctl start sshd
systemctl enable sshd
```
**SSH access for virtualbox**

port forward from Vritualox:<br>
guest: 22 -> host: 10.0.2.15:22

Add hosts public ssh key to the authorized keys<br>
Host machine public key: id_rsa.pub
```bash
mount -t vboxsf Host /mnt
cp /mnt/id_rsa.pub ~/.ssh/authorized_keys
```
### Graphical user interface

Dwm window manager
```bash
pacman -S xorg-server xorg-xinit xorg-xrandr xorg-xsetroot
```

Rendering background
```bash
pacman -S nitrogen
```

Window compositor: transparency, transition animations, shadows ...
```bash
pacman -S picom
```

I don't know what is it for but it's needed to start dwm. At least in virtual-box
```bash
pacman -S webkit2gtk
```

Install graphical card driver
```bash
pacman -S mesa
pacman -S xf86-video-ati
```

**UI configuration**
```bash
cp /etc/X11/xinit/xinitrc .xinitrc
```

vim .xinitrc
```
# Keyboard Layout
setxkbmap hu -model "pc101" -variant "101_qwerty_comma_dead"  &

# Display Resolution
xrandr --output Virtual-1 --mode 1920x1080 &

# Compositor
picom -f &

# Set wallpaper
nitrogen --restore &

# Execute DWM
exec dwm
```

**Suckless apps**

Install dwm from suckless
```bash
git clone https://git.suckless.org/dwm
cd dwn
make clean install
# make unsinstall
```

Install siple terminal from suckless
```bash
git clone https://git.suckless.org/st
cd st
make clean install
# make uninstall
# Increase font size to 13
```

Install dmenu from suckless
```bash
git clone https://git.suckless.org/dmenu
cd dmenu
make clean install
# make uninstall
```

**Starting the graphical user interface**
```bash
startx
```

**Reboot**
```bash
reboot
```
