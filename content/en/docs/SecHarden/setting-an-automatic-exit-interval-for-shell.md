# Setting an Automatic Exit Interval for Shell<a name="EN-US_TOPIC_0192977560"></a>

## Description<a name="en-us_topic_0152100418_sb5f771565182409daa0c052ada17f7f2"></a>

An unattended shell is prone to listening or attacks. Therefore, a mechanism must be configured to ensure that a shell can automatically exit when it does not run for a period.

## Implementation<a name="en-us_topic_0152100418_s04137a86d4484a4eaeb91ed681322ca0"></a>

At the end of file  **/etc/profile**, set the  **TMOUT**  field \(unit: second\) that specifies the interval for automatic exit as follows:

```
export TMOUT=300
```

