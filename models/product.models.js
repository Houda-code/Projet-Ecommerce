const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  name: { type: String, maxlength: 64 , required:true},
  price:{type:Number ,required},
  ref: { type:Number, unique:true ,required:true},
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required:true},
  description:{type:String,required:true},
  favorite:{type:Boolean ,default:false}

},
{ timestamps: true }
);


module.exports = mongoose.model("Product", ProductSchema);