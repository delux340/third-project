const axios = require("axios")
const url = "https://react-third-project.herokuapp.com"

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