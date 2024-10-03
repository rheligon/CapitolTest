// Define the data array for the blog posts
const posts = [
  {
    id: 1,
    title: "title1",
  },
  {
    id: 2,
    title: "title2",
  },
];

// Import the express module
const express=require('express');
// Create an instance of the express application
const app=express();
// Specify a port number for the server
const port=5000;
// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Create a route and a handler for GET /posts
app.get('/posts', (req, res) => {
  // Send the posts array as a JSON response
  res.status(200).json(posts);
});


