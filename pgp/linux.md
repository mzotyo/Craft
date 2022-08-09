# How to use PGP on linux

### Listing
```bash
# Listing all keys
gpg --list-keys

# Listing private keys
gpg --list-secret-keys

# Listing keys with id
gpg --list-keys --keyid-format LONG
gpg --list-secret-keys --keyid-format LONG

```

### Create / Delete
```bash
# Generate a PGP key pair
gpg --full-gen-key

# Delete key
gpg --delete-key <keyid>
```

### Encrypt / Decrypt

```bash
# Encrypt with PGP
# email: recepient email from recepients public key
# file : the file to be encrypted
gpg -r <email> -e <file>

# Decrypt with PGP
# file : the file to be decrypted
gpg -d <file>
```

### Import / Export
```bash
# Export public key
gpg --export -a <email | name>

# Export privaye key
gpg --export-secret-key -a <email | name>

# Import public key
gpg --import public.key

# Import private key
gpg --import private.key

```
