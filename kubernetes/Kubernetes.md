# Kubernetes

[youtube](https://youtu.be/X48VuDVv0do) - TechWorld with Nana - Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]

## Main concepts

### Node
Is a phisical or virtual *server*.

### Pod
Smallest unit of the kubernetes is a pod. It's an *abstraction over a container*, creates the running environment or a layer on the top of the container. kubernetes abstracts away the container technologies, you don't have to work directly with a specific container technology. Usually there is one application per pod. Each pod gets its *own IP address*.

### Service
Service is a *static IP* address which can be assigned to each pod. The life cycle of the *service* and the pod are not connected. Type of services: *External* service, *Internal* service. External service has a static IP address and a port. The service is also a *load balancer*, recieves the request and forward it to the pod that is the least busy.

### Ingress
It's a component which assignes a *secure protocol* an *domain name* to a service. The request goes first to ingress then it forwards it to the service, which then forwards it to the pod.

### ConfigMap
It is a component where you can configure URLs for ingress. Usually it contains *external configuration* for your application.

### Secret
It is used to store *secret data* encoded in base64 format. pod can see the data in secret and can use them.

### Volume
Attaches a phisical storage on a hard drive to your pod. That storage can be: on a *local* machine, *remote* storage - outside of the kubernetes cluster. When the pod is restarted all the data will be there. Storage is an external hard drive plugged in into a kubernetes cluseter.

### Deployment
It is a *blueprint for pods* and specifies how many *replicas* of the given pod you would like to run. In practice you won't be creating pods, you would be creating deployments because there you can specify how many replicas you would like. It can also be *scaled up* or *scaled down*. Deployment is another abstarction on the top of the pods. Deployment for stateLESS apps

### StatefulSet
It is ment for stateFULL apps or databases. Would take care of replicating, scaling of pods and making sure that db replicas are synchronized.

## Main kubernetes commands

```shell
kubectl get <component>

# examples
kubectl get nodes
kubectl get pod
kubectl get services
```

```shell
kubectl create deployment <NAME> --image=<image>

# examples
kubectl create deploymet nginx-depl --image=nginx

# Replicaset manages the ReplicaSet
kubectl get replicaset
```

### Layers of abstraction

- **Deployment** manages a ...
- **Replicaset** manages a ...
- **Pod** manages a ...
- **Container**

```shell
kubectl edit deployment <NAME> 

# example
kubectl edit deploymet nginx-depl 
kubectl get replicaset
```

```shell 
kubectl logs <pod name> 

# example 
kubectl create deployment mongo-depl --image=mongo 
kubectl logs mondogo-depl-454648-dsfg
```


```shell
# Gets a terminal for the running pod
kubectl exec -it <pod name> -- bin/bash
```

```shell
kubectl delete deployment <NAME>

kubectl get pod
kubectl get replicaset
```

## Kubernates configuration file

```shell
kubectl apply -f <configuration file.yaml> 

kubectl apply -f nginx-deployment.yaml
```
    
### Parts

- metadata
- specification
- status: it is automatically generated and updated by kubernetes

    **nginx-deployment.yaml:**
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
        name: nginx-deployment 
        labels: 
    spec:
        replicas: 2
        selector:
        template:
    ```
    
    **nginx-service.yaml:**
    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
        name: nginx-deployment 
    spec:
        selector:
        ports:
    ```

- **template** defies the pod.
- **labels and selectors** make the connections between the configuration files.

## Name space

- Resources can be organized in namespaces. It is a virtual cluster within a cluster.
- Use cases:
    + Better overview: logically grouping resources
    + Multiple teams: deployments with the same name collision
    + Stageing and Development envirionment
    + Different production versions
    + Limit the resources when working with multiple teams: resource quotas per namespace
- Each namespace must define its ConfigMap and Secrets because resources ca not be accessed from another namespace. 
- Some component can not be created within a namespace: volume or node

```shell
kubectl create namespace <name> 
```

### Namespace in the configuratoin file

- Config file without a namespcae definition:
    ```yaml
    apiVersion: v1
    kind: ConsfigMap
    metadata:
        name: mysql-configmap
    data:
        db_url: mysql-service.database
    ```

- Create whitin a namespace:
    ```shell
    kubectl apply -f mysql-configmap.yaml --namespace=my-namespace
    ```

- Or it can be created inside the configuration file:
    ```yaml
    apiVersion: v1
    kind: ConsfigMap
    metadata:
        name: mysql-configmap
        namespace: my-namespace
    data:
        db_url: mysql-service.database
    ```

- Change active namespace:

    ```shell
    sudo apt install kubectx
    ```
    
    ```shell
    # Display namespaces
    kubens
    
    # Change active namespace
    kubens <namespace name>
    ```