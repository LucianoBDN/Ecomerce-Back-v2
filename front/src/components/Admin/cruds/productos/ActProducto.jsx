// ActProductos.jsx

import React, { useState, useEffect, useRef } from 'react';
import './ActProducto.css';
import { getProductos, updateProductos } from '../../services';

function ActProductos() {
    const [productos, setProductos] = useState([]);
    const [productoSel, setProductoSel] = useState("");
    const [datosProducto, setDatosProducto] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        async function cargaProductos() {
            const response = await getProductos();

            if (response.status === 200) {
                setProductos(response.data.productos);
            }
        }
        cargaProductos();
    }, []);

    const handleSelProducto = (event) => {
        const selectedProducto = productos.find((producto) => producto._id === event.target.value);
        setProductoSel(event.target.value);
        setDatosProducto(selectedProducto);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputFileRef = useRef();

    const handleSubmit = () => {
        const newNombre = datosProducto.nombre;
        const newDescripcion = datosProducto.descripcion;
        const newMarca = datosProducto.marca;
        const newPrecio = datosProducto.precio;
        const newImagen = inputFileRef.current?.files[0];

        const datosNuevos = {
            nombre: newNombre,
            descripcion: newDescripcion,
            marca: newMarca,
            precio: newPrecio,
            imagen: newImagen,
        };

        const confirmActualizar = window.confirm(`¿Estás seguro que quieres actualizar el producto?`);

        if (confirmActualizar) {
            updateProductos(productoSel, datosNuevos)
                .then((response) => {
                    handleClose();
                    window.location.reload();
                });
        }
    };

    return (
        <div className="update-product-container">
            <div className="update-product-button-container">
                <button className="update-product-button" onClick={handleShow}>Actualizar producto</button>
            </div>
            {show && (
                <div className="update-product-modal">
                    <div>
                        <h5>Actualizar producto</h5>
                    </div>
                    <div>
                        <form>
                            <div>
                                <label>Seleccionar producto</label>
                                <select value={productoSel} onChange={handleSelProducto}>
                                    <option>Seleccionar producto</option>
                                    {productos.map((producto) => (
                                        <option key={producto._id} value={producto._id}>
                                            {producto.nombre} - {producto.marca} - {producto.precio}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {productoSel && (
                                <div>
                                    <div>
                                        <label>Nombre del producto</label>
                                        <input defaultValue={datosProducto.nombre} name="nombre" onChange={(event) => { setDatosProducto({ ...datosProducto, nombre: event.target.value }) }} />
                                    </div>
                                    <div>
                                        <label>Descripción del producto</label>
                                        <input defaultValue={datosProducto.descripcion} name="descripcion" onChange={(event) => { setDatosProducto({ ...datosProducto, descripcion: event.target.value }) }} />
                                    </div>
                                    <div>
                                        <label>Marca del producto</label>
                                        <input defaultValue={datosProducto.marca} name="marca" onChange={(event) => { setDatosProducto({ ...datosProducto, marca: event.target.value }) }} />
                                    </div>
                                    <div>
                                        <label>Precio del producto</label>
                                        <input defaultValue={datosProducto.precio} name="precio" onChange={(event) => { setDatosProducto({ ...datosProducto, precio: event.target.value }) }} />
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                    <div>
                        <button type="submit" onClick={handleSubmit}>Actualizar producto</button>
                        <button className='button-cancel' onClick={handleClose}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ActProductos;
