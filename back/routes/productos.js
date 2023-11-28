const express = require('express');
const api = express.Router();
const upload = require ('../libs/storage')

const{addProductos, getProductos, findProductos, updateProductos, deleteProductos} = require('../controllers/productoController')

api.get('/productos', getProductos);
api.post('/productos', upload.single('imagen'), addProductos);
api.get('/productos/:id', findProductos);
api.put('/productos/:id', upload.single('imagen'), updateProductos);
api.delete('/productos/:id', deleteProductos);

module.exports = api;