# Events guide

## How events are displayed
- Events are displayed both on the **front page** and on their dedicated **"Events" page**. 
- On the dedicated "Events" page the events table has **two different views** for desktop and mobile. 
- On the front page at most 3 upcoming events are shown at a given time, ordered by the date of that event. 
- If the exact time or the entire date of the event is not yet determined, a **conditional TBD date** is displayed for either the **whole date**, or just the **time of day**. 

## How to add an event 
Event data is stored in markdown files in the `_events` directory. To add an event, you have to create a new `.md` file for it. 

### File naming conventions 
- You should name these markdown files according to the title of the event. 
- Words should be separated by regular hyphens
- Preferably also specify the year that the event took place after the event name, to avoid collisions with other events  

### Field format
- After each field there has to be a ":" and a space 
- The fields have to be between the two `---` lines in the first and the last line 

### Required fields
Some fields are required, as they need to be displayed. Every event must contain the following fields:
```md 
---
title: <Title of the event> 
start_date: <YYYY-MM-DD HH:MM:SS> 
end_date: <YYYY-MM-DD HH:MM:SS> 

location:
  name: <Name of the location>  

tags:
  - <Tag name>
  - <Tag name> 
---
```
Note that multiple tags can be used and that location is a *composite field*, where only the `name` field is required. Also note that the nested fields of these composite fields (like tags/location) must be indented using a **consistent number of spaces** but you should aim to use **two spaces** whenever possible.

### Optional fields
```md
---
event_link: <Link to the event> -> On Orbi if possible

time_uncertain: <true / false> -> fallback to TBD for the time of day
date_uncertain: <true / false> -> fallback to TBD for the whole date section but orders events based on the date provided 

location:
  url: <Link to the location of the event> -> preferrably a 'maps.chalmers.se' link 

related_blogs:
  title: <Title of the related blog> -> can be simply called 'Link' 
  url: </YYYY/MM/DD/file-name.html> -> relative path to the html file of the blog within the repository

---
```

Note that the `time_uncertain` and `date_uncertain` fields are taken as false if omitted 
