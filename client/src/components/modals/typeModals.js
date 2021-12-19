import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createType} from "../../http/productAPI";
import data from "bootstrap/js/src/dom/data";

const TypeModals = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({name : value}).then(data=> setValue(''))
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
                    Добавить новую категорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e=> setValue(e.target.value)}
                        placeholder={"Введите название категории..."}
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
                    onClick={addType}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TypeModals;