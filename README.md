# michaelprichardson.com

### TODO

Show how to setup for Ubuntu 18.04


### Start from config file

```sh
$ pm2 start website.config.js --env production
```

```sh
server {
    listen 80;
    listen [::]:80;
    server_name michaelprichardson.com www.michaelprichardson.com;
    return 301 https://$server_name$request_uri;
    root /var/www/michaelprichardson.com/html;
}

server {
    # SSL configuration

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot

    root /var/www/michaelprichardson.com/html;
    index index.html index.htm index.nginx-debian.html;

    server_name michaelprichardson.com www.michaelprichardson.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }

    ssl_certificate /etc/letsencrypt/live/michaelprichardson.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/michaelprichardson.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
```


https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04
