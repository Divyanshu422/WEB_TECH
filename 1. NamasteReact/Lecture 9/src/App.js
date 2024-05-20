import React, {lazy} from "react";
import ReactDOM from'react-dom/client';   
import Header from './components/Header'
import Body from './components/Body'
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact  from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Parent from './dELETE/Parent'


// Lazy loading

const Grocery = lazy(()=> import ('./components/Grocery'))

const AppLayout = () => {
    return (
        <div className="App">
            <Header/>
            {/* based on the path => we will change the body component */}
           <Outlet/>
        </div>
    )
}

            const appRouter = createBrowserRouter([
                {
                    path:'/',
                    element:<AppLayout/>,
                    children: [
                        {
                            path:'/',
                            element: <Body/>
                        },
                        {
                            path:'/about',
                            element:<About/>, 
                        },
                        {
                            path:'/contact',
                            element:<Contact/>,
                        },
                        {
                            path:'/restaurant/:resId',
                            element: <RestaurantMenu/>,
                    
                        },   
                        {
                            path: '/grocery',
                            element: <Grocery/>
                        }   
                    ],
                    errorElement: <Error/>,
                }
               
            ])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);
// root.render(<Parent/>)



