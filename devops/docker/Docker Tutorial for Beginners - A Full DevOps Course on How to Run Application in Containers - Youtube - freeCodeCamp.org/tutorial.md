# Docker tutorial for Beginners

[Youtube - freeCodeCam.org](https://youtu.be/fqMOX6JJhGo)

## Docker Overview

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

