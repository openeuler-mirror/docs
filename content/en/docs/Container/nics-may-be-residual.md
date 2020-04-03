# NICs May Be Residual<a name="EN-US_TOPIC_0184808213"></a>

When a container is started in bridge mode, forcibly killing may cause residual NICs. In bridge network mode, when Docker creates a container, a pair of veths are created on the host, and then the NIC information is saved to the database. If daemon is forcibly killed before the NIC information is saved to the database of Docker, the NIC cannot be associated with Docker and cannot be deleted during the next startup because Docker deletes unused NICs from its database.

