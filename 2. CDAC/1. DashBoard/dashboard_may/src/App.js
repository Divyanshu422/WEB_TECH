import Home from "./pages/Home";
import { createBrowserRouter,   RouterProvider, Outlet } from "react-router-dom";
import User from "./pages/User";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {

  //  Creating the detailed layout: which includes the header, sideBar (Developer is mentioning the sideBar as Menu) and footer

  const Layout = () =>{
    return (
      <div className="">
        <Navbar/>
        <div>
          <div>
            <Menu/>
          </div>
          <div>
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }





  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "/users",
          element: <User/>
        },
        {
          path: "/products",
          element: <Product/>
        }
      ] 
    },
    {
      path: '/login',
      element:<Login/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
