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
export const addVacationService = async (vacationObj: any) => {
    try {
        const { data } = await mainAxios.post('vacations/add', vacationObj);
        return data
    }
    catch (ex) {
        console.log(ex)
    }
}
export const editVacationService = async (vacationObj: any) => {
    try {
        const { data } = await mainAxios.post('vacations/edit', vacationObj);
        return data
    }
    catch (ex) {
        console.log(ex)
    }
}
export const removeVacationService = async (vacationId: any) => {
    try {
        const { data } = await mainAxios.post('vacations/remove', { vacationId });
        return data
    }
    catch (ex) {
        console.log(ex)
    }
}
export const followService = async (vacation_id: any, isFollowed: any) => {

    try {
        const { data } = await mainAxios.post('follow', { isFollowed, vacation_id });
        return data
    }
    catch (ex) {
        console.log(ex)
    }
}
export const getVacationsFollowService = async () => {

    try {
        const { data } = await mainAxios.get('vacations/followers');
        return data
    }
    catch (ex) {
        console.log(ex)
    }
}