import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from'react-dom/client';   
import Header from './components/Header'
import Body from './components/Body'
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact  from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import Parent from './dELETE/Parent'

// Lazy loading

const Grocery = lazy(()=> import ('./components/Grocery'))


import { UserContext } from "./utils/ContextAPI/UserContext";

const AppLayout = () => {

    const [userName, setUserName] = useState('');
    useEffect(() => {
        //Making the API call and setting the data 
        const data = {
            name: 'Divyanshu'
        }
        // Setting the data:
        setUserName(data.name);
    },[])

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName }}>
            <div className="App">
                <Header/>
                    {/* based on the path => we will change the body component */}
                <Outlet/>
            </div>
        </UserContext.Provider>
        
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
                            element: <Suspense fallback={<h1>Loading Screen</h1>}><Grocery/></Suspense> 
                        }   
                    ],
                    errorElement: <Error/>,
                }
               
            ])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);
// root.render(<Parent/>)



