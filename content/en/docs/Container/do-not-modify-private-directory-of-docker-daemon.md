# Do Not Modify Private Directory of Docker Daemon<a name="EN-US_TOPIC_0184808206"></a>

Do not modify the root directory used by Docker \(**/var/lib/docker**  by default\), the directory during operation \(**/run/docker**  by default\), or the files or directories in the two directories. The forbidden operations include deleting files, adding files, creating soft or hard links for the directories or files, or modifying attributes, permissions, or contents of the files. If any modification is required, contact the Euler container team for review.

