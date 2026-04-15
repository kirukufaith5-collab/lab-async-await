// Write your code here!
function displayPosts(posts){
    const postList =document.getElementById('post-list');
}
//loop through the posts list
posts.forEach(post => {

  //create a new <li> tag
  const li = document.createElement('li');
  //set the text content of the title of the post
  li.textContent = post.title;
  //create a new <p> tag and add the body
  const p = document.createElement('p');
    p.textContent = post.body;
    //append the <p> tag to the <li> tag
    li.appendChild(p);
    //append the <li> tag to the <ul> tag
    postList.appendChild(li);
});

//fetch the posts from the API
async function fetchAndDisplayPosts() {
  try {
    console.log("Fetching posts...")
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    displayPosts(data);
     

    

  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}
fetchAndDisplayPosts();