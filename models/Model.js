const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productName:{
        type:String
    },
    price:{
        type:Number
    },
    rating:{
        type:Number
    },
    discount:{
        type:Number
    },
    availability:{
        type:String
    }
})

module.exports=mongoose.model('product',productSchema)