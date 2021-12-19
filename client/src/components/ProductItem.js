import React from 'react';
import Col from "react-bootstrap/Col";
import {Card, Image} from "react-bootstrap";
import {PRODUCT_ROUTE} from "../utils/const";
import {useHistory} from "react-router-dom";


const ProductItem = ({product}) => {
    const history = useHistory()
    return (
        <Col md ={3} className={"mt-3"} onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}>
            <Card style={{width:150, cursor:'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.img}/>
                <div>
                    {product.name}
                </div>
            </Card>
        </Col>
    );
};

export default ProductItem;