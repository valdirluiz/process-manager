# Gerenciador de processos

## Passos para execução


Suba uma instancia do banco de dados com comando:

```
docker run --ulimit memlock=-1:-1 -it --rm=true --memory-swappiness=0 --name quarkus_test -e POSTGRES_USER=quarkus_test -e POSTGRES_PASSWORD=quarkus_test -e POSTGRES_DB=quarkus_test -p 5432:5432 postgres:10.5
```
Suba os containers da aplicação com os seguintes comandos:
 
```
docker-compose build
docker-compose up
```
