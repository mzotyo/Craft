# Useful bash commands

## pacman --query

Query the package database. This operation allows you to view installed packages and their files, as well as meta-information about individual
packages (dependencies, conflicts, install date, build date, size). This can be run against the local package database or can be used on
individual package files. In the first case, if no package names are provided in the command line, all installed packages will be queried.
Additionally, various filters can be applied on the package list. See Query Options below.

```shell
    pacman -Qd                      # list of packages installed as dependecy
    pacman -Qt                      # unrequired packages from other packages
    pacman -Qq                      # quiet
```

## pacman --remove

Remove package(s) from the system. Groups can also be specified to be removed, in which case every package in that group will be removed. Files
belonging to the specified package will be deleted, and the database will be updated. Most configuration files will be saved with a .pacsave
extension unless the --nosave option is used. See Remove Options below.

```shell
    pacman -Rs                      # removes dependencies that become unrequired
    pacman -Rn                      # removes config files too

    pacman -Qdt                     # lists orphan packages
    pacman -Rsn $(pacman -Qdtq)     # removes orphan packages
```

## Package is marginal trust

Error:
```shell
    error: <package>: signature from "Someone <mail.of.someone>" is marginal trust
    :: File /var/cache/pacman/pkg/<package_name_version>_x86_64.pkg.tar.zst is corrupted (invalid or corrupted package (PGP signature)).
    Do you want to delete it? [Y/n]
```

Solution:
```shell
    pacman -Sy archlinux-keyring
    pacman-key --populate archlinux
    pacman-key --refresh-keys
    pacman -Syu
```
