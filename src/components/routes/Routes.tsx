import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Product from "../../pages/product/Product";
import Store from "../../pages/store/Store";
import Cart from "../cart/Cart";



export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/store",
    element: <Store />
  },
  {
    path:"/product/:id",
    element:<Product/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
]