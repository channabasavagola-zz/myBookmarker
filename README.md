# myBookmarker
This is a JavaScript application to bookmark sites, but mainly to learn JS.

* Downloaded bootstrap by googling 'get bootstrap'.
* Using only "bootstrap.min.js" and "bootstrap.min.css"

* Went to https://getbootstrap.com/docs/4.0/examples/narrow-jumbotron/
* Copied the source code.
* Put that source code to index.html
* Worked my way till the bottom.
** removing <nav></nav> as it is a single page application.
** Changing project name.
** Created "style.css" and copied the content from "narrow-jumbotron.css"

* My html was ready.

* Now on to javascript.
* src'd it in the html.

* When I submit, it should store the content.
* so, I need to listen, when event submit happens.
* this is in "main.js", Explaination is also in the same file within comments.
* 'saveBookmark' is written first, so as to save the bookmarks. 
* This is called when 'submit' event happens.
* Then 'fetchBookmarks()' is written. I will call this when I load the page.
<body onload="fetchBookmarks()">
 - So as to fetch existing bookmarks and display it.
