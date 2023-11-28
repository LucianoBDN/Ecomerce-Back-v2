import React, { useState, useEffect } from 'react';
import { getProductos } from "./services";
import CrearProducto from "./cruds/productos/CrearProducto";
import ActProducto from "./cruds/productos/ActProducto";
import BorrarProducto from "./cruds/productos/BorrarProducto";


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
            <section>


                <CrearProducto />
                <ActProducto />
                <BorrarProducto />



                {productos.map(({ _id, nombre, marca, precio, imagen }) => (
                    <div key={_id}>
                        <div>
                            <div>Nombre del producto</div>
                            <h3>{nombre}</h3>
                        </div>
                        <div>
                            <div>Marca</div>
                            <h3>{marca}</h3>
                        </div>
                        <div>
                            <div>Precio</div>
                            <h3>{precio}</h3>
                        </div>
                        <div>
                            <div>Imagen</div>
                            <img src={process.env.PUBLIC_URL + imagen} alt="" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                        </div>
                    </div>
                ))}
            </section>

        </>
    );
}

export default AdmProductos;
