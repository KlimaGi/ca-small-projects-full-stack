const express = require('express');
const router = express.Router();

const { postInfo, filterPosts, deletePost, updatePost } = require('../controllers/mainController');

router.post("/addPost", postInfo);
router.post("/filter", filterPosts);
router.get("/delete/:id", deletePost);
router.post('/update', updatePost);

module.exports = router; 