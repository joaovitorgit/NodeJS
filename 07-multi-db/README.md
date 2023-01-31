docker run --name postgres -e POSTGRES_USER=joaovitor -e POSTGRES_PASSWORD=root -e POSTGRES_DB=heroes -p 5432:5432 -d postgres


docker ps

docker exec -it postgres /bin/bash

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

## ---------- mongo db

docker run --name mongodb -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=root  -p 27017:27017 -d mongo:4

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user:'joaovitor', pwd:'root', roles:[{role:'readWrite', db:'herois'}]})"