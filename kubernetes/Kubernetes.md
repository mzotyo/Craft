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

# For more information
kubectl get <component> -o wide

# Examples
kubectl get nodes
kubectl get nodes -o wide

kubectl get pod
kubectl get pod -o wide

kubectl get services
kubectl get services -o wide
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
  
## More examples

```shell
# Gets all events
kubectl get events

# Get detailed information from pod
kubectl describen pod <pod name>
 
# Edits the deployment an then redeploys the pods
kubectl edit deployment <name>

# Follow the logs
kubectl logs --follow pod/sqms-db2-goldimage-db-78...7dvr -n sqms-application

# Get a console to the pod
kubectl exec -it pod/sqms-db2-goldimage-db-78...7dvr -n sqms-application
```

## Ingress

Reach application from external IP address. App service remains internal. You redirect a host to a internal service.

```yaml
apiVersion: networking.k8s.io/v1beta1 
kind: Ingress 
metadata: 
    name: myapp-ingress
spec: 
    rules:
    - host: myapp.com
      http:
        paths: 
        -backend:
            serviceName: myapp-internal-service
            servicePort: 8080
```

We need an implementation of ingress too (**Ingress Controller**) pod. 
- Evaluates all the rules
- Managese redirections
- Entrypoint to cluster
- Many third party implementation
    + K8s Nginx Ingress Controller
- A proxy server should redirect the requests to the Ingress Server.

```shell
# Istall ingress
minikube addons enable ingress
```


### Configure Ingress rules

**dashboard-ingress.yaml**

```yaml
apiVersion: networking.k8s.io/v1beta1 
kind: Ingress 
metadata: 
    name: dashboard-ingress
    namespace: kubernetes-dashboard
spec: 
    rules:
    - host: dashboard.com
      http:
        paths: 
        -backend:
            serviceName: kubernetes-dashboard
            servicePort: 80
```

```shell
kubectl apply -f dashboard-ingress.yaml 
```

### Default backen

Create an error handler backend.

```yaml
apiVersion: v1 
kind: Service
metadata: 
    name: default-http-backend
spec: 
    selector:
        app: default-response-app
    ports:
      - protocol: TCP
        port: 80
        targetPort: 8080
```

### Multiple subdomains can be configured.

```yaml
apiVersion: networking.k8s.io/v1beta1 
kind: Ingress 
metadata: 
    name: simple-fanout-example
    annotations:
        nginx.ingress.kubernetes.io/rewrite-target: /
spec: 
    rules:
    - host: myapp.com
      http:
        - path: /analytics
          backend:
            serviceName: analytics-service
            servicePort: 3000
        - path: /shopping
          backend: 
            serviceName: shopping-service
            servicePort: 8080
```


### Configure TLS Certificate

**ingress**
```yaml
apiVersion: networking.k8s.io/v1beta1 
kind: Ingress 
metadata: 
    name: tls-example-ingress
spec: 
  tls:
  - hosts
    - myapp.com
    secretName: myapp-secret-tls
    
  rules:
    - host: myapp.com
      http:
        paths:
        - path 
          backend:
            serviceName: myapp-internalservice
            servicePort: 8080
```

**secret**
```yaml
apiVersion: v1
kind: Secret
metadata: 
    name: myapp-secret-tls
    namespace: default
data:
    tls.crt: base64 encoded cert
    tls.key: base64 encoded key
type: kubernetes.io/tls
```

## Volumes

**persistance volume claim**
```yaml
kind: PeristentVolumeClaim
apiVersion: v1
metadata:
    name: pvc-name
spec:
    storageClassName: manual
    volumeMode: Filesystem
    accessMode:
      - ReadWriteOnce
    resources:
        requests:
            storage: 10Gi
```

**reference a pvc**
```yaml 
apiVersoin: v1 
kind: Pod 
metadata: 
    name: mypod
spec: 
    containers:
        - name: myfrontend
          image: nginix
          volumeMounts:
          - mountPath: "/var/www/html"
    volumes:
        - name: mypod
          persistentVolumeClaim: 
            claimName: pvc-name
```

### ConfigMap and Secret

```yaml 
apiVersion: v1 
kind: Pod 
metadata: 
    name: mypod
spec: 
    containers:
     - name: busybox-container
       image: busybox
       volumeMounts:
         - name: config-dir
           mountPath: /etc/config
    volumes:
     - name: config-dir
       configMap:
         name: bb-configmap 
 ```

### Storage Class

Is another abstarction level on the top of the persistance volumes.

## StatefulSet

Used specifically for stateful applications. Stateful applications are databases or any application that stores state.

Sateless applications are deployed using *Deployment*. Stateful applications are deployed using *StatefulSet* components.

## Routing Securities

### I3-Access

## Observability

### Monitoring

- Services create metrics and make them available via an API
- **Prometheus** collects the metrics and shares via a Datasource
    - Push metrics to **Pushgateway**
    - Graphana

### Logging

- Services ouput collected by fluentBit
- Fluentd service reads the logs and forwards them to elasticsearch
- Kibana enables graphical visualization of logs
- Elasticsearch & Kibana are not deployed by us

### Trace

- ~20 Services communication with each other
- Issues occuring across multiple services are a chore to track via logs
- Daemon in each service's wildfly server keeps track of transactons
- Jaeger
- Grafana

## Groundworks

- Namespaces: k8s isolation machanism
- Reloader: service wich ensures apps restart on configmap/secret update
- Service Accounts: tool enabling the creation of k8s account for dashboard
- Network policies: need to create networking rules to enables communication
- Secrets: any confidential configuration
    - Deployed either via tool or via k8s job

## Cluster setup
