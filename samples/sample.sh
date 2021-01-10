#!/bin/sh

# comment
echo "Enter username"
read username
echo "Enter password"
read password

if [[( $username == "root" && $password == "toor" )]]; then
  echo "logged in as:\t root"
else
  echo "access denied"
fi