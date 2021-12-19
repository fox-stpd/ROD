import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import Col from "react-bootstrap/Col"; // eslint-disable-next-line
import {createProduct, fetchCountry, fetchProduct, fetchTypes} from "../../http/productAPI";
import {observer} from "mobx-react-lite"; // eslint-disable-next-line
import data from "bootstrap/js/src/dom/data";

const ProducktModals = observer( ({show, onHide}) => {

    const {product} = useContext(Context)
    const [name , setName] = useState('')
    const [price , setPrice] = useState('')
    const [file , setFile] = useState(null)// eslint-disable-next-line
    const [type , setType] = useState(null)// eslint-disable-next-line
    const [country , setCountry] = useState(null)
    const [info , setInfo] = useState([])

    useEffect(()=> {
        fetchTypes().then(data => product.setTypes(data))
        fetchCountry().then(data => product.setCountries(data))// eslint-disable-next-line
    }, [])

    const addInfo = () => {
      setInfo([...info, {title:'', description:'', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i=> i.number !== number))
    }

    const changeInfo =(key, value, number) => {
        setInfo(info.map (i=> i.number === number ? {...i, [key]:value } :i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('typeId', product.SelectedType.id)
        formData.append('countryId', product.SelectedCountry.id)
        formData.append('img', file)
        formData.append('info', JSON.stringify(info))
        createProduct(formData).then(data => onHide())
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
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3" >
                        <Dropdown.Toggle> {product._selectedType.name||"Выберите категорию"} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product._types.map(type =>
                                <Dropdown.Item
                                    onClick={() => product.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3" >
                        <Dropdown.Toggle> {product._selectedCountry.name ||"Страну производителя"} </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product._countries.map(country =>
                                <Dropdown.Item
                                    onClick={() => product.setSelectedCountry(country)}
                                    key={country.id}
                                >
                                    {country.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        value={name}
                        onChange={e=> setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите наименование товара"
                    />

                    <Form.Control
                        value={price}
                        onChange={e=> setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость товара"
                        type="number"
                    />

                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                        className="m-3"
                    >
                        Добавить новую характеристику
                    </Button>
                        {
                            info.map(i=>
                                <Row
                                    className="mt-3"
                                    key={i.number}
                                >
                                    <Col
                                        md={4}
                                    >
                                        <Form.Control
                                            value={i.title}
                                            onChange={(e)=> changeInfo('title', e.target.value,i.number)}
                                            placeholder={"Название"}
                                        />
                                    </Col>
                                    <Col
                                        md={4}
                                    >
                                        <Form.Control
                                            value={i.description}
                                            onChange={(e)=> changeInfo('description', e.target.value,i.number)}
                                            placeholder={"Описание"}
                                        />
                                    </Col>
                                    <Col
                                        md={4}
                                    >
                                        <Button
                                            variant={"outline-danger"}
                                            onClick={()=> removeInfo(i.number)}
                                        >
                                            Удалить
                                        </Button>
                                    </Col>
                                </Row>
                            )
                        }

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
                    onClick={addProduct}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ProducktModals;
