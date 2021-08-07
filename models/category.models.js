const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: { type: String },
  brand:{ type:String ,required:true  },
 // product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required:true}],
  
});
module.exports = mongoose.model("Category", CategorySchema);