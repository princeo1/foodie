// This is a goodx.html
import React from "react";
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from "./Components/Body";
import About from "./Components/About";
import Offers from "./Components/Offers";
import Error from './Components/Error'
import RestaurantMenu from "./Components/RestaurantMenu";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";

const App = () => {
    return <div className="app">
        <Header/>
        <Outlet/>
    </div>
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/offers',
                element: <Offers/>
            },
            {
                path:'/restaurant/:resId',
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);