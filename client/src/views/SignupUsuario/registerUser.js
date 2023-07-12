import axios from "axios";

export default async function registerUser (data){
    const URL = 'http://localhost:3001'

    axios.post(`${URL}/user`,data)
        .then((response)=>{
            localStorage.setItem("idUser",response.data.id);
            window.location.href = '/students'
        })
        .catch((error)=>{
            const objetojson = error.request.response;
            const objeto = JSON.parse(objetojson);
            window.alert(objeto.error);
        })

}