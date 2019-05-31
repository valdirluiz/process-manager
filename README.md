# Gerenciador de processos

## Passos para execução

Inicialmente construa a imagem do docker da api, implementada em quarkus, com os seguintes comandos:

```
cd api
mvn package -Pnative -Dnative-image.docker-build=true
docker build -f src/main/docker/Dockerfile.native -t quarkus-process-api .
docker tag quarkus-process-api:latest quarkus-process-api:staging
```

Após isso, suba os containers com o comando:

```
docker-compose build
docker-compose up
```
