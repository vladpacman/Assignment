const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
  Favorites: String,
  "From URL": String,
  "To URL": String,
  "Anchor Text": String,
  "Link Status": String,
  Type: String,
  BLdom: String,
  DomPop: String,
  Power: Number,
  Trust: Number,
  "Power*Trust": Number,
  Alexa: String,
  IP: String,
  CNTRY: String,
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;
