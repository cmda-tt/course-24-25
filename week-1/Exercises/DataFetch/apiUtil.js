// Write a module that fetches a dataset e.g. 'fake' posts from Json Placeholder. https://jsonplaceholder.typicode.com/posts

async function fetchPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Export the functions using named exports.
export { fetchPosts };
