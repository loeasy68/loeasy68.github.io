docker build -t hello-world .
docker run -p 80:80 -v ./src/:/var/www/html/ hello-world