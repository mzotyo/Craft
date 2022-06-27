# -----------------------------------------------------------------------------
# Text editor
pacman -S vim

# -----------------------------------------------------------------------------
# For generating ssh keys
pacman -S  openssh

# systemctl status sshd
systemctl start sshd
systemctl enable sshd

# port forward from Vritualox
# guest: 22 -> host: 10.0.2.15:22

# Add hosts public ssh key to the authorized keys
mount -t vboxsf Host /mnt
cp /mnt/id_rsa.pub ~/.ssh/authorized_keys

# Generating ssh key for personal github access
ssh-keygen -t rsa -b 4096 - C "asghtr@freemail.com"

# -----------------------------------------------------------------------------
# For formatting fat and ntfs filesystems
pacman -S dosfstools ntfsprogs

# For example
# makefs -t vfat /dev/sdb1

# -----------------------------------------------------------------------------
# Version manager
pacman -S git

# Git configuration
git config --global user.name "John Doe"
git config --global user.email "asghtr@freemail.com"
git config --global core.editor vim

# -----------------------------------------------------------------------------
# Tmux
pacman -S tmux

# -----------------------------------------------------------------------------
# Midnight Commander
pacman -S mc

# -----------------------------------------------------------------------------
# Links web browser
pacman -S links

# -----------------------------------------------------------------------------
# Command line tools
pacman -S htop

# -----------------------------------------------------------------------------
# Development environment

# JavaScrip, TypeScript
pacman -S nodejs
pacman -S npm

# Java
pacman -S jdk17-openjdk
pacman -S maven

# Markdown to pdf, doc or html
pacman -S pandoc

# -----------------------------------------------------------------------------
# Prerequisits to build stuff
pacman -S base-devel cmake make unzip ninja tree-sitter curl
mkdir ~/Tools

# -----------------------------------------------------------------------------
# Neovim configuration
pacman -S neovim

# Build neovim from scratch
# git clone https://github.com/neovim/neovim ~/Tools/neovim
# cd ~/Tools/neovim
# make CMAKE_BUILD_TYPE=RelWithDebInfo
# make install

# Clone neovim configurations
git clone https://github.com/LunarVim/Neovim-from-scratch ~/.config/nvim

# Additional configurations for neovim dev environment
pacman -S xsel
pacman -S ripgrep
pacman -S python-pip

pip install pynvim
npm install -g neovim

# -----------------------------------------------------------------------------
reboot
