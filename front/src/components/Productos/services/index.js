import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getProductos(){
    try {
    const response = await axios({
        url: `${baseUrl}/productos`,
        method: 'GET',
    })
    return response;
    } catch (error) {
        console.log("error al buscar productos", error);
    }
}

