var express = require('express');
var router = express.Router();

//REQUIRE CONTROLLERS - MIDDLEWARES - VALIDATIONS
const {productDetail, productsLoad, create, productEdit, update, cart, cartAdress, cartPay, destroy} = require('../controllers/productsController');
const uploadProducts =require('../middlewares/uploadFilesProducts');
const adminCheck =require('../middlewares/adminCheck');
const userSessionCheck=require('../middlewares/userSessionCheck')
const productValidator = require('../validations/productValidator');


//GET PRODUCT

//PRODUCTS DETAIL
router.get('/productDetail/:id', productDetail);

//PRODUCTS lOAD
router.get('/productsLoad',adminCheck, productsLoad);
router.post('/productsLoad', adminCheck, uploadProducts.array('imagen'), productValidator, create);

//PRODUCT EDIT
router.get('/productEdit/:id', adminCheck, productEdit);
router.put('/update/:id', adminCheck, uploadProducts.array('imagen'),productValidator, update);

//PRODUCT DELETE
router.delete('/deleteProduct/:id', adminCheck, destroy);

//CART
router.get('/cart', cart);
router.get('/cartAdress', cartAdress);
router.get('/cartPay', cartPay);


module.exports = router;