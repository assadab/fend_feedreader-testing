## Project Overview

For a live preview, [click here](https://assadab.github.io/fend_feedreader-testing/) .

# How to open application

Download the repository in your computer, unzip it and open index.html in your browser to see the working tests.

# Feed Reader Testing Project

This project is part of Udacity's Front End Development nanodegree program.

In this project I write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation. The application given is a web-based application that reads RSS feeds. 

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## Project Implementation

Used Jasmine's behavior-driven development framework for testing Javascript code. For more information, review the [Jasmine documentation](http://jasmine.github.io).

* Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
* Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
* Write a new test suite named `"The menu"`.
* Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
* Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
* Write a test suite named `"Initial Entries"`.
* Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
* Write a test suite named `"New Feed Selection"`.
* Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.



Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

