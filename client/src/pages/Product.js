import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {useParams} from 'react-router-dom'
import {fetchOneProduct} from "../http/productAPI";
import basket from "./Basket";

const Product = () => {
    const [product, setProduct] = useState({info: []})
    const {id} = useParams()
    useEffect(()=> {
        fetchOneProduct(id).then(data => setProduct(data))
        }, []
    )

    const addBasket = () => {
        const formData = new FormData()
        formData.append('basketId', product.basket )
        formData.append('productId', product.SelectedProduct)
    }

    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={8}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + product.img}/>
                    <Row>
                        <h2>{product.name}</h2>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height:300, fontSize: 32, border: "5px solid black"}}
                    >
                        <h3> От: {product.price} руб. </h3>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3" >
                {product.info.map((info, index )=>
                    <Row key={info.id}  style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                        {info.title} : {info.description}
                    </Row>
                )}

            </Row>

        </Container>
    );
};

export default Product;