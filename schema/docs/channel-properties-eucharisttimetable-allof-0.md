# Untitled object in Channel Schema

```txt
undefined#/properties/eucharistTimetable/allOf/0
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [channel.schema.json\*](../out/channel.schema.json "open original schema") |

## 0 Type

`object` ([Details](channel-properties-eucharisttimetable-allof-0.md))

# undefined Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                         |
| :-------------------------------- | --------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [time](#time)                     | `string`  | Required | cannot be null | [Channel](channel-properties-eucharisttimetable-allof-0-properties-time.md "undefined#/properties/eucharistTimetable/allOf/0/properties/time")                     |
| [location](#location)             | `integer` | Required | cannot be null | [Channel](channel-properties-eucharisttimetable-allof-0-properties-location.md "undefined#/properties/eucharistTimetable/allOf/0/properties/location")             |
| [kind](#kind)                     | `string`  | Required | cannot be null | [Channel](channel-properties-eucharisttimetable-allof-0-properties-kind.md "undefined#/properties/eucharistTimetable/allOf/0/properties/kind")                     |
| [excludingDates](#excludingdates) | `array`   | Optional | cannot be null | [Channel](channel-properties-eucharisttimetable-allof-0-properties-excludingdates.md "undefined#/properties/eucharistTimetable/allOf/0/properties/excludingDates") |
| [language](#language)             | `string`  | Required | cannot be null | [Channel](channel-properties-eucharisttimetable-allof-0-properties-language.md "undefined#/properties/eucharistTimetable/allOf/0/properties/language")             |

## time

The time of transmission in the format of: "hh:mm".


`time`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-allof-0-properties-time.md "undefined#/properties/eucharistTimetable/allOf/0/properties/time")

### time Type

`string`

### time Constraints

**pattern**: the string must match the following regular expression: 

```regexp
(?:[0-1]\d)|(?:2[0-3]):[0-5]\d
```

[try pattern](https://regexr.com/?expression=(%3F%3A%5B0-1%5D%5Cd)%7C(%3F%3A2%5B0-3%5D)%3A%5B0-5%5D%5Cd "try regular expression with regexr.com")

### time Examples

```json
"18:30"
```

```json
"10:00"
```

## location




`location`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-allof-0-properties-location.md "undefined#/properties/eucharistTimetable/allOf/0/properties/location")

### location Type

`integer`

## kind




`kind`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-allof-0-properties-kind.md "undefined#/properties/eucharistTimetable/allOf/0/properties/kind")

### kind Type

`string`

## excludingDates




`excludingDates`

-   is optional
-   Type: `string[]`
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-allof-0-properties-excludingdates.md "undefined#/properties/eucharistTimetable/allOf/0/properties/excludingDates")

### excludingDates Type

`string[]`

## language




`language`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-allof-0-properties-language.md "undefined#/properties/eucharistTimetable/allOf/0/properties/language")

### language Type

`string`
