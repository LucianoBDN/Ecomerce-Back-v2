import React, { useState, useEffect } from "react";
import { getProductos } from "./services";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './Productos.css';
//import zapa from "./publicidadmujer.jpeg";

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMarca, setSelectedMarca] = useState('');

    useEffect(() => {
        async function cargarProductos() {
            const response = await getProductos();

            if (response.status === 200) {
                setProductos(response.data.productos);
            }
        }

        cargarProductos();
    }, []);

    const marcas = [...new Set(productos.map(producto => producto.marca))];

    // Filter products based on search term and selected brand
    const filteredProductos = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedMarca === '' || producto.marca === selectedMarca)
    );

    return (
        <>
            <Navbar />
            <div className="products-catalogo">
                <div className="filters">
                    <input
                        type="text"
                        placeholder="Buscar por nombre de producto"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        value={selectedMarca}
                        onChange={(e) => setSelectedMarca(e.target.value)}
                    >
                        <option value="">Todas las marcas</option>
                        {marcas.map((marca, index) => (
                            <option key={index} value={marca}>{marca}</option>
                        ))}
                    </select>
                </div>
                <div className="producto-container">
                    {filteredProductos.map((producto) => (
                        <div className="producto-card" key={producto._id}>
                            <img src={producto.imagen} alt={producto.nombre} />
                            <h3>{producto.nombre}</h3>
                            <p>{`${producto.descripcion}`}</p>
                            <p>{`$${producto.precio}`}</p>
                            <h6>{producto.marca}</h6>
                            <button>Agregar al carrito</button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Productos;
