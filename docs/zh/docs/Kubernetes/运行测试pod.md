# 运行测试 pod

[[toc]]

## 配置文件

```bash
$ cat nginx.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```

## 启动 pod

通过kubectl命令运行nginx。

```bash
$ kubectl apply -f nginx.yaml
deployment.apps/nginx-deployment created
$ kubectl get pods
NAME                                READY   STATUS    RESTARTS   AGE
nginx-deployment-66b6c48dd5-6rnwz   1/1     Running   0          33s
nginx-deployment-66b6c48dd5-9pq49   1/1     Running   0          33s
nginx-deployment-66b6c48dd5-lvmng   1/1     Running   0          34s
```

