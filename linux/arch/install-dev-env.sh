#!/bin/bash

# -----------------------------------------------------------------------------
# Text editor
pacman -S vim

# -----------------------------------------------------------------------------
# For formatting fat and ntfs filesystems
pacman -S dosfstools ntfsprogs

# For example
# makefs -t vfat /dev/sdb1

# -----------------------------------------------------------------------------
# For generating ssh keys
pacman -S  openssh

# Generating ssh key for personal github access
ssh-keygen -t rsa -b 4096 - C "asghtr@freemail.com"

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
# Configuring Z-shell
pacman -S zsh
whereis zsh
usermod -s /usr/bin/zsh $(whoami)
reboot

# Powerlines
pacman -S powerline
pacman -S zsh-syntax-highlighting

# -----------------------------------------------------------------------------
# Midnight Commander
pacman -S mc
