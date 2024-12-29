const mongoose=require('mongoose')
const menuHotel=new mongoose.Schema({
    name:{
        type:String,
        reqrired:true
    },
    price:{
    type:Number,
    required:true ,
    default:55 
    },
    test:{
        type:String,
        enum:['sweet','spice','sour'],
        required:true   
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredient:{
        type:[String],
        default:[]
    },
    num_sale:{
        type:Number,
        default:0
    }
});
const menu=mongoose.model('Menu',menuHotel);
module.exports=menu;