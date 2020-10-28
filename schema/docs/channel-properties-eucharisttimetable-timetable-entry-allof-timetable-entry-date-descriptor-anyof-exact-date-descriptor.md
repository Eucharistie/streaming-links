# Exact date descriptor Schema

```txt
undefined#/properties/eucharistTimetable/items/allOf/1/anyOf/1
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [channel.schema.json\*](../out/channel.schema.json "open original schema") |

## 1 Type

`object` ([Exact date descriptor](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-date-descriptor-anyof-exact-date-descriptor.md))

# Exact date descriptor Properties

| Property        | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                               |
| :-------------- | ------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dates](#dates) | `array` | Required | cannot be null | [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-date-descriptor-anyof-exact-date-descriptor-properties-dates.md "undefined#/properties/eucharistTimetable/items/allOf/1/anyOf/1/properties/dates") |

## dates




`dates`

-   is required
-   Type: `string[]` ([Date](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-date-descriptor-anyof-exact-date-descriptor-properties-dates-date.md))
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-date-descriptor-anyof-exact-date-descriptor-properties-dates.md "undefined#/properties/eucharistTimetable/items/allOf/1/anyOf/1/properties/dates")

### dates Type

`string[]` ([Date](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-date-descriptor-anyof-exact-date-descriptor-properties-dates-date.md))

### dates Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.
