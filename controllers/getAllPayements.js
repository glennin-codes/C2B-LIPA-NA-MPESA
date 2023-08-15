const { Payments } = require("../models/Payments");

const getAllpayments=async(req,res)=>{
   try{
      const AllPayments=await Payments.find();
      console.log("all payees",AllPayments);
      res.status(200).json(AllPayments);
    
   }catch(e){
    console.error(e.message);
    res.status(500).send("server error")
   }
}
module.exports=getAllpayments;