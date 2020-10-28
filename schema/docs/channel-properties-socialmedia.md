# Untitled object in Channel Schema

```txt
undefined#/properties/socialMedia
```

Links to social media accounts of this channel


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [channel.schema.json\*](../out/channel.schema.json "open original schema") |

## socialMedia Type

`object` ([Details](channel-properties-socialmedia.md))

# undefined Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                        |
| :-------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [youtube](#youtube)   | Merged   | Optional | cannot be null | [Channel](channel-properties-socialmedia-properties-youtube-properties.md "undefined#/properties/socialMedia/properties/youtube") |
| [facebook](#facebook) | `object` | Optional | cannot be null | [Channel](channel-properties-socialmedia-properties-facebook.md "undefined#/properties/socialMedia/properties/facebook")          |
| [other](#other)       | `array`  | Optional | cannot be null | [Channel](channel-properties-socialmedia-properties-other.md "undefined#/properties/socialMedia/properties/other")                |

## youtube




`youtube`

-   is optional
-   Type: merged type ([Youtube properties](channel-properties-socialmedia-properties-youtube-properties.md))
-   cannot be null
-   defined in: [Channel](channel-properties-socialmedia-properties-youtube-properties.md "undefined#/properties/socialMedia/properties/youtube")

### youtube Type

merged type ([Youtube properties](channel-properties-socialmedia-properties-youtube-properties.md))

any of

-   [Youtube channel ID](channel-properties-socialmedia-properties-youtube-properties-anyof-youtube-channel-id.md "check type definition")
-   [Youtube url](channel-properties-socialmedia-properties-youtube-properties-anyof-youtube-url.md "check type definition")

## facebook




`facebook`

-   is optional
-   Type: `object` ([Details](channel-properties-socialmedia-properties-facebook.md))
-   cannot be null
-   defined in: [Channel](channel-properties-socialmedia-properties-facebook.md "undefined#/properties/socialMedia/properties/facebook")

### facebook Type

`object` ([Details](channel-properties-socialmedia-properties-facebook.md))

## other




`other`

-   is optional
-   Type: `string[]` ([Social media URL](channel-properties-socialmedia-properties-other-social-media-url.md))
-   cannot be null
-   defined in: [Channel](channel-properties-socialmedia-properties-other.md "undefined#/properties/socialMedia/properties/other")

### other Type

`string[]` ([Social media URL](channel-properties-socialmedia-properties-other-social-media-url.md))
