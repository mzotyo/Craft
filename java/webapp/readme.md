# Simple Web Application

## How to build and run

```shell
# builds the project war file
mvn clean install

# builds a docker image
docker build -t simple-webapp .

# running the docket image
docker run -p 8082:8080 simple-webapp

# application will be accessible under: `http://localhost:8082/simple-webapp`
```
