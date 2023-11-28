const mongoose = require('mongoose');

const { appConfig } = require('../config');

const productoSchema = new mongoose.Schema(
    {
        nombre: String,
        descripcion: String,
        imagen: String,
        precio: String,
        marca: String
    },
    {
        timestamps: true,
    }
);

productoSchema.methods.setImagen = function setImagen(filename){
    const {host, port} = appConfig;
    this.imagen = `${host}:${port}/public/${filename}`;
};

const Producto = mongoose.model('Productos', productoSchema)

module.exports = Producto;