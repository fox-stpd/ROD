import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import TypeBar from "../components/TypeBar";
import CountryBar from "../components/CountryBar";
import ProductList from "../components/ProductList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCountry, fetchProduct, fetchTypes} from "../http/productAPI";
import Pages from "../components/Pages";

const Pharmacy = observer(() => {
    const {product} = useContext(Context)

    useEffect(()=> {
        fetchTypes().then(data => product.setTypes(data))
        fetchCountry().then(data => product.setCountries(data))
        fetchProduct(null, null, 1, 8).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)})// eslint-disable-next-line
    },[])

    useEffect(()=> {
        fetchProduct(product.SelectedType.id, product.SelectedCountry.id, product.page, 8).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)})// eslint-disable-next-line
    } , [product.page, product.SelectedType, product.SelectedCountry])
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col>

                <Col md={9}>
                    <CountryBar/>
                    <ProductList/>
                    <Pages/>
                </Col>
            </Row>

        </Container>
    );
});

export default Pharmacy;
