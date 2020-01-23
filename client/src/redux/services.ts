import axios from "axios";
import mainAxios from "../component/axios/axios"

export const registerService = async (user: any) => {
    try {
        const { data } = await axios.post("http://localhost:4000/users/register", user);
        return data;
    } catch (ex) {
        return console.log(ex)
    }
}

export const loginService = async (user: any) => {
    try {
        const { data } = await axios.post("http://localhost:4000/users/login", user);
        console.log(data)
        const { jwtWithoutPassword } = data
        localStorage.setItem("token", jwtWithoutPassword)
        return data;
    } catch (ex) {
        return console.log(ex)
    }
}

export const getVacationsService = async () => {
    try {
        const { data } = await mainAxios.get(`vacations`);
        
        return data;
    } catch (ex) {
        return console.log(ex)
    }
}

export const verifyTokenService = async () => {
    try {
        const { data } = await mainAxios.get('verify');
        return data
    }
    catch (ex) {
        console.log(ex)
    }
}
export const followService = async () => {
    try {
        const { data } = await mainAxios.get(`follow`);
        return data
    }
    catch (ex) {
        console.log(ex)
    }
}