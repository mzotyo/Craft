# Useful bash commands

## Resources

Displays the amount of disk space available.
```shell
df -h
df -h | grep /dev/sda1
```

Display disk usage of the set of files, recursively for directories.
```shell
du -s -h ~/Craft
```

Ram and cpu usage.
```shell
htop
```

Ram usage.
```shell
free -h
```

List all orphans
```shell
pacman -Qdt

# removes all orphans
pacman -Rsn $(pacman -Qdtq)
```
