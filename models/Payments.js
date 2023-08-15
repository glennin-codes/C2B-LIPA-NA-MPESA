const mongoose = require("mongoose")
 const paymentSchema= new mongoose.Schema(
    {
        email:{
            type:String,
            
        },
        productName:{
            type:String,
           
        },
        datePayed:{
            type:Date,
            
        },
       
     
   
        phone:{
            type:String
        },
        amount:{
            type:String
        },
        trnx_id:{
           type:String 
        },
        merchantRequestId:{
            type:String
        }
    }
)


const Payments=mongoose.model("payments",paymentSchema);

module.exports={Payments}
