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
gpg --recipient <email> -encrypt <file>

# Encrypt with PGP to base64 output
gpg --recipient <email> --armor --encrypt <file>

# Decrypt with PGP
gpg --decrypt <file>

# Decrypt with PGP from base64 source
gpg --armor --decrypt <file>
```

### Import / Export
```bash
# Export public key
gpg --export --armor <email | name>

# Export privaye key
gpg --export-secret-key --armor <email | name>

# Import public key
gpg --import public.key

# Import private key
gpg --import private.key

```
