# Install guide for my printers

**Intall printer driver for Epson L850** 

```bash
sudo apt install printer-driver-escpr
```

**Install printer driver for Samsung M2022**
[driver](https://support.hp.com/us-en/drivers/selfservice/samsung-xpress-sl-m2022-laser-printer-series/17157279)
 or it is stored in my google drive too.

Download, extract and enter the uld folder. Run the following command.

```bash
sudo ./install-printer.sh
```

**Install & start the printing service**

```bash
sudo apt install cups
sudo service cups restart
```
