import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = []
        this._countries = []
        this._products =[]
        this._selectedType = {}
        this._selectedCountry = {}
        this._selectedProduct ={}
        this._selectedBasket = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        makeAutoObservable(this)
    }

    setTypes(Types){
        this._types= Types
    }

    setCountries(Countries){
        this._countries= Countries
    }

    setProducts(Products){
        this._products= Products
    }

    setSelectedType(type)
    {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedCountry(country)
    {
        this.setPage(1)
        this._selectedCountry = country
    }

    setSelectedProduct(product)
    {
        this._selectedProduct = product
    }

    setPage(page)
    {
        this._page = page
    }

    setTotalCount(count)
    {
        this._totalCount = count
    }

    setBasket(basket)
    {
        this._selectedBasket = basket
    }

    get Types() {
        return this._types
    }

    get Countries() {
        return this._countries
    }

    get Products() {
        return this._products
    }

    get SelectedType() {
        return this._selectedType
    }


    get SelectedCountry() {
        return this._selectedCountry
    }

    get SelectedProduct() {
        return this._selectedProduct
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get basket (){
        return this._selectedBasket
    }
}