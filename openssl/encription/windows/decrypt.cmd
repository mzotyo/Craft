@echo off
REM source: https://www.shellhacks.com/encrypt-decrypt-file-password-openssl/


set fileName=%1%
set fileName=%fileName:.enc=%
echo %fileName%

openssl enc -d -aes-256-cbc -pbkdf2 -a -in %filename%.enc -out %filename%