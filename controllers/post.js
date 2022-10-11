const Post = require('../models/post.model');
const createPost = async (req, res) => {
    const{title,content,tags}= req.body
try {
// let post = await Post.findOne({title: title})
// if (post) return
// res.status(404).json({ message: 'already exist' })
let post = await Post.create({title, content, tags})
res.status(201).json({ message: 'post created sucessfully', post: post })
}catch(err){
res.status(500).json({ message: err.message })
}
}
module.exports = {createPost: createPost}
