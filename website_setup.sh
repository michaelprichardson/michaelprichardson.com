#!/bin/bash
git pull https://github.com/michaelprichardson/michaelprichardson.com.git
npm run install:clean
npm run build:prod
sudo apt-get update && sudo apt-get upgrade -y
sudo systemctl restart nginx
pm2 restart website.config.js --env production
