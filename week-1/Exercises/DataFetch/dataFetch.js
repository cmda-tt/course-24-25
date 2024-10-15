// Import the apiUtil.js module with the exported functions.

// Display only the first 5 post title and body. Function is not complete, fill in the blanks.
async function displayPosts() {
  posts.slice(0, 5).forEach((post) => {
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
  });
}

displayPosts();
