const express = require("express");
const router=express.Router();

const {checkTransaction}= require("../controllers/checkTransaction.js")
const {CreateToken, callBack,stkPush}= require('../controllers/Token.js');
const { Payments } = require("../models/Payments.js");
router.post("/",CreateToken,stkPush)

router.post('/callback',callBack)
router.get('/payments',Payments)

router.get(`/check-transaction/:merchantRequestId`,checkTransaction)
module.exports=router