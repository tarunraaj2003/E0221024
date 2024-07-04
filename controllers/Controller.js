const productModel=require('../models/Model')

module.exports.getProducts=async (req,res)=>{
    const products =await productModel.find()
    res.send(products)
}


module.exports.addProduct=async (req,res)=>{
    const {productName,price,rating,discount,availability}=req.body;

    productModel
    .create({productName,price,rating,discount,availability})
    .then((data)=>{
        console.log("Added successfully...")
        console.log(data);
        res.send(data)
    })
}

