# Youtube url Schema

```txt
undefined#/properties/socialMedia/properties/youtube/anyOf/1
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [channel.schema.json\*](../out/channel.schema.json "open original schema") |

## 1 Type

`object` ([Youtube url](channel-properties-social-media-links-properties-youtube-link-anyof-youtube-url.md))

# Youtube url Properties

| Property    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                 |
| :---------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [url](#url) | `string` | Optional | cannot be null | [Channel](channel-properties-social-media-links-properties-youtube-link-anyof-youtube-url-properties-url.md "undefined#/properties/socialMedia/properties/youtube/anyOf/1/properties/url") |

## url




`url`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Channel](channel-properties-social-media-links-properties-youtube-link-anyof-youtube-url-properties-url.md "undefined#/properties/socialMedia/properties/youtube/anyOf/1/properties/url")

### url Type

`string`

### url Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
