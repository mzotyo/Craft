# Base WSL installation

## Install CA certificates

### Installation

The first thing to do is install the ca-certificates package, a tool which allows SSL-based applications to check for the authenticity of SSL connections. To install this piece of software, open a terminal window and issue the command: 
	
```bash
sudo apt-get install ca-certificates -y
```

### Copying files

Next we need to copy that purchased .cer or .crt file into the proper location. With that certificate file on the Ubuntu server, copy it to the necessary directory with the command:

```bash
sudo cp <ZscalerCertificate>.crt /usr/share/ca-certificates/zscalerroot.crt
```

### Converting from PEM

If your certificate is a PEM file, it must first be converted to the .crt format. To do this you must use the openssl command like so:

```bash
openssl x509 -outform der -in CERTIFICATE.pem -out CERTIFICATE.crt
```

### Update your certificate

The last step is to update your certificates. Add the .crt file's path relative to (/usr/share/ca-certificates) to (/etc/ca-certificates.conf). With a single command you can update the certificates and generate the ca-certificates.crt file (which is a concatenated list of all installed certificates). The command to run is:

```bash
echo 'zscalerroot.crt' >> /etc/ca-certificates.conf
sudo update-ca-certificates
```

[Source1](https://www.techrepublic.com/article/how-to-install-ca-certificates-in-ubuntu-server/) [Source2](https://askubuntu.com/questions/73287/how-do-i-install-a-root-certificate)

# Installation MDA

## Prepare .bashrc

1. Add the following lines to the end of our bashrc

```bash
export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/Projects
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV=~/.local/bin/virtualenv
export REQUESTS_CA_BUNDLE=/etc/ssl/certs/zscalerroot.crt
export AWS_CA_BUNDLE=/etc/ssl/certs/zscalerroot.crt
source ~/.local/bin/virtualenvwrapper.sh
alias awstoken='~/Projects/aws/awstoken_mda.py'
```

2. After that, source the bashrc into your active session (you will get an error regarding */usr/bin/virtualenvwrapper.sh*, but that's ok for now)
```bash
source ~/.bashrc
```

## Install python3 packages

```bash
sudo apt install python3-pip python3-setuptools python3-pip python3-dev
pip3 install --cert=/etc/ssl/certs/zscalerroot.pem requests boto3 pytz tzlocal bs4
```

## Setting up a Virtual Environment

1. Disconnect from the msg network. Connect to a public network.

2. Execute following commands
```bash
cd ~
mkdir .virtualenvs
pip3 install virtualenv virtualenvwrapper
source ~/.bashrc
```

## AWS Token mda

```bash
mkdir -p ~/Projects/aws
sudo cp /media/sf_<Mapped Folder>/awstoken_mda.py ~/Projects/aws
sudo chmod +x Projects/aws/awstoken_mda.py
sudo cp /media/sf_<Mapped Folder>/aws_requirements_mda.txt ~/Projects/aws
```

Open the **awstoken_mda.py** and the variable ```sslverification``` should be set as following:

```bash
sslverification = "/etc/ssl/certs/zscalerroot.pem"
```

## Virtual environment setup

```bashrc
# create virtual environment named aws
mkvirtualev aws

# activate virtual environment named aws
workon aws

#install all necessary packages to work with aws cli
sudo pip3 install --cert=/etc/ssl/certs/zscalerroot.pem -r aws_requirements_mda.txt
```

# Installation of dev tools

```bash
# Clone aws-k8s-bootstrap repository to local directory
mkdir aws-k8s-bootstrap
git clone https://devstack.vwgroup.com/bitbucket/scm/ap/aws-k8s-bootstrapping.git
cd aws-k8s-bootstrapping
sudo chmod +x ./client/install-client-tools.sh
sudo ./client/install-client-tools 
```

# Check aws token

```bash
workon aws
awstoken
```