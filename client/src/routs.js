import Admin from "./pages/Admin";
import {ADMIN_ROUTE, LOGIN_ROUTE, PHARMACY_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE} from "./utils/const";
import Pharmacy from "./pages/Pharmacy";
import Auth from "./pages/Auth";
import Product from "./pages/Product";

export const authRouts = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }

]


export const publicRouts = [
    {
        path: PHARMACY_ROUTE,
        Component: Pharmacy
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE+'/:id',
        Component: Product
    }
]