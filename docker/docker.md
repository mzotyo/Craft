# Docker commmands

## Container
- **Run docker container**
    ```shell
    # Runs the latest version
    docker run nginx
    ```

- **List containers**
    ```shell
    # Lists running containers
    docker ps

    # List all containers the stopped ones too
    docker ps -a
    ```

- **Stop docker container**
    ```shell
    # Stops docker container
    docker stop nginx
    ```

- **Remove containers permanently**
    ```shell
    # Removes a container permanently
    docker rm nginx
    ```
## Images
- **List all available images** 
    ```shell
    docker images
    ```

- **Remove an image**. All containers running that image should be stopped first.
    ```shell
    docker rmi nginx
    ```

- **Download the image**
    ```shell
    docker pull nginx
    ```

## Execute something on the docker

- **Execute a command**
    ```shell
    docker exec nginx cat /etc/hosts
    ```

## Attached and detached modes

- **Run attach mode**
    ```shell
    # You will be attached to theconsole
    # Ctrl + C
    docker run nginx
    ```

- **Run detached mode**
    ```shell
    docker run -d nginx
    ```

- **Reattach to a docker**
    ```shell
    docker attach a043d
    ```


