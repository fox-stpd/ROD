import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createCountry, createType} from "../../http/productAPI";

const CountryModals = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const addCountry = () => {
        createCountry({name : value}).then(data=> setValue(''))
        onHide()
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                >
                    Добавить новую страну
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e=> setValue(e.target.value)}
                        placeholder={"Введите страну..."}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="outline-danger"
                    onClick={onHide}
                >
                    Отмена
                </Button>
                <Button
                    variant="outline-success"
                    onClick={addCountry}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CountryModals;