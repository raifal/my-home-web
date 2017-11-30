#!/bin/bash

cd "$(dirname "$0")"

# remove
docker network disconnect rf_network my-home-web
docker stop my-home-web
docker rm -v my-home-web
docker rmi my-home-web

# build
docker build -t my-home-web .

# start
docker run -d --name my-home-web my-home-web
docker network connect rf_network my-home-web
