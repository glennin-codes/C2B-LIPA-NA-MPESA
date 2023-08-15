const { Payments } = require("../models/Payments");



const checkTransaction = async(req,res)=>{
  const {merchantRequestId}=req.params;
    try{

        const document = Payments.findOne({
          merchantRequestId
        });
        if (!document) {
          // If the document doesn't exist, respond with 404
         return res.status(404).json({message:`transaction not found`});
        } else {
          console.log("transactionSucces",document)
          // If the document exists, respond with 200 and the document
          res.status(200).json(document);

        }
    }
    catch(e){
        {/**respond with the error message */ }
        res.status(500).send(e.message)
    }
}
module.exports={checkTransaction}