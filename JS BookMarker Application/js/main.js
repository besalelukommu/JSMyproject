// listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);

// save bookmark
function saveBookmark(e){
     // Get from values
     var siteName = document.getElementById('siteName').value;
     var siteUrl = document.getElementById('siteUrl').value;

     if(!validateForm(siteName, siteUrl)){
         return false;
     }
     var bookmark = {
         name : siteName,
         url : siteUrl
     }
/*
     // Local storage file
    //  localStorage.setItem('test', 'Hello world');
    //  console.log(localStorage.getItem('test'));
    //  localStorage.removeItem('test');
    //  console.log(localStorage.getItem('test'));
*/

     // Test if bookmark is null
     if(localStorage.getItem('bookmarks') === null){
        // init array
        var bookmarks = [];
        // add to array
        bookmarks.push(bookmark);
        // set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

     }else{
        // get bookmarks from localstrorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add bookmark to array
        bookmarks.push(bookmark);
        // reset back to localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
     }

     // Clear form
     document.getElementById('myForm').reset();
     // Re-fetch bookmarks
    fetchBookmarks();

     // prevent form from submitting
    e.preventDefault();
}

// Delete bookmark
function deleteBookmark(url){
    // Get bookmarks from localstorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // loop throught bookmarks
    for(var i=0; i< bookmarks.length; i++){
        if(bookmarks[i].url == url){
           bookmarks.splice(i, 1);  
        }
    }
    // reset back to localstorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Re-fetch bookmarks
    fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks(){
    // get bookmarks from localstrorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // console.log(bookmarks);
    // get output id
    var bookmarksResults = document.getElementById('bookmarkResults');
    // build output
    bookmarksResults.innerHTML='';
    if(bookmarks === null){
        bookmarksResults.innerHTML = 'There is no bookmarks saved!';
    }else{
        for(var i = 0; i < bookmarks.length; i++){
            var name = bookmarks[i].name;
            var url = bookmarks[i].url;
    
            bookmarksResults.innerHTML += '<div class="well">'+
                                          '<h3>'+name+'</h3>'+
                                          '<a href="'+url+'" class="btn btn-secondary" target="_blank">Visit</a>'+
                                          '<a onclick="deleteBookmark(\''+url+'\')" href="#" class="btn btn-danger">Delete</a>'+
                                          '</div>';
        }
    }
    
}

// Validate form
function validateForm(siteName, siteUrl){
    if(!siteUrl || !siteName){
        alert('please fill all fileds!!');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%._\+~#?&//=]{2,256}\.[a-zA-Z0-9()]{2,4}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    
    if(!siteUrl.match(regex)){
       alert('Please use valid URL');
       return false;
    }

    return true;
}