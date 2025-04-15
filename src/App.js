import React, {lazy, Suspense} from "react";
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from "./Components/Body";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Error from './Components/Error'
import RestaurantMenu from "./Components/RestaurantMenu";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";
// import Groceries from "./Components/Groceries";

const Groceries = lazy(()=> import('./Components/Groceries'));

const App = () => {
    return (
    <Provider store={appStore}> {/* we are providing our store to the app  */}
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </Provider>)
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
                element: <ContactUs/>
            },
            {
                path:'/restaurant/:resId',
                element: <RestaurantMenu/>
            },
            {
                path: '/groceries',
                element: <Suspense fallback={<h1>Loading........... Groceries</h1>}><Groceries/></Suspense>
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);