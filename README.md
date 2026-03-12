# M335-Project
M335 Project for School

## App Idea
Delta Force Collect Tracker

### Short Explanation
The app supports players from Delta Force Extraction to have an overview of their Red Collection. The players can mark items found, overview of missing items and get clues for the finding spots of missing items. There is also a map showing how many of the reds can be found there. Helping to keep tracking easier.

### Economical reasons
This app is not just a fun app to play around. This app provides players easier access of tracking missing items, and clues to items where it can be found.

### Story Board

#### Screen 1 - All Red Collectibles
Use case: Overview of all red Collectibles

Description:
- Grid list of all red collectibles
- All items with picture and name
- On click registred as found
- Found items are colored
- Items which are not found yet are grayed

User-action:
- User clicks on item
- Switches status between found and not found

Use: Tracking of items status

#### Screen 2 - Not found items
Use case: focus on not found items

Description:
- Displays only not found items
- On click pop up window written in text where to be found
- In pop up window are the following information: Item-Name, picture, info discription where to be found and on which map

User-action:
- User clicks on missing item
- Pop up window with information

Use: Helps players search for specific item

#### Screen 3 - Map overview
Use case: Shows on Map how many of the missing items can be found with a number

Description:
- Base: Picture of Map
- On each map is a number with how many of the missing items can be found there

User-action:
- User tracks which map has how many of the missing items can possible spawn there

Use: Planning of raids

### User stories

Story 1: As a user i want all red collectibles in one overview to track my progression

Story 2: As a user i want to mark an item as found with one click so i know which ones are already found

Story 3: As a user i want to have a seperate section of not found items, so i can plan easier of not found items

Story 4: As a user i when i click on missing items i want to have a discription window with the area where i can find it

Story 5: As a user i want a map overview with an count whith how many missing items can possibly be found there

Story 6: As a user i want my data to be stored so that my progress is not reseted

### Screens
There are in totel 3 Screens implemented in this project

- Screen 1: List of all items
- Screen 2: List of not found items
- Screen 3: Map overview

### Using of API / Database
Using firebase firestore to store information

The following data will be stored and used from there
- items
- name
- information of location
- found / notfound

### 