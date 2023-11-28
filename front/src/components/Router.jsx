import React from 'react'
import Home from './Home'
import Productos from '../components/Productos/Productos'
import Admin from '../components/Admin/Admin'
import Contacto from './Contacto'
import { Route, Routes, Navigate } from 'react-router-dom'


const Paginas = () => {
    return (
        <>


            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Productos" element={<Productos/>} />
                <Route path="/Admin" element={<Admin/>} />
                <Route path="/Contacto" element={<Contacto/>} />
                <Route path='*' element={<Navigate to="/"/>}/>
            </Routes>


        </>
    )
}
export default Paginas