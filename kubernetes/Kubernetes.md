# kubernetes

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
It is a *blueprint for pods* and specifies how many *replicas* of the given pod you would like to run. In practice you won't be creating pods, you would be creating deployments because there you can specify how many replicas you would like. It can also be *scaled up* or *scaled down*. Deployment is another abstarction on the top of the pods.
