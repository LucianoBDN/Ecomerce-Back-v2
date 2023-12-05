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
    formData.append("nombre", productosData.nombre )
    formData.append("imagen", productosData.imagen )
    formData.append("descripcion", productosData.descripcion )
    formData.append("precio", productosData.precio )
    formData.append("marca", productosData.marca )
    
    try{
        const response = await axios({
            url: `${baseUrl}/productos`,
            method: "POST",
            data: formData
        })
        return response
    }
    catch(e){
        console.log(e);
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