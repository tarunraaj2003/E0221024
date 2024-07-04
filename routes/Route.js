const {Router} = require('express');
const { getProducts, addProduct,getProduct } =require('../controllers/Controller')

const router=Router()

router.get('/products',getProducts)
router.post('/add',addProduct)


module.exports=router;