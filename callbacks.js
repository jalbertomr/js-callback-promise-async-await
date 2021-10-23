const posts = [{title: 'post one', body: 'body of post one'},
              {title: 'post two', body: 'body of post two'}];

function getPosts(){
    let output = '';
    posts.forEach( (post, index) => {
        console.log(index + ' ' + post.title );
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
};

getPosts();