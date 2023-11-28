import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getProductos() {
    try {
        const response = await axios({
            url: `${baseUrl}/productos`,
            method: 'GET',
        })
        return response;
    }
    catch (error) {
        console.log("error al buscar productos", error);
    }
}

export async function saveProductos(productosData){
    const formData = new FormData();
    formData.append('marca', productosData.marca)
    formData.append('marca', productosData.imagen)
    formData.append('marca', productosData.nombre)
    formData.append('marca', productosData.precio)
    formData.append('marca', productosData.descripcion)
    try{
        const response = await axios({
            url: `${baseUrl}/productos`,
            data: formData,
            mathod: "POST"
        })
        return response
    }
    catch (error) {
        console.log("Error al guardar los datos del producto", error)
    }
}


export async function updateProductos(_id, datosNuevos) {
    try {
        const response = await axios({
            url: `${baseUrl}/productos/${_id}`,
            method: 'PUT',
            data: datosNuevos
        })
        return response;
    }
    catch (error) {
        console.log("error al buscar productos", error);
    }
}

export async function deleteProductos(_id) {
    try {
        const response = await axios({
            url: `${baseUrl}/productos/${_id}`,
            method: 'DELETE',
            
        })
        return response;
    }
    catch (error) {
        console.log("error al buscar productos", error);
    }
}