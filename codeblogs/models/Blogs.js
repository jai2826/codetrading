

const mongoose = require('mongoose')


const BlogSchema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
  slug:{type:String, unique:true},
  author: String,
  body:   String,
  img: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  category:{type:String , required:true}
},{timestamps:true});

mongoose.models = {}
export default mongoose.model("Blogs",BlogSchema)