import React, { useState, useRef } from 'react';
import { saveProductos } from '../../services';


function CrearProductos() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [marca, setMarca] = useState('');
    const [precio, setPrecio] = useState('');

    const inputFileRef = useRef();

    const handleSubmit = (productosData) => {
        saveProductos(productosData = {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            marca: marca,
            imagen: inputFileRef.current.files[0],
        })
            .then((response) => {
               
                

            });
    }


    return (
        <div>
            <h5>Crear producto</h5>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre del producto</label>
                    <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div>
                    <label>Descripción del producto</label>
                    <input type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
                </div>
                <div>
                    <label>Marca del producto</label>
                    <input type="text" value={marca} onChange={(event) => setMarca(event.target.value)} />
                </div>
                <div>
                    <label>Precio del producto</label>
                    <input type="text" value={precio} onChange={(event) => setPrecio(event.target.value)} />
                </div>
                <div>
                    <label>Seleccionar imagen</label>
                    <input type="file" ref={inputFileRef} />
                </div>
                <div>
                    <button type="submit">Agregar producto</button>
                </div>
            </form>
        </div>
    );
}

export default CrearProductos;
