# Channel Schema

```txt
undefined
```

A channel that broadcasts the Holy Mass


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [channel.schema.json](../out/channel.schema.json "open original schema") |

## Channel Type

`object` ([Channel](channel.md))

# Channel Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                     |
| :---------------------------------------- | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------- |
| [name](#name)                             | `string` | Required | cannot be null | [Channel](channel-properties-name.md "undefined#/properties/name")                             |
| [shortName](#shortname)                   | `string` | Optional | cannot be null | [Channel](channel-properties-shortname.md "undefined#/properties/shortName")                   |
| [locations](#locations)                   | `array`  | Required | cannot be null | [Channel](channel-properties-locations.md "undefined#/properties/locations")                   |
| [priests](#priests)                       | `array`  | Required | cannot be null | [Channel](channel-properties-priests.md "undefined#/properties/priests")                       |
| [website](#website)                       | `string` | Optional | cannot be null | [Channel](channel-properties-website.md "undefined#/properties/website")                       |
| [socialMedia](#socialmedia)               | `object` | Optional | cannot be null | [Channel](channel-properties-social-media-links.md "undefined#/properties/socialMedia")        |
| [eucharistTimetable](#eucharisttimetable) | `array`  | Required | cannot be null | [Channel](channel-properties-eucharisttimetable.md "undefined#/properties/eucharistTimetable") |

## name

The name of the channel


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Channel](channel-properties-name.md "undefined#/properties/name")

### name Type

`string`

## shortName

An abbreviation of the name to show in compact spaces such as timetables


`shortName`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Channel](channel-properties-shortname.md "undefined#/properties/shortName")

### shortName Type

`string`

## locations

List of locations from which this channel streams.


`locations`

-   is required
-   Type: `object[]` ([Location](channel-properties-locations-location.md))
-   cannot be null
-   defined in: [Channel](channel-properties-locations.md "undefined#/properties/locations")

### locations Type

`object[]` ([Location](channel-properties-locations-location.md))

## priests

List of priest names who celebrate the eucharist


`priests`

-   is required
-   Type: `string[]`
-   cannot be null
-   defined in: [Channel](channel-properties-priests.md "undefined#/properties/priests")

### priests Type

`string[]`

### priests Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## website

A homepage for the channel


`website`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Channel](channel-properties-website.md "undefined#/properties/website")

### website Type

`string`

### website Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## socialMedia

Links to social media accounts of this channel


`socialMedia`

-   is optional
-   Type: `object` ([Social media links](channel-properties-social-media-links.md))
-   cannot be null
-   defined in: [Channel](channel-properties-social-media-links.md "undefined#/properties/socialMedia")

### socialMedia Type

`object` ([Social media links](channel-properties-social-media-links.md))

## eucharistTimetable




`eucharistTimetable`

-   is required
-   Type: an array of merged types ([Timetable entry](channel-properties-eucharisttimetable-timetable-entry.md))
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable.md "undefined#/properties/eucharistTimetable")

### eucharistTimetable Type

an array of merged types ([Timetable entry](channel-properties-eucharisttimetable-timetable-entry.md))
