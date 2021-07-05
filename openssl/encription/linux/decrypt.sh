fileName=$1%.enc
openssl enc -d -aes-256-cbc -pbkdf2 -a -in $filename.enc -out $filename
