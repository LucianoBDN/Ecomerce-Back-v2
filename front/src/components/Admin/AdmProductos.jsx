// AdmProductos.jsx

import React, { useState, useEffect } from 'react';
import { getProductos } from "./services";
import CrearProducto from "./cruds/productos/CrearProducto";
import ActProducto from "./cruds/productos/ActProducto";
import BorrarProducto from "./cruds/productos/BorrarProducto";
import './AdmProductos.css';

export const AdmProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function cargaProductos() {
            const response = await getProductos();

            if (response.status === 200) {
                setProductos(response.data.productos);
            }
        }
        cargaProductos();
    }, []);

    return (
        <>
            <CrearProducto />
            <ActProducto />
            <BorrarProducto />
            <h2 className='h2-admproducto'>Lista de productos</h2>
        <section className="adm-productos-container">
            {productos.map(({ _id, nombre, marca, precio, imagen }) => (
                <div className="card" key={_id}>
                    <div className="card-info">
                        <div className="card-item">
                            <div className="card-label">Nombre del producto</div>
                            <h3>{nombre}</h3>
                        </div>
                        <div className="card-item">
                            <div className="card-label">Marca</div>
                            <h3>{marca}</h3>
                        </div>
                        <div className="card-item">
                            <div className="card-label">Precio</div>
                            <h3>{precio}</h3>
                        </div>
                    </div>
                    <div className="card-image">
                        <img src={process.env.PUBLIC_URL + imagen} alt="" />
                    </div>
                </div>
            ))}
        </section>
        </>
    );
}

export default AdmProductos;
