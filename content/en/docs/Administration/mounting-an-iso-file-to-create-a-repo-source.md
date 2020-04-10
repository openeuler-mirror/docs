# Mounting an ISO File to Create a Repo Source<a name="EN-US_TOPIC_0229622797"></a>

Run the mount command to mount the image file.

The following is an example:

```
mount /home/openEuler/openEuler-20.03-LTS-aarch64-dvd.iso  /mnt/
```

The mounted mnt directory is as follows:

```
.
│── boot.catalog
│── docs
│── EFI
│── images
│── Packages
│── repodata
│── TRANS.TBL
└── RPM-GPG-KEY-openEuler
```

In the preceding command,  **Packages**  indicates the directory where the RPM package is stored,  **repodata**  indicates the directory where the repo source metadata is stored, and  **RPM-GPG-KEY-openEuler**  indicates the public key for signing openEuler.

