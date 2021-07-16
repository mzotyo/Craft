# Kubretes Tutorial for Beginners
[Youtube - TechWorld with Nana](https://www.youtube.com/watch?v=X48VuDVv0do)

## Intro to K8s

### What's kubernetes?

#### Official Definition

- *Open source container orchestration framework*. 
- Originally it was developed by Google.
- Helps you manage containerized applications in different deployment environments.
    + Physical machines
    + Virtual machines
    + Cloud environments

#### Problem-Solution case study

The need for an orchestration tool.

- Trend from *Monolith* to *Microservices*
- Increase usage of *containers*: managing houdreds of container through scrips becomes impossible.
- Demand for a *proper way* of *managing* those hundreds of containers.

What features do orchestration tools offer?

- *High availability* or no downtime
- *Scalability* or high performance
- *Desaster recovery* - backup and restore

### K8s Architecture

#### Kubernetes Components

- **Pod:**
	+ A smallest unit of K8s.
	+ Abstraction over a container.
	+ It creates a running environment. It's a layer in the top of the container. Kubernetes wants to abstract away the container runtime (container technologies) because it can be replaced and also because the developer has to directly work with different container technologies use in kubernetes. The developer interacts with the *kubernetes layer* only.
	+ Usually one main application per pod or some side service which has to run inside of that pod.

### Main K8s Components

### Minikube and Kubectl - local setup

### Main Kubectl Commands - K8s CLI

### K8s YAML Configuration File

### Hands-On Demo

## Advanced Concepts

### K8s Namespaces - Organize your Components

### K8s Ingress

### Helm Package Manager

### Volumes - Persisting Data in K8s

### K8s StatefulSet - Deploying Stateful Apps

### K8s Services
