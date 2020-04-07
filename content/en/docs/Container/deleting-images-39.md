# Deleting Images<a name="EN-US_TOPIC_0184808235"></a>

## Precautions<a name="en-us_topic_0182303140_section191951901254"></a>

Do not run the  **docker rmi –f **_XXX_  command to delete images. If you forcibly delete an image, the  **docker rmi**  command ignores errors during the process, which may cause residual metadata of containers or images. If you delete an image in common mode and an error occurs during the deletion process, the deletion fails and no metadata remains.

