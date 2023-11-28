import React, { useState } from 'react';
import AdmProductos from './AdmProductos';

function Admin() {
    const [key, setKey] = useState('productos');

    return (
        <div>
            <div>
                {key === 'productos' && <AdmProductos />}
            </div>
            <div>
                <button onClick={() => setKey('productos')}>
                    Productos
                </button>
            </div>
        </div>
    );
}

export default Admin;
