

const mongoose = require('mongoose')


const Authorschema = new mongoose.Schema({
    name: {type:String, required:true},
    image: String,
    about: String,
    role: String
},{timestamps:true});

mongoose.models = {}
export default mongoose.model("Author",Authorschema)