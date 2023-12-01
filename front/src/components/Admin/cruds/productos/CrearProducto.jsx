import React, { useState } from 'react';
import { saveProductos } from '../../services';



function AgregarProducto() {
    // hooks
    const [imgUrl, setImgUrl] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [marca, setMarca] = useState('');

    function handleFileChange(e) {
        const file = e.target.files[0];

        // Convierte el objeto File a URL
        const reader = new FileReader();
        reader.onloadend = () => {
            setImgUrl(reader.result);
        };
        reader.readAsDataURL(file);
    }

    function AgregarProducto() {
        
        const formData = {
            img: imgUrl.toString(),
            nombre,
            descripcion,
            precio,
            marca,
        };
        console.log(formData);
        saveProductos(formData)
            .then(res => {
                alert("producto añadido correctamente");
            })
            .catch(err => {
                console.error(err.message);
            });
    }

    return (
        <>
            
            <section className='addProduct '>
                <h1>Agregar Zapatillas</h1>
                <div>
                    <label htmlFor="img">
                        Imagen del producto
                        <input type="file" id='img' onChange={handleFileChange}   />
                    </label>
                </div>
                <div>
                    <label htmlFor='nombre'>
                        Nombre Del Producto
                        <input type='text' id='nombre' name='nombre' value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
                    </label>
                </div>
                <div>
                    <label htmlFor='descripcion'>
                        Descripcion Del Producto
                        <input type="text" id='descripcion' name='descripcion' value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }} />
                    </label>
                </div>
                <div>
                    <label htmlFor="precio">
                        Precio Del Producto
                        <input type="text" id='precio' name='Precio' value={precio} onChange={(e) => { setPrecio(e.target.value) }} />
                    </label>
                </div>
                <div>
                    <label htmlFor="marca">
                        Marca Del Producto
                        <input type="text" id='marca' name='marca' value={marca} onChange={(e) => { setMarca(e.target.value) }} />
                    </label>
                </div>
                <button onClick={AgregarProducto} >Agregar Producto</button>
            </section>
            
        </>
    );
}

export default AgregarProducto;
