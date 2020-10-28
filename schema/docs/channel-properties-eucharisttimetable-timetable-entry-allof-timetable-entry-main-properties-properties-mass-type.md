# Mass type Schema

```txt
undefined#/properties/eucharistTimetable/items/allOf/0/properties/kind
```




| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [channel.schema.json\*](../out/channel.schema.json "open original schema") |

## kind Type

`string` ([Mass type](channel-properties-eucharisttimetable-timetable-entry-allof-timetable-entry-main-properties-properties-mass-type.md))

## kind Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation        |
| :--------- | ------------------ |
| `"week"`   | for weekday masses |
| `"sunday"` | for sunday masses  |
| `"feast"`  | for feasts         |
