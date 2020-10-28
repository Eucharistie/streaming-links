# Weekly date descriptor Schema

```txt
undefined#/properties/eucharistTimetable/items/allOf/1/anyOf/0
```

Indicates the weekdays at which an entry occurs in the timetable


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [channel.schema.json\*](../out/channel.schema.json "open original schema") |

## 0 Type

`object` ([Weekly date descriptor](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-date-descriptor-anyof-weekly-date-descriptor.md))

# Weekly date descriptor Properties

| Property      | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                              |
| :------------ | ------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [days](#days) | `array` | Required | cannot be null | [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-date-descriptor-anyof-weekly-date-descriptor-properties-days.md "undefined#/properties/eucharistTimetable/items/allOf/1/anyOf/0/properties/days") |

## days




`days`

-   is required
-   Type: `string[]` ([Weekdays](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-date-descriptor-anyof-weekly-date-descriptor-properties-days-weekdays.md))
-   cannot be null
-   defined in: [Channel](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-date-descriptor-anyof-weekly-date-descriptor-properties-days.md "undefined#/properties/eucharistTimetable/items/allOf/1/anyOf/0/properties/days")

### days Type

`string[]` ([Weekdays](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-date-descriptor-anyof-weekly-date-descriptor-properties-days-weekdays.md))

### days Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.
