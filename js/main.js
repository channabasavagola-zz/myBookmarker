// Listern for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);
// I will get the form by ID 'myForm' because I gave the form id as 'myForm'.
// I need to listen to event which will take some parameters, that is the actual
// event that it is going to listen. 
// Then I should call a function when it listens to the event.




// Save bookmark
function saveBookmark(e){
	// console.log('It Works');

	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value
	// console.log(siteName);
	// console.log(siteUrl);

	if(!validateForm(siteName, siteUrl)){
		return false
	}

	var bookmark = {
		name: siteName,
		url: siteUrl
	}

	// console.log(bookmark);

	/*
		// Local storage test
		// localStorage.setItem is part of html5
		// To check this, I should go to 'Application' instead on 'console'
		// On the LHS, under Storage --> Local Storage, I should have a keyword 'test'.
		// Value of keyword 'test' --> 'Hello World'
		localStorage.setItem('test', 'Hello World');
		console.log(localStorage.getItem('test'));
		localStorage.removeItem('test');
		console.log(localStorage.getItem('test'));
	*/

	// bookmarks is like pickle. 
	// I push into it if it is new, and save it.
	// If it already exists, I will fetch it, push into it, save it.
	if (localStorage.getItem('bookmarks') === null){
		alert(1);
		var bookmarks = [];
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	// Clear Form or fields
	document.getElementById('myForm').reset();
	fetchBookmarks();
	// Prevent form from submitting
	e.preventDefault(); // without this like, the page submits, and I will not
						// be able to see the output in the console!
}

function validateForm(siteName, siteUrl){
	if(!siteName || !siteUrl){
		alert("Please fill in the form!");
		return false;
	}

	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);

	if(!siteUrl.match(regex)){
		alert('Please use a valid URL!');
		return false;
	}
	return true;
}

function deleteBookmark(url){
	// Getting bookmarks from localStorage.
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	
	for(var i = 0; i < bookmarks.length; i++){
		if (bookmarks[i].url == url){
			bookmarks.splice(i, 1);
		}
	}
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	fetchBookmarks();
}
// Fetch Bookmarks
function fetchBookmarks(){
	// Getting bookmarks from localStorage.
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	// I will print this below 'submit' form.
	// Get the id of the div, print it there.
	var bookmarksResults = document.getElementById('bookmarksResults');

	bookmarksResults.innerHTML = '';

	for(var i = 0; i < bookmarks.length; i++){
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		// bookmarksResults.innerHTML += name;
		bookmarksResults.innerHTML += '<div class="card card-body bg-light">' +
									  '<h3>' + name +
									  '<a class="btn btn-link" target="_blank" href="'+url+'">Visit</a>'+
									  '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" target="" href="#">Delete</a>'+
									  '</h3>' +
									  '</div>';
	}

}