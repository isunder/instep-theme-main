const mongoose = require("mongoose");

const categorytableschema = new mongoose.Schema({
  category: {
    type: String,
    required:true,
  },  
});
categorytableschema.set("categorytableschema",true)
const  categorytable=mongoose.model("categorytables",categorytableschema)

module.exports=categorytable;