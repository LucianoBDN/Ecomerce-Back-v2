import React, { useState, useEffect } from "react";
import { getProductos } from "./services";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Productos = () => {
    //const [key, setKey] = useState('marca');
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function cargarProductos() {
            const response = await getProductos();

            if (response.status === 200) {
                setProductos(response.data.productos);
            }
        }

        cargarProductos();
    }, []);

    const productoPorMarca = productos.reduce((acc, producto) => {
        if (!acc[producto.marca]) {
            acc[producto.marca] = [];
        }
        acc[producto.marca].push(producto);
        return acc;
    }, {});

    return (
        <>
        <Navbar/>
            <div>
                {Object.entries(productoPorMarca).map(([marca, productos]) => (
                    <div key={marca}>
                        <h2>{marca}</h2>
                        {productos.map((producto) => (
                            <div key={producto._id}>
                                <img src={producto.imagen} alt={producto.nombre} />
                                <h3>{producto.nombre}</h3>
                                <p>{`${producto.descripcion}`}</p>
                                <p>{`$${producto.precio}`}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <Footer/>
        </>

    );
};

export default Productos;
