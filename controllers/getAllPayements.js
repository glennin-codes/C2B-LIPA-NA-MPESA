const { Payments } = require("../models/Payments");
const { get } = require("../routes/Routes");

const getAllpayments=async(req,res)=>{
   try{

   }catch(e){
    console.error(e.message);
    res.status(500).send("server error")
   }
}
module.exports=getAllpayments