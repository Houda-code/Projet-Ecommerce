const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  name: { type: String, maxlength: 64 , required:true},
  price:{type:Number ,required:true},
  ref: { type:Number, unique:true ,required:true},
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required:true},
  description:{type:String,required:true},
  favorite:{type:Boolean ,default:false},
  countInStock: { type: String, maxlength: 64 , required:true},
  imageUrl: {type: String,required: true,},

},
{ timestamps: true }
);


module.exports = mongoose.model("Product", ProductSchema);