
import axiosApiClient from "./axios-apiClient";



export async function getAll() {
    try {
        const req = await axiosApiClient.get("/all")
        const data = await req.data
        
        return data
    }catch(err) {
        console.log(err);
        
    }
}