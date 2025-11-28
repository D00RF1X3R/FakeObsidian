import axios from "axios";
import { getStoredToken, setStoredToken, getStoredRefreshToken, setStoredRefreshToken } from "./authTokens";

axios.defaults.baseURL = import.meta.env.VITE_DOTENV_API_URL
const instance = axios.create({
    baseURL: import.meta.env.VITE_DOTNET_API_URL,
    timeout: 1000,
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': getStoredToken() ? `Bearer ${getStoredToken()}` : undefined
    }
});

instance.interceptors.response.use(undefined, async (error) => {
    if (error.response?.status == 401) {
        if (getStoredToken() != undefined && getStoredRefreshToken() != undefined) {
            await refreshToken();
        }
        else {
            throw error
        }
        return instance(error.config)
    }
    else if (error.response?.status == 400){
        console.log("VSE")
    }
    throw error
});

const refreshToken = async () => {
    try {
        let result = await instance.post("/Auth/refresh", {refreshToken: getStoredRefreshToken()})
        console.log(result)
        if (result) {
            setStoredToken(result.data.response.token)
            setStoredRefreshToken(result.data.response.refreshToken)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getUsersAll = async () => {
    try {
        let result = await instance.get("/User/getAll")
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}