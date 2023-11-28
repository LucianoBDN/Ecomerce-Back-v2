const Producto = require('../models/Productos');


//agregar productos a la base de datos
async function addProductos(req, res) {
    try {
        const { nombre, descripcion, imagen, precio, marca } = req.body

        const producto = Producto({
            nombre,
            descripcion,
            imagen,
            precio,
            marca,
        })

        if (req.file) {
            const { filename } = req.file;
            producto.setImagen(filename)
        }
        const productos = await producto.save();
        res.status(201).send({ productos })
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}

//mostrar los productos

async function getProductos(req, res) {
    try {
        const productos = await Producto.find()
        return res.status(200).json({ productos });
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}

//traer los productos por ID 

async function findProductos(req, res) {
    try {
        const productos = await Producto.findById(req.params.id)
        res.status(200).send({ productos });
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}

//Actualizar producto

async function updateProductos(req, res) {
    try {
        const productos = await Producto.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).send({ productos });
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}

//eliminar producto

async function deleteProductos(req, res) {
    try {
        const productos = await Producto.findByIdAndDelete(req.params.id)
        res.status(200).send({ productos });
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}

module.exports = { addProductos, getProductos, findProductos, updateProductos, deleteProductos };