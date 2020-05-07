# openEuler website

### Brief Introduction

Docs maintains openEuler documentations which is integrated by online website. Now we are under developing.
you are welcome to join us.

### Installation

1. Build Image

```
docker build -t docs:v0.0.1 .
```

note: here ```docs``` is the image name, you can change it as you need.

> TO THOSE WHO MAY CONCERN:
> If you are working behind proxy, use `--build-arg` option to tell `docker build` about it:
>	docker build --build-arg http_proxy="http://username:password@your.proxy.com:port" -t docs:v0.0.1 .
> `--build-arg` can be specified many times, like `http_proxy`, `https_proxy`, `HTTP_PROXY`, `HTTPS_PROXY` and so on.

2. Running in container

```
docker run -p 80:80 -d docs:v0.0.1 > docs.pid
```

The website will serving on http://your-server-ip:80

The defalut language(en) will serving on http://your-server-ip/
Other language(zh) will serving on http://your-server-ip/zh

3. Stopping the container

```
docker rm -f `cat docs.pid` && rm -f docs.pid
```


### Contribution

1. Fork the repository
2. Create Feature_xxx branch
3. Commit your code
4. Create Pull Request

Please refer to [CONTRIBUTING](./CONTRIBUTING.md) for more guide.

### Get Help

- IRC: #openeuler-doc
- MAIL: dev@openeuler.org
