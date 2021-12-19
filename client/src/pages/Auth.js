import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, PHARMACY_ROUTE, REGISTRATION_ROUTE} from "../utils/const";
import Row from "react-bootstrap/Row"
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer (
() => {

    const {user} = useContext(Context)
    const location = useLocation()
    const histori = useHistory()
    const islogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {

        try {
            let data;

            if (islogin) {
                const data = await login(email,password)
            } else {
                const data = await registration(email,password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            histori.push(PHARMACY_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }



    }

    return (

        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight-54}}

        >

           <Card style={{width: 600}} className="p-5">
               <h2 className="m-auto" >{islogin? 'Авторизация' : 'Регистрация'}</h2>
               <Form className="d-flex flex-column">
                   <div> E-mail </div>
                   <Form.Control
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                       className="my-2"
                       placeholder="Введите E-mail"
                       />
                   <div> Пароль </div>
                   <Form.Control
                       value={password}
                       onChange={ e=> setPassword(e.target.value)}
                       className="my-2"
                       type={"password"}
                       placeholder="Введите пароль"
                   />
                   <Row className="d-flex justify-content-around">
                       { islogin ?
                           <div > Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                           </div>
                           :
                           <div> Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                           </div>
                       }

                           {islogin?
                               <Button variant={"outline-dark"} style={{width: 100, height: 40}} className="my-2" onClick={click}> Войти </Button>
                               :
                               <Button variant={"outline-dark"} style={{width: 200, height: 40}} className="my-2"  onClick={click} > Зарегистрироваться</Button>
                           }

                   </Row>

               </Form>
           </Card>

        </Container>
    );
});

export default Auth;