var express = require('express');
var router = express.Router();

//REQUIRE CONTROLLERS - MIDDLEWARES - VALIDATIONS
const {productsList, productDetail, create, update, destroy, image} = require('../controllers/productsController');
const uploadProducts =require('../../middlewares/uploadFilesProducts');
const adminCheck =require('../../middlewares/adminCheck');
const userSessionCheck =require('../../middlewares/userSessionCheck');
const productValidator = require('../../validations/productValidator');

router.get('/', productsList);
router.get('/image/:image', image);
router.get('/productDetail/:id', productDetail);
router.post('/productsLoad', adminCheck, uploadProducts.array('imagen'), productValidator, create);
router.put('/update/:id', adminCheck, uploadProducts.array('imagen'),productValidator, update);
router.delete('/deleteProduct/:id', adminCheck, destroy);

module.exports = router;