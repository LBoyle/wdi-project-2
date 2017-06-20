# wdi-project-2

###My project is an interface for the TicketMaster API, the goal was to make a social platform, much like meetup.com though aimed at Live Music.

While I didn't hit all the targets in the time I had, I accomplished much and learned a lot about planning and structuring my work as well as how an API might work on a node platform.

I chose this project partly because I could keep adding features and never run out of things to do, I also chose a simple to use class based CSS framework, Bulma, to minimise time spent fidgeting with floats and clears. A potential drawback of this framework was that I had to write my own scripts to make it work, although that does allow for more freedom.

##Brief
#### Technical Requirements

Your app must:

* **Have at _least_ 2 models**
* **Incude relationships**
* **The app should include authentication**
* **Have complete RESTful routes**
* **You must use SCSS**
* **Include wireframes** - Did not meet this requirement.
* **Have semantically clean HTML**
* **Be deployed online**

#### Bonus Requirements
* **Include data from an API**
* **Add automated tests** - Didn't meet this either.


#Overview

###Main features
***
* See top venues artists and events
* Search for venues artists and events
* Save them for later
* Create and modify an accounts with secure routes
* Add or follow other users

###Technologies
***
* Node, Express, BCrypt, request-promise
* Mongo, Mongoose
* JQuery
* Bulma CSS
* TicketMaster API
* Google Geocoding and Maps APIs

###Future plans
***
* Comments
* Less templating, more AJAX
* Refine and namespace the javascript
* Fix problems with CSS transitions

#Summary of development

####First stage
Initially I had not secured an api key from my provider of choice, as I was unsure what kinda of data I would end up with, I decided to make my own models and dummy data and press on.
I wrote initial plans on paper and populated my backlog on Trello, though soon I was catching the board up with my progress. I've had trouble with planning in the past, but keeping track of it and going through the motions of a scrum helps, I think it's working.

I installed the requirements using yarn, set up a simple express app and displayed my data. Then began to replace the ejs templating with jQuery AJAX calls and routes that return JSON objects, disabling the default behaviour of links and forms so I could live update my homepage.

####Second stage
At this point I recieved an api key from TicketMaster, my second choice because they sell all sorts of tickets, not just music events. Though their data is well organised, easy to retrieve and they have a high request cap, they provided a great service.
I developed my AJAX request where needed, and played with the DOM to minize requests to the api and display the data.

Bulma.css is very easy to use and made my life easy, similar in some ways to bootstrap, I think it allows minimal, elegant design without much thought on my part, valuable stuff. Writing javascript to make it work was easy enough, I ran into some problems, but I can imagine solutions for them, should I have more time in future.

####Third stage
I had implemented user accounts and sessions, so I went about setting up the account page and favourites. Wrote routes for updating and deleting items and user accounts. The favourites are simply the object ID for TicketMaster stored in an embedded sub-document, so to display their data, I make more AJAX requests.

I set up 'friends', this was tricky because when you add a friend, both users have to be updated. I used referenced sub-documents for this, it was the first time I had used them and I liked it.

We're now quite close to the deadline, so I've just been rafactoring my fairly bloated client side javascript and trying to fix some of the awkward reloads it still needs sometimes.

###Conclusion
This is something like a first prototype, so there is much work to do on it, though it will have to wait for graduation with the workload at GA. I think I have acheived much with this project, I learned a lot about the asychronous nature of javascript and how to controll it with promises, also working with JSON objects.

I certainly followed my nose to some extent, and at this stage it is light on UX and design, heavy on features, I think this is indicitave of what interests me the most in web development, it was a valuable excersise in front-end.


***
**Readme is a work in progress**
