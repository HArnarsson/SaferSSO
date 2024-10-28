Field Session Project

To set up the environment, all that is required is you have docker working on your machine.

In our compose file, we currently have two profiles:
1. We have the service provider profile, which has the tag "sp".
2. We have the identity provider profile, which has the tag "idp".
3. To build both profiles at the same time, you can use the tag "*".

There are two stages to getting the environment running. 
1. Firstly, run this command in the root folder:
```shell
docker compose -f docker-compose.yaml --profile "*" build
```
2. When that has finished, run this command in the same place:
```shell
docker compose -f docker-compose.yaml --profile "*" build
```

The service provider will be running on localhost:8000, and the identity provider will be running on localhost:8001.
The express server will be running on localhost:80002, the react dev server will be running on localhost:3000