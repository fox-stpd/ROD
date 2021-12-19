import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
import product from "../pages/Product";
import basket from "../pages/Basket";

export const createType = async (type) => {
    const {data} =await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} =await $host.get('api/type', )
    return data
}

export const createCountry = async (country) => {
    const {data} =await $authHost.post('api/country', country)
    return data
}

export const fetchCountry = async () => {
    const {data} =await $host.get('api/country')
    return data
}

export const createProduct = async (product) => {
    const {data} =await $authHost.post('api/product', product)
    return data
}

export const fetchProduct = async (typeId, countryId, page, limit =9) => {
    const {data} =await $host.get('api/product',  {params: {
            typeId, countryId, page, limit
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} =await $host.get('api/product/'+ id)
    return data
}

export const  addBasket = async (basket) => {
    const {data} =await $authHost.post('api/basket', basket)
    return data
}