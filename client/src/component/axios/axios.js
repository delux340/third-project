const axios = require("axios")
const url = "http://www.localhost:4000"

const mainAxios = axios.create({
    baseURL: `${url}/`
})

mainAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")

    if (token) {
        config.headers["token"] = token
    }
    return config
})

export default mainAxios