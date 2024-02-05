import axios from "axios";

const API_URL = "http://localhost:8080/api/vehiculos/page"
const API_URL_REGISTER = "http://localhost:8080/api/vehiculos"

const getVehicles = async(size) =>{
    try{
        const response = await axios.post(API_URL, {size: size})
        return response.data
    }catch(err){
        console.log(err)
    }
}

const registerVehicle = async(vehicle) =>{
    try{
        const response = await axios.post(API_URL_REGISTER, vehicle)
        return response.data
    }catch(err){
        console.log(err)
    }
}

export default {
    getVehicles,
    registerVehicle
}