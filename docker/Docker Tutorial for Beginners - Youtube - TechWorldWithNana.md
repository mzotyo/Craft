# Docker tutorial for Beginners
[Youtube - TechWorld with Nana](https://www.youtube.com/watch?v=3c-iBn73dDE)


## Overview

What is a container

- A way to package application with all the necessary dependencies and confguration.
- The package artifact, easely shared and moved around.
- Makes development and deployment more efficient.

Where do container live?

- container repository
- private repositories
- public repository for docker: [DockerHub](https://hub.docker.com/)

What problems solves?

Installation
- own isolated environment
- packged whit all needed configuration
- one command to install the app
- run same app with 2 different versions

Deployment
- Developers and operations work together to package the application in a container
- No environmental configuration needed on server - except Docker runtime

## What is a container

- Layers of images
- Mostly Linux Base Images, because small size
- Application image on top

```
$ docker run postgres:9.6
Unable to find image 'postgres:9.6' locally
9.6: Pulling from library/postgres
aed007321795: Pull complete                                                                                             702c74af4354: Pull complete                                                                                             ef123e2ab09b: Pull complete                                                                                             c84418d8530c: Pull complete                                                                                             b579800618be: Pull complete                                                                                             6562ab9a134a: Pull complete                                                                                             1c9daa412a3b: Pull complete                                                                                             ef585939c140: Pull complete                                                                                             f6f24a76ec66: Pull complete                                                                                             f768778f401c: Pull complete                                                                                             55ae88a00bfe: Pull complete                                                                                             2c55b43cb1bd: Pull complete                                                                                             41dd5e7c31cb: Pull complete                                                                                             02cc5378f2c6: Pull complete                                                                                             Digest: sha256:7159df74c41d47988d711b3fc0e1d7750325a1943b4248c0b2ac67513ee736cf
Status: Downloaded newer image for postgres:9.6
Error: Database is uninitialized and superuser password is not specified.
       You must specify POSTGRES_PASSWORD to a non-empty value for the
       superuser. For example, "-e POSTGRES_PASSWORD=password" on "docker run".

       You may also use "POSTGRES_HOST_AUTH_METHOD=trust" to allow all
       connections without a password. This is *not* recommended.

       See PostgreSQL documentation about "trust":
       https://www.postgresql.org/docs/current/auth-trust.html

$ docker run -e POSTGRES_HOST_AUTH_METHOD=trust postgres:9.6
********************************************************************************
WARNING: POSTGRES_HOST_AUTH_METHOD has been set to "trust". This will allow
         anyone with access to the Postgres port to access your database without
         a password, even if POSTGRES_PASSWORD is set. See PostgreSQL
         documentation about "trust":
         https://www.postgresql.org/docs/current/auth-trust.html
         In Docker's default configuration, this is effectively any other
         container on the same system.

         It is not recommended to use POSTGRES_HOST_AUTH_METHOD=trust. Replace
         it with "-e POSTGRES_PASSWORD=password" instead to set a password in
         "docker run".
********************************************************************************
The files belonging to this database system will be owned by user "postgres".
This user must also own the server process.

The database cluster will be initialized with locale "en_US.utf8".
The default database encoding has accordingly been set to "UTF8".
The default text search configuration will be set to "english".

Data page checksums are disabled.

fixing permissions on existing directory /var/lib/postgresql/data ... ok
creating subdirectories ... ok
selecting default max_connections ... 100
selecting default shared_buffers ... 128MB
selecting default timezone ... Etc/UTC
selecting dynamic shared memory implementation ... posix
creating configuration files ... ok
running bootstrap script ... ok
performing post-bootstrap initialization ... ok
syncing data to disk ...
WARNING: enabling "trust" authentication for local connections
You can change this by editing pg_hba.conf or using the option -A, or
--auth-local and --auth-host, the next time you run initdb.
ok

Success. You can now start the database server using:

    pg_ctl -D /var/lib/postgresql/data -l logfile start

waiting for server to start....LOG:  database system was shut down at 2021-07-20 06:01:14 UTC
LOG:  MultiXact member wraparound protections are now enabled
LOG:  autovacuum launcher started
LOG:  database system is ready to accept connections
 done
server started

/usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*

LOG:  received fast shutdown request
waiting for server to shut down...LOG:  aborting any active transactions
.LOG:  autovacuum launcher shutting down
LOG:  shutting down
LOG:  database system is shut down
 done
server stopped

PostgreSQL init process complete; ready for start up.

LOG:  database system was shut down at 2021-07-20 06:01:16 UTC
LOG:  MultiXact member wraparound protections are now enabled
LOG:  autovacuum launcher started
LOG:  database system is ready to accept connections
```

**Image**
- the actual package
- the artifact that can be moved around

**Docker container**
- actually start the application
- container environment is created

Docker vs Virtual machines

Operating system
- Applications
- OS Kernel
- Hardware

Docker: Virtualizes the Application Layer

VM: Virtualizes Application and OS Kernel too

Docker containers are faster, more compatible

## Basic Docker commands

- Container is a running evironment of an image.
- virtual file system
- port binded: talk to application running inside of  container
- application image: postgres, redis, mongo

Downloading *redis* image

```
$ docker pull redis
Using default tag: latest
latest: Pulling from library/redis
b4d181a07f80: Pull complete                                                                                                                      86e428f79bcb: Pull complete                                                                                                                      ba0d0a025810: Pull complete                                                                                                                      ba9292c6f77e: Pull complete                                                                                                                      b96c0d1da602: Pull complete                                                                                                                      5e4b46455da3: Pull complete                                                                                                                      Digest: sha256:b6a9fc3535388a6fc04f3bdb83fb4d9d0b4ffd85e7609a6ff2f0f731427823e3
Status: Downloaded newer image for redis:latest
docker.io/library/redis:latest

$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
postgres     9.6       57f00647c9af   7 days ago    200MB
redis        latest    08502081bff6   3 weeks ago   105MB
```

Run *redis* image

```
$ docker run redis
1:C 20 Jul 2021 06:25:35.478 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 20 Jul 2021 06:25:35.478 # Redis version=6.2.4, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 20 Jul 2021 06:25:35.478 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 20 Jul 2021 06:25:35.479 * monotonic clock: POSIX clock_gettime
1:M 20 Jul 2021 06:25:35.480 * Running mode=standalone, port=6379.
1:M 20 Jul 2021 06:25:35.480 # Server initialized
1:M 20 Jul 2021 06:25:35.480 * Ready to accept connections

$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS      NAMES
9f91705c7289   redis     "docker-entrypoint.s…"   15 seconds ago   Up 13 seconds   6379/tcp   kind_buck

CTRL+C - to stop container
```

Starting container in detached mode

```
$ docker run -d redis
4a1bd2c9084263037fbc666ec5cfc99242b3fa7da58a37fc450aad08d1c978b7
```

Stopping / starting a container

```
$ docker stop 4a1bd2c90842
4a1bd2c90842

$ docker start 4a1bd2c90842
4a1bd2c90842
```

Viewing all the containers

```
$ docker ps -a
4a1bd2c90842   redis          "docker-entrypoint.s…"   4 minutes ago    Exited (0) About a minute ago             heuristic_cohen
9f91705c7289   redis          "docker-entrypoint.s…"   5 minutes ago    Exited (0) 4 minutes ago                  kind_buck
b1e8e442557b   postgres:9.6   "docker-entrypoint.s…"   30 minutes ago   Exited (0) 14 minutes ago                 peaceful_grothendieck
ba0feb8a93cd   postgres:9.6   "docker-entrypoint.s…"   30 minutes ago   Exited (1) 30 minutes ago                 stoic_jackson
15d219e8a48d   postgres:9.6   "docker-entrypoint.s…"   31 minutes ago   Exited (1) 31 minutes ago                 intelligent_galois
bf09d2e7e097   postgres:9.6   "docker-entrypoint.s…"   34 minutes ago   Exited (1) 34 minutes ago                 modest_lederberg
```

Running different version

```
$ docker run redis:4.0
```
Makes two things in one comman: pull & start

###  Container ports vs host ports

Multiple containers can run on your host machine. 
The host machine has certain ports available.
Binding container port to host machin ports.
Conflict when same port on host machine.
You can access the container using the port of the host: `some-app://localhost:3001`.

```
$ docker run -p6000:6379 redis

$ docker ps 
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                       NAMES
7dc131d13dec   redis     "docker-entrypoint.s…"   18 seconds ago   Up 17 seconds   0.0.0.0:6000->6379/tcp, :::6000->6379/tcp   zealous_hugle
```

### Commands for troubleshooting

```
$ docker logs dec82cfcd1d9
1:C 20 Jul 2021 06:46:54.368 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 20 Jul 2021 06:46:54.368 # Redis version=6.2.4, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 20 Jul 2021 06:46:54.368 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 20 Jul 2021 06:46:54.369 * monotonic clock: POSIX clock_gettime
1:M 20 Jul 2021 06:46:54.370 * Running mode=standalone, port=6379.
1:M 20 Jul 2021 06:46:54.370 # Server initialized
1:M 20 Jul 2021 06:46:54.370 * Ready to accept connections

$ docker logs hopeful_lewin
1:C 20 Jul 2021 06:46:54.368 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 20 Jul 2021 06:46:54.368 # Redis version=6.2.4, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 20 Jul 2021 06:46:54.368 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 20 Jul 2021 06:46:54.369 * monotonic clock: POSIX clock_gettime
1:M 20 Jul 2021 06:46:54.370 * Running mode=standalone, port=6379.
1:M 20 Jul 2021 06:46:54.370 # Server initialized
1:M 20 Jul 2021 06:46:54.370 * Ready to accept connections
```

Giving own name to a container

```
$ docker run -d -p6000:6379 --name myredis redis
$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                       NAMES
84519ba76453   redis     "docker-entrypoint.s…"   52 seconds ago   Up 51 seconds   0.0.0.0:6000->6379/tcp, :::6000->6379/tcp   myredis
```

Getting a terminal to a docker

```
$ docker exec -it myredis /bin/bash
```

## Developing Docker apps

![](DockerInSoftwareDevelopment.png)

[source code](https://gitlab.com/nanuchi/techworld-js-docker-demo-app)

**index.html**:

```
<html lang="en">
<style>
    .container {
        margin: 40px auto;
        width: 80%;
    }
    .button {
        width: 160px;
        height: 45px;
        border-radius: 6px;
        font-size: 15px;
        margin-top: 20px;
    }
    img {
        width: 328px;
        height: 287px;
        display: block;
        margin-bottom: 20px;
    }
    hr {
        width: 400px;
        margin-left: 0;
    }
    h3 {
        display: inline-block;
    }
    #container {
        display: none;
    }
    #container-edit {
        display: none;
    }
    #container-edit input {
        height: 32px;
    }
    #container-edit hr {
        margin: 25px 0;
    }
    #container-edit input {
        width: 195px;
        font-size: 15px;
    }
</style>
<script>
    (async function init() {
        const response = await fetch('http://localhost:3000/get-profile');
        console.log("response", response);
        const user = await response.json();
        console.log(JSON.stringify(user));

        document.getElementById('name').textContent = user.name ? user.name : 'Anna Smith';
        document.getElementById('email').textContent = user.email ? user.email : 'anna.smith@example.com';
        document.getElementById('interests').textContent = user.interests ? user.interests : 'coding';

        const cont = document.getElementById('container');
        cont.style.display = 'block';
    })();

    async function handleUpdateProfileRequest() {
        const contEdit = document.getElementById('container-edit');
        const cont = document.getElementById('container');

        const payload = {
            name: document.getElementById('input-name').value, 
            email: document.getElementById('input-email').value, 
            interests: document.getElementById('input-interests').value
        };
        
        const response = await fetch('http://localhost:3000/update-profile', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const jsonResponse = await response.json();

        document.getElementById('name').textContent = jsonResponse.name;
        document.getElementById('email').textContent = jsonResponse.email;
        document.getElementById('interests').textContent = jsonResponse.interests;

        cont.style.display = 'block';
        contEdit.style.display = 'none';
    }

    function updateProfile() {
        const contEdit = document.getElementById('container-edit');
        const cont = document.getElementById('container');

        document.getElementById('input-name').value = document.getElementById('name').textContent;
        document.getElementById('input-email').value = document.getElementById('email').textContent;
        document.getElementById('input-interests').value = document.getElementById('interests').textContent;

        cont.style.display = 'none';
        contEdit.style.display = 'block';
    }
</script>
<body>
    <div class='container' id='container'>
        <h1>User profile</h1>
        <img src='profile-picture' alt="user-profile">
        <span>Name: </span><h3 id='name'>Anna Smith</h3>
        <hr />
        <span>Email: </span><h3 id='email'>anna.smith@example.com</h3>
        <hr />
        <span>Interests: </span><h3 id='interests'>coding</h3>
        <hr />
        <button class='button' onclick="updateProfile()">Edit Profile</button>
    </div>
    <div class='container' id='container-edit'>
        <h1>User profile</h1>
        <img src='profile-picture' alt="user-profile">
        <span>Name: </span><label for='input-name'></label><input type="text" id='input-name' value='Anna Smith' />
        <hr />
        <span>Email: </span><label for='input-email'></label><input type="email" id='input-email' value='anna.smith@example.com' />
        <hr />
        <span>Interests: </span><label for='input-interests'></label><input type="text" id='input-interests' value='coding' />
        <hr />
        <button class='button' onclick="handleUpdateProfileRequest()">Update Profile</button>
    </div>
</body>
</html>
```

**server.js**:

```
let express = require('express');
let path = require('path');
let fs = require('fs');
let MongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get('/profile-picture', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

// use when starting application locally
let mongoUrlLocal = "mongodb://admin:password@localhost:27017";

// use when starting application as docker container
let mongoUrlDocker = "mongodb://admin:password@mongodb";

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring engine
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "user-account" in demo with docker. "my-db" in demo with docker-compose
let databaseName = "my-db";

app.post('/update-profile', function (req, res) {
  let userObj = req.body;

  MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
    if (err) throw err;

    let db = client.db(databaseName);
    userObj['userid'] = 1;

    let myquery = { userid: 1 };
    let newvalues = { $set: userObj };

    db.collection("users").updateOne(myquery, newvalues, {upsert: true}, function(err, res) {
      if (err) throw err;
      client.close();
    });

  });
  // Send response
  res.send(userObj);
});

app.get('/get-profile', function (req, res) {
  let response = {};
  // Connect to the db
  MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
    if (err) throw err;

    let db = client.db(databaseName);

    let myquery = { userid: 1 };

    db.collection("users").findOne(myquery, function (err, result) {
      if (err) throw err;
      response = result;
      client.close();

      // Send response
      res.send(response ? response : {});
    });
  });
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
```

**package.json**:

```
{
  "name": "developing-with-docker",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "Nana Janashia",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "mongodb": "^3.3.3"
  }
}
```

Pulling *mongo* and *mongo-express* images

```
$ docker pull mongo
$ docker pull mongo-express
```

Docker Network

```
$ docker network create mongo-network
$ docker network ls
NETWORK ID     NAME            DRIVER    SCOPE
689a34cb9b0d   bridge          bridge    local
cb726634dbdd   host            host      local
a8df9dd8f498   mongo-network   bridge    local
3fc0b60d7ee2   none            null      local
```

Run containers

```
$ docker run -d \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=password \
    --name mongodb \
    --net mongo-network \
    mongo 

$ docker run -d \
    -p 8081:8081 \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
    -e ME_CONFIG_MONGODB_SERVER=mongodb \
    --name mongo-express \
    --net mongo-network \
    mongo-express
```

## DockerCompose 

[mongo-docker-compose.yaml](mongo-docker-compose.yaml):

```
version: '3'
services:
    mongodb:
        image: mongo
        ports:
          - 27017:27017
        environment:
          - MONGO_INITDB_ROOT_USERNAME=admin
          - MONGO_INITDB_ROOT_PASSWORD=password
    mongo-express:
        image: mongo-express
        ports: 
          - 8081:8081
        environment:
          - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
          - ME_CONFIG_MONGODB_ADMINPASSWORD=password
          - ME_CONFIG_MONGODB_SERVER=mongodb
```
Docker Compose takes care of creating a common network!

Starting with docker compose
```
$ docker-compose -f mongo-docker-compose.yaml up
```

Stopping with docker compose

```
$ docker-compose -f mongo-docker-compose.yaml down
```

## Docker file

Docker file: blueprint for building docker images

**blueprint docker file**

```
FROM node
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password \
RUN mkdir -p /home/app
COPY . /home/app
CMD ["node, server.js"]
```

The *node* is the image on which the docker is based on, therefore node js is installed in image.

It always has to be called *Dockerfile*.

**Dockerfile**

```
FROM node:13-alpine
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password \
RUN mkdir -p /home/app
COPY . /home/app
CMD ["node, server.js"]
```

Building the docker image from *Dockerfile*

```
$ docker build -t my-app:1.0 .

$ docker images
REPOSITORY      TAG       IMAGE ID       CREATED              SIZE
my-app          1.0       4c5170d26636   About a minute ago   125MB
mongo           latest    2d38962b1e5e   19 hours ago         671MB
mongo-express   latest    f8fe1b7702e7   12 days ago          136MB
```

Run the container

```
$ docker run my-app:1.0
```

## Register a Docker image into a private repository (docker registry)

AWS / ECR (Elastic Container Registry)

Pushing the image into the repository

First you need
- to hav *aws CLI* installed
- credentials configured

Image Naming in Docker registries: **registryDomain/imageName:tag**

```
$ $(aws ecr get-login --no-include-email --region eu-central-1)
$ docker tag my-app:latest 664574038682.dkr.ecr.eu-central-1.amazonaws.com/my-app:latest
$ docker push 664574038682.dkr.ecr.eu-central-1.amazonaws.com/my-app:latest
```

## Docker volumes

A folder in a host file system is mounted into a folder of a docker file system.

- *docker run*: -v /home/mount/data:/var/lib/mysql/data
- *docker run*: -v /var/lib/mysql/data
- *docker run*: -v name:/var/lib/mysql/data