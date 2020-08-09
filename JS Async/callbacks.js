const posts = [
    { title : 'post one', post : 'this is post one'},
    { title : 'post two', post : 'this is post two'}
];

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({ title : 'post three', post : 'This is post three'}, getPost);