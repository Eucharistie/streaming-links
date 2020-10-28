# Timetable entry main properties Schema

```txt
undefined#/properties/eucharistTimetable/items/allOf/0
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [channel.schema.json\*](../out/channel.schema.json "open original schema") |

## 0 Type

`object` ([Timetable entry main properties](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties.md))

# Timetable entry main properties Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                             |
| :-------------------------------- | --------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [time](#time)                     | `string`  | Required | cannot be null | [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-time.md "undefined#/properties/eucharistTimetable/items/allOf/0/properties/time")                     |
| [kind](#kind)                     | `string`  | Required | cannot be null | [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-mass-type.md "undefined#/properties/eucharistTimetable/items/allOf/0/properties/kind")                |
| [location](#location)             | `integer` | Required | cannot be null | [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-location.md "undefined#/properties/eucharistTimetable/items/allOf/0/properties/location")             |
| [language](#language)             | `string`  | Required | cannot be null | [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-language.md "undefined#/properties/eucharistTimetable/items/allOf/0/properties/language")             |
| [excludingDates](#excludingdates) | `array`   | Optional | cannot be null | [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-excludingdates.md "undefined#/properties/eucharistTimetable/items/allOf/0/properties/excludingDates") |

## time

The time of transmission in the format of: "hh:mm".


`time`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-time.md "undefined#/properties/eucharistTimetable/items/allOf/0/properties/time")

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

## kind




`kind`

-   is required
-   Type: `string` ([Mass type](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-mass-type.md))
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-mass-type.md "undefined#/properties/eucharistTimetable/items/allOf/0/properties/kind")

### kind Type

`string` ([Mass type](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-mass-type.md))

### kind Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation        |
| :--------- | ------------------ |
| `"week"`   | for weekday masses |
| `"sunday"` | for sunday masses  |
| `"feast"`  | for feasts         |

## location

An index into the top level locations array


`location`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-location.md "undefined#/properties/eucharistTimetable/items/allOf/0/properties/location")

### location Type

`integer`

## language




`language`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-language.md "undefined#/properties/eucharistTimetable/items/allOf/0/properties/language")

### language Type

`string`

## excludingDates




`excludingDates`

-   is optional
-   Type: `string[]` ([Date](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-excludingdates-date.md))
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-excludingdates.md "undefined#/properties/eucharistTimetable/items/allOf/0/properties/excludingDates")

### excludingDates Type

`string[]` ([Date](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-excludingdates-date.md))

### excludingDates Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.
