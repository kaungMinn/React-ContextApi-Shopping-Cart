import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/shop',
                element: <Shop/>
            },

            {
                path: '/cart',
                element: <Cart/>
            },

            {
                path: '/',
                element: <Navigate to='/shop'/>
            }
        ]
    },

    {
        path: '*',
        element: <NotFound/>
    }
])
