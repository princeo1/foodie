// This is a goodx.html
import React from "react";
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from "./Components/Body";
import About from "./Components/About";
import Offers from "./Components/Offers";
import Error from './Components/Error'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router";

const App = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement: <Error/>
    },
    {
        path:'/about',
        element: <About/>
    },
    {
        path:'/offers',
        element: <Offers/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);