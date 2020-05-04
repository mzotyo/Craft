@echo off
REM https://www.shellhacks.com/encrypt-decrypt-file-password-openssl/

openssl enc -aes-256-cbc -salt -pbkdf2 -a -in %1 -out %1.enc
