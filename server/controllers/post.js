const Post = require('../models/Post');

const getAllPosts = async (req, res) => {
  try {
    res.status(200).json({ data: 'get all posts' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllPostForClassroom = async (req, res) => {
  try {
    res.status(200).json({ data: 'get all posts' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllPostForTeacher = () => {};

const updatePost = () => {};

const deletePost = () => {};

const getPost = () => {};

const addPost = () => {};

module.exports = {
  getAllPosts,
  getAllPostForClassroom,
  getAllPostForTeacher,
  updatePost,
  deletePost,
  getPost,
  addPost,
};
