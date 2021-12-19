import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import TypeModals from "../components/modals/typeModals";
import CountryModals from "../components/modals/countryModals";
import ProducktModals from "../components/modals/producktModals";


const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [countryVisible, setCountryVisible] = useState(false)
    const [producktVisible, setProducktVisible] = useState(false)
    return (

        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-3" onClick={()=> setTypeVisible(true)}>Добавить категорию</Button>
            <Button variant={"outline-dark"} className="mt-3" onClick={()=> setCountryVisible(true)}>Добавить страну производителя</Button>
            <Button variant={"outline-dark"} className="mt-3" onClick={()=> setProducktVisible(true)}>Добавить товар</Button>
            <TypeModals show={typeVisible} onHide={()=> setTypeVisible(false)}/>
            <CountryModals show={countryVisible} onHide={()=> setCountryVisible(false)}/>
            <ProducktModals show={producktVisible} onHide={()=> setProducktVisible(false)}/>
        </Container>
    );
};

export default Admin;