import React, { useState, useEffect } from 'react';
import './BorrarProducto.css';
import { getProductos, deleteProductos } from '../../services';

function BorrarProductos() {
    const [productos, setProductos] = useState([]);
    const [productoSel, setProductoSel] = useState({});

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
        setProductoSel(event.target.value);
        console.log(productoSel);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        const confirmDelete = window.confirm(`¿Estás seguro que quieres eliminar el producto?`);

        if (confirmDelete) {
            deleteProductos(productoSel)
                .then((response) => {
                    handleClose();
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className="center-container">
            <button className='button-menu-delete' onClick={handleShow}>Borrar producto</button>
            {show && (
                <div>
                    <div>
                        <h5>Borrar producto</h5>
                    </div>
                    <div>
                        <form>
                            <div>
                                <label>Seleccionar producto</label>
                                <select className="select-box" value={productoSel} onChange={handleSelProducto}>
                                    <option>Seleccionar producto</option>
                                    {productos.map((producto) => (
                                        <option key={producto._id} value={producto._id}>
                                            {producto.nombre} - {producto.marca} - {producto.precio}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </form>
                    </div>
                    <div>
                        <button type="submit" onClick={handleDelete} className="delete-button">Borrar producto</button>
                        <button onClick={handleClose} className="cancel-button">Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BorrarProductos;
