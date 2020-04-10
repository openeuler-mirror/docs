# Creating a Local Repo Source<a name="EN-US_TOPIC_0229622699"></a>

You can copy related files in the image to a local directory to create a local repo source. The following is an example:

```
mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso  /mnt/
mkdir -p /srv/repo/
cp -r /mnt/Packages /srv/repo/
cp -r /mnt/repodata /srv/repo/
cp -r /mnt/RPM-GPG-KEY-openEuler /srv/repo/
```

The local repo directory is as follows:

```
.
│── Packages
│── repodata
└── RPM-GPG-KEY-openEuler
```

**Packages**  indicates the directory where the RPM package is stored,  **repodata**  indicates the directory where the repo source metadata is stored, and  **RPM-GPG-KEY-openEuler**  indicates the public key for signing openEuler.

