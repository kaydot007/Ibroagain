const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  content: {
    type: "string",
    required: true,
  },
  tags: {
    type: "Array",
  },
},
{
    timestamps: true,
}
);
const Post = mongoose.model('Post', PostSchema)
module.exports = Post;
