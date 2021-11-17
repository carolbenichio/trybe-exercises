const express = require('express');
const rescue = require('rescue');
const { getProducts, getProductById, addProduct, deletesProduct, updatesProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/', rescue(getProducts));

router.get('/:id', rescue(getProductById));

router.post('/', rescue(addProduct));

router.delete('/:id', rescue(deletesProduct));

router.put('/:id', rescue(updatesProduct));

module.exports = router;