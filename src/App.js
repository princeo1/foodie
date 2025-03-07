// This is a goodx.html
import React from "react";
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from "./Components/Body";
import About from "./Components/About";
import Offers from "./Components/Offers";
import Error from './Components/Error'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

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
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);