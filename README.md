# Containerize a webapp and deploy to cluster

A simple Node.js web application containerized with Docker and ready for deployment on a Kubernetes cluster.

## Prerequisites

- Docker
- Kubernetes cluster (e.g., minikube, k3s, or a managed Kubernetes service)
- kubectl

## Build and push the Docker image

1. Build the Docker image:

```
docker build -t your-image-name:tag .
```

2. Tag and push the Docker image to your preferred container registry (e.g., Docker Hub, Google Container Registry):

```
docker tag image-name:tag registry/image-name:tag
docker push registry/image-name:tag
```

Replace `image-name`, `tag`, and `registry` with appropriate values.

## Deploy the application to a Kubernetes cluster

1. Update the `deployment.yaml` and `service.yaml` files with the correct image name and tag.

2. Apply the Kubernetes manifests:

```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

3. Check the status of the deployment and service:

```
kubectl get deployments
kubectl get services
```

## Scale the application

To scale the number of replicas, use the following command:

```
kubectl scale deployment mywebapp01 --replicas=N
```

Replace `N` with the desired number of replicas.

## Delete the application from the Kubernetes cluster

To delete the application and associated resources, run the following commands:

```
kubectl delete deployment mywebapp01
kubectl delete service mywebapp01
```