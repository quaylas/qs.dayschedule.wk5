# Challenge 5: Workday Scheduler | QS

For this week's challenge, we built a simple workday scheduler using Bootstrap and JQuery libraries, along with Moment.js and assorted other open source tools. 

The scheduler can be accessed live [here](https://quaylas.github.io/qs.dayschedule.wk5).

Table of Contents
* [User Story and Acceptance Criteria](#user-story-and-acceptance-criteria)
* [Key Features](#key-features)
* [Future Improvements](#future-improvements)
* [Images](#images)

---

## User Story and Acceptance Criteria

### User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria

```
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
```
```
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
```
```
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
```
```
WHEN I click into a time block
THEN I can enter an event
```
```
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
```
```
WHEN I refresh the page
THEN the saved events persist
```

---

## Key Features

* The scheduler color-codes hours of the day according to their relationship to the current time (past, present, or future)
* The scheduler saves all previously entered events in local storage

---

---
## Images
### Desktop View

![Desktop view of workday scheduler](./assets/images/desktopView.png)