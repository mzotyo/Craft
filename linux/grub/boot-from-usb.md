# Boot from USB via grub command line

1. When grub has started, perss `<ESC>`. That should enter the command line interface. `grub>`
2. The command `grub> ls` lists all the available devices. In the case of my lenovo laptop the usb device was `(hd0, gpt1)`
3. Change the *root* to this device. `grub> set root=(hd0, gpt1)`
4. Locate the correct bootloader and type the command `chainloader /efi/boot/grubx64.efi`
5. To invoke the bootloader type `grub> boot`
