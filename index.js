// Write your code here!
function displayPosts(posts){
    postList.innerHTML = '';
}
//loop through the posts list
posts.forEach(post => {

  //create a new <li> tag
  const li = document.createElement('li');
  //set the text content of the title of the post
  li.className = "post-card";

  //create a new h1 tag and add the title
  const h1 = document.createElement('h1');
  h1.textContent = post.title;

  //create a new <p> tag and add the body
  const p = document.createElement('p');
    p.textContent = post.body;
    //append the <p> and <h1> to the <li> tag
    li.appendChild(h1);
    li.appendChild(p);
    //append the <li> tag to the <ul> tag
    postList.appendChild(li);
});

//fetch the posts from the API
async function fetchAndDisplayPosts() {
  try {
    //show loading ,hide list
    loadingIndicator.style.display = 'block';
    postList.style.display = 'none';
    console.log("Fetching posts...")
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    displayPosts(data);

  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}
 

//shuffle the posts to stimulate a "random" tab
const shufflePosts=data.sort( => 0.5 - Math.random()).slice(0, 10);
fetchAndDisplayPosts(shufflePosts);