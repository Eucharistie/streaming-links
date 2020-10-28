# Untitled string in Channel Schema

```txt
undefined#/properties/eucharistTimetable/items/allOf/0/properties/time
```

The time of transmission in the format of: "hh:mm".


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [channel.schema.json\*](../out/channel.schema.json "open original schema") |

## time Type

`string`

## time Constraints

**pattern**: the string must match the following regular expression: 

```regexp
(?:[0-1]\d)|(?:2[0-3]):[0-5]\d
```

[try pattern](https://regexr.com/?expression=(%3F%3A%5B0-1%5D%5Cd)%7C(%3F%3A2%5B0-3%5D)%3A%5B0-5%5D%5Cd "try regular expression with regexr.com")

## time Examples

```json
"18:30"
```

```json
"10:00"
```
