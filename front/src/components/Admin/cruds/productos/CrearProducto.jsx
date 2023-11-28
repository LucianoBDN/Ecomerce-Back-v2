import React, { useState, useRef } from 'react';
import { saveProductos } from '../../services';
import Footer from '../../../Footer';
import Navbar from '../../../Navbar';

function CrearProductos() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [marca, setMarca] = useState('');
    const [precio, setPrecio] = useState('');
    const inputFileRef = useRef();
    const [loading, setLoading] = useState(false);
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log('Datos enviados al servidor:', {
                nombre,
                descripcion,
                marca,
                precio,
                imagen: inputFileRef.current.files[0],
            })} catch (error){
                console.log(error)
            };

            setLoading(true);

            const handleSubmit = (productosData) => {
                saveProductos(productosData = {
                    nombre: nombre,
                    descripcion: descripcion,
                    marca: marca,
                    precio: precio,
                    imagen: inputFileRef.current.files[0],
                })
                    

}

                //     console.log('Producto guardado con éxito');
                // } catch (error) {
                //     console.error('Error al guardar productos:', error);
                // } finally {
                //     setLoading(false);
                // }
            

            return (
                <>

                    <div>
                        <h5>Crear un producto</h5>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="nombre">Nombre del producto</label>
                                <input type="text" id="nombre" placeholder="Nombre del producto" value={nombre} onChange={(event) => { setNombre(event.target.value) }} />
                            </div>
                            <div>
                                <label htmlFor="descripcion">Descripción</label>
                                <input type="text" id="descripcion" placeholder="Descripción" value={descripcion} onChange={(event) => { setDescripcion(event.target.value) }} />
                            </div>
                            <div>
                                <label htmlFor="marca">Marca</label>
                                <input type="text" id="marca" placeholder="Marca" value={marca} onChange={(event) => { setMarca(event.target.value) }} />
                            </div>
                            <div>
                                <label htmlFor="precio">Precio</label>
                                <input type="text" id="precio" placeholder="Precio" value={precio} onChange={(event) => { setPrecio(event.target.value) }} />
                            </div>
                            <div>
                                <label htmlFor="imagen">Seleccionar imagen</label>
                                <input type="file" id="imagen" ref={inputFileRef} />
                            </div>
                            <div>
                                <button type="submit" disabled={loading}>
                                    {loading ? 'Guardando...' : 'Agregar producto'}
                                </button>
                            </div>
                        </form>
                    </div>

                </>
            );
        }
    }
export default CrearProductos;
