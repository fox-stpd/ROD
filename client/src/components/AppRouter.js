import React, {useContext} from 'react';
import { Switch, Route} from "react-router-dom";
import {authRouts, publicRouts} from "../routs";
import Pharmacy from "../pages/Pharmacy";
import {Context} from "../index";


const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Switch>
            { user.isAuth===true &&
                authRouts.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )
            }
            {
                publicRouts.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )
            }
            <Route path="*" component={Pharmacy}/>
        </Switch>
    );
};

export default AppRouter;