const mongoose=require('mongoose')
const mongoseURL='mongodb://localhost:27017/hotel';
mongoose.connect(mongoseURL);
const db=mongoose.connection;
db.on('connected',()=>{console.log("data_base Connected")});
db.on('disconnected',()=>{console.log("data_base disConnected")});
db.on('error',(error)=>{console.log("data_base Connected",error)});
module.exports=db;