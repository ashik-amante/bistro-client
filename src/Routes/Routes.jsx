import {
  createBrowserRouter,
 
} from "react-router-dom";
import Main from "../LayOuts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import DashBoard from "../LayOuts/DashBoard";
import CArt from "../Pages/DashBoard/Cart/CArt";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashBoard/Cart/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddIyems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: '/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      // normal user route
      {
        path: 'cart',
        element: <CArt></CArt>
      },
      // admin route
      {
        path:'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      }
    ]
  }
]);