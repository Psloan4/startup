# Startup Project - Exercise Progress Tracker
Exercise is an important aspect of the average persons life, and it is important to set and track goals in regards to ones health. The problem for many is that it is sometimes hard to understand what goals are right for you and your lifestyle. One great way to get feedback ones health and wellness is to engage in communities that would like to similarly improve their health and progressively increase strength, longevity, or whatever metric they desire.
The intent of my startup project would be to create a website wherein users could engage with others who are similarly trying to further their exercise goals, and seek support in doing so. The website will allow users to input their goals, and track their progress using logs of their exercise. For many, exercise can be a competitive thing, so if the user desires, they can display this information publicly, and compare it to others to assess whether or not their goals need to be revised.
## Key Features
The key features of this project include:
- managing a database of accounts (usernames and passwords) as well as data associated with each account
- allowing user input of exercise goals (run times, bench press weight, etc)
- allowing user input of an exercise log, allowing the user to track their progress towards their goal
- seeing the stats of other users on the website
- compare their current standing with other users around the world
## Rough Draft
<img src="https://github.com/Psloan4/startup/blob/main/Project%20rough%20sketch.png" width="600"/>
## Applicable Technologies
**HTML:** Uses standard convention for HTML, with files for login, your progress, and global standings
**CSS:** Application will follow a minimalistic style, with good spacing between different boxes of information across the page
**JavaScript:** Manages login, database queries, tracking global statistics
**React:** Single page application with views componentized and reactive to user's actions.
**Service:** retrieves data of other users, retrives global data for specified exercises, and submits goals and logs
**DB/Login:** Stores users, exercise log history, and goals
**WebSocket:** as users update their private data, global data will be updated according, and adjusts global standings
##HTML
- HTML documentation will include the different webpages accessable within the startup website
- These pages include index, login, leaderboards, and personal statistics pages
- the login and statistics pages will include connection to a database storing the data for each user
- a websocket connection will be plugged into the leaderboard page, in which you can select a catagory to display, and compare your inputted number with the average case in the database
- The format is as follows: basic navigation features in the header, a main body which includes the contents of the desired page, and a footer linking to the creator (me) and my repository
##CSS
- There is a main.css file in the StartupFiles that controls CSS for all the overarching design
- Seperate CSS pages exist/can be created for specific pages which need greater control over their design
- It is designed to keep the header anchored to the top, with tabs controlling which page you are looking at
- The contents of the main section are aligned to the center, controlled by the page size
- Bootstrap was used for the tabs at the top of the screen, making navigation more intuitive
##React
- restructured the project so it now builds off a root react app, that dynamically creates the html file of the whole project
- changed routing to now navigate using react Route componenets for more streamlined operation
- used states to control the navigation element that should be highlighted, and the username that is displayed on login
- added basic login logout functionality, although it is currently bare bones, as this will largely be replaced when we get to services
