import axios from "axios";

const $host = axios.create({
    baseURL: "https://pharmacy-nntu.herokuapp.com/"
})

const $authHost = axios.create({
    baseURL: "https://pharmacy-nntu.herokuapp.com/"
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}