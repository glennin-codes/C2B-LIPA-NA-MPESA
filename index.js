const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');

//remember to include the correct passkey and paybill in production enviroment
const Payee= require("./routes/Routes");
require("dotenv").config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/pay',Payee);
app.get('/test',(req,res)=>{
  res.send("api working")
});

const Port =  process.env.PORT;

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(Port, () => {
    console.log(`app is listening on port :${Port}`);
  });
})
.catch((err)=>{
    console.error(err.message);
})





