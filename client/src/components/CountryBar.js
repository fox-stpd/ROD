import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";

const CountryBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <Row className="d-flex">
            {product._countries.map( country =>
                <Card
                    key={country.id}
                    className="p-4 justify-content-center"
                    style={{width: 150, height: 40, cursor: 'pointer'}}
                    onClick={()=> product.setSelectedCountry(country)}
                    border={country.id === product._selectedCountry.id ? 'dark' : 'light'}
                >
                    {country.name}
                </Card>

            )}

        </Row>
    );
});

export default CountryBar;