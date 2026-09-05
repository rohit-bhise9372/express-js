require("./db/db.connect");

const User = require("./models/user.model");
const Post = require("./models/post.model");

const userData = {
  name: "John",
  email: "john@gmail.com",
};

const addUser = async () => {
  try {
    const newUser = new User(userData);
    await newUser.save();
    console.log("User added successfully");
  } catch (error) {
    console.log("Error:", error);
  }
};

//addUser();

const postData = {
  title: "Greeting",
  content: "Have a good day!",
  author: "6a9bdedc495c0da4c9978c69",
};

const addPost = async () => {
  try {
    const newPost = new Post(postData);
    await newPost.save();
    console.log("Post added successfully.");
  } catch (error) {
    console.log("Error", error);
  }
};

//addPost();

const getAllPosts = async () => {
  try {
    const allPosts = await Post.find().populate("author");
    console.log("All Posts:", allPosts);
  } catch (error) {
    console.log("Error", error);
  }
};
getAllPosts();
