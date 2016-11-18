from node:latest
copy . /app
workdir /app
run npm install && npm install gulp -g
run gulp build
