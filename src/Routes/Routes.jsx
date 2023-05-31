import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Home/Menu/Menu";
import Order from "../pages/Home/Order/Order";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Privaterouter from "./Privaterouter";
import MyCart from "../pages/Dashbroad/MyCart/MyCart";
import Dashbroad from "../Layout/Dashbroad";
import AllUsers from "../pages/Dashbroad/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/order/:category",
        element: <Order></Order>
      }, {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/singup",
        element: <Registration></Registration>
      }
    ]
  },
  {
    path: "dashbroad",
    element: <Privaterouter><Dashbroad></Dashbroad></Privaterouter>,
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "allusers",
        element: <AllUsers/>
      }
    ]
      
    
  }
]);