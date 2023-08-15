const express = require("express");
const router=express.Router();

const {checkTransaction}= require("../controllers/checkTransaction.js")
const {CreateToken, callBack,stkPush}= require('../controllers/Token.js');
const getAllpayments = require("../controllers/getAllPayements.js");
router.post("/",CreateToken,stkPush)

router.post('/callback',callBack);
router.get('/payments',getAllpayments);

router.get(`/check-transaction/:merchantRequestId`,checkTransaction)
module.exports=router