# Docker commmands

## Basic commands
```shell
# Displays the docker version
docker version

# Pulls the docker image from the repository
docker pull IMAGE_NAME
docker pull hello-world

# Lists the images available locally
docker image ls

# Remove docker images
docker image rm IMAGE_ID
docker image rm hello-world

# Creates a container from the image 
# If the image does not exists locally the it pulls the image too
docker create IMAGE_NAME
docker create hello-world

# Displays the containers and its status
docker ps --all

# Starts the container
docker start CONTAINER_ID
docker start 7441a90cc721

# Stop the container
docker stop CONTAINER_ID
docker stop 7441a90cc721

# Docker run created and starts the dcontainer
# If the image does not exists locally the it pulls the image too
docker run IMAGE_NAME
docker run hello-world

# Remove the container
# Docker must be stopped before it can be removed
docker rm CONTAINER_ID
docker rm 7441a90cc721
```

## Advanced commands
```shell
# Run container in detached modes
docker run -d IMAGE_NAME
docker run -d hello-world

# Run container with a custom name
docker run -d IMAGE_NAME --name CONTAINER_NAME
docker run -d --name redis-container redis

# Execute something on the docker
docker exec IMAGE_NAME SHELL_COMMAND IMAGE_NAME
docker exec redis-container cat /etc/hosts

# Getting a terminal to docker
docker exec -it CONTAINER_NAME /bin/bash
docker exec -it redis-container /bin/bash

# Exposing internal port to the outside
docker run -d -pEXT_PORT:INT_PORT --name CONTAINER_NAME IMAGE_NAME
docker run -d -p 8888:8080 --name tomcat-container tomcat:9.0

# Reattach to a docker**
docker attach CONTAINER_ID
docker attach 7441a90cc721
```
## Docker Overview
[Youtube - freeCodeCam.org](https://youtu.be/fqMOX6JJhGo)

Why do You need docker?

- compatibility between the services with the underlying OS
- different services might require different versions of the libraries on the undelying OS
- sevices might evolve with time therefore each time the service changes you might go through this process again and again
- setting up a new evironment for new developers
- building and running the application the same way on each environment

What solves Docker?

- run each component in a separate container
- with its own dependencies and with its own libraries
- all on the same VM and OS
- all on a different enviroments within their containers
- docker configuration had to be built once
- all developers could start with a single docker run command
- all that developers needed to do is to make sure they have docker installed on their OS

What are containers?

- completely isolated environments
- they can have their own processes or services 
- they can have their own network interfaces 
- they can have their own mounts

just like virtual machines, except they share the same OS kernel.

### Operating Systems

- they all cosists of two things
    - OS kernel
    - set of doftwares
- the OS kernel is responsable to interact with the underlying hardware
- while the OS kernel remains the same which is linux kernel, the software above it makes this operating systems different
- this software may consist of a different user interface, drivers, compilers, filemanagers, ...
- you have a common linux kernel shared across different OS-es, and some custome software differentiate OS-es from each other

### Docker containers share the underlying kernels

- lets say we have an Ubuntu OS with a docker installed on it
- docker can run any flawor of OS on top of it as long they are based on the same kernel in this case linux
- each docker container has judt the addtional software that makes this operating systems different
- docker utilizes the underlining kernel of docker host which works with all OS-es above


