# Safari Sorority

## Overview

The Safari Sorority is designed for users to create, search through, and view the various social media posts made for any animal you can think of!  Focusing on frontend development, this project was designed to apply our team's skills working with React in a fun and creative way.

## Description

This application allows users to first view the posts made to Safari Sorority.  With each post, the user is able to see:
* the animal's name
* an image
* a description of the post
* the amount of likes it received
* any comments made

When users click on the paw print for a post, the number of likes increases by one.  If a user chooses to write and enter a comment, the comment is listed under the post.  A delete button is located next to each comment which removes it from view.  All changes are updated in the db.json file as they occur.

When users click on the form button, a form will appear which will prompt the user to enter values for each of the inputs.  Upon submission, a card is created for the post and it is added either to the top or bottom of the list of posts as well as being added to the db.json file.

When users search for an animal or post, the list of posts displayed updates in real time with the users typing.  The posts are filtered and are only displayed if their content matches the value being searched.

If a user clicks on any of the posts, they are taken to a page containing just that post in a larger size.  Client-routing is used to take users from the main page and individual post pages.  Liking and commenting functionality is still accessible when viewing the single-post page.

## Technologies Implemented

Since this application is an exercise in our team's ability to work with React, our application is made of React components that are centralized in the App.js file which is rendered to the HTML file.  No HTML is hardcoded but instead is rendered with JSX throughout the various React components.

All styling is done with vanilla CSS and is located in a separate CSS file.

Client-side routing creates a multi-page single-page application.