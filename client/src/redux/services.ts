import axios from "axios";
import mainAxios from "../component/axios/axios"
const baseURL = "http://localhost:4000"


export const registerService = async (user: object) => {
    try {
        const { data } = await axios.post(`${baseURL}/users/register`, user);
        return data;
    } catch (err) {
        return { message: "user already exists" }
    }
}

export const loginService = async (user: object) => {
    try {
        const { data } = await axios.post(`${baseURL}/users/login`, user);
        const { jwtWithoutPassword } = data
        localStorage.setItem("token", jwtWithoutPassword)
        return data;
    } catch (err) {
        return { message: "email or password are incorrect" }
    }
}

export const getVacationsService = async () => {
    try {
        const { data } = await mainAxios.get(`vacations`);

        return data;
    } catch (err) {
        return console.log(err)
    }
}

export const verifyTokenService = async () => {
    try {
        const { data } = await mainAxios.get('verify');
        return data
    }
    catch (err) {
        localStorage.setItem("token", "")
        return ({ role: "" })
    }
}
export const addVacationService = async (vacationObj: object) => {
    try {
        const { data } = await mainAxios.post('vacations/add', vacationObj);
        return data
    }
    catch (err) {
        console.log(err)
    }
}
export const editVacationService = async (vacationObj: object) => {
    try {
        const { data } = await mainAxios.put('vacations/edit', vacationObj);
        return data
    }
    catch (err) {
        console.log(err)
    }
}
export const removeVacationService = async (vacationId: number) => {
    try {
        const { data } = await mainAxios.delete('vacations/remove', { data: { vacationId } });
        return data
    }
    catch (err) {
        console.log(err)
    }
}
export const followService = async (vacation_id: number, isFollowed: boolean) => {

    try {
        const { data } = await mainAxios.post('follow', { vacation_id, isFollowed, });
        return data
    }
    catch (err) {
        console.log(err)
    }
}
export const getVacationsFollowService = async () => {

    try {
        const { data } = await mainAxios.get('vacations/followers');
        return data
    }
    catch (err) {
        console.log(err)
    }
}