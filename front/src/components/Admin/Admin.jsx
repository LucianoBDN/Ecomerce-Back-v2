import React, { useState } from 'react';
import AdmProductos from './AdmProductos';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Admin.css'

function Admin() {
    const [key, setKey] = useState('productos');

    return (
        <div>
            <Navbar/>
            <h1 className='title-admin'>Panel de Administracion</h1>
            <div>
                {key === 'productos' && <AdmProductos />}
            </div>
            <div>
                <button onClick={() => setKey('productos')}>
                    Productos
                </button>
            </div>
            <Footer/>
        </div>
    );
}

export default Admin;
