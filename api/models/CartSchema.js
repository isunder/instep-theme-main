const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    productid:{
        type:String,
        require:true
    },
    userid:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },

})


cartSchema.set("products",true);
const Usercart=mongoose.model("Usercart",cartSchema)
module.exports=Usercart