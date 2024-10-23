import { createBrowserRouter } from "react-router-dom";
import Home from "../page/user/Home/Home";
import Rooot from "../Rooot";
import Login from "../page/user/Login/Login";
import Regester from "../page/user/Regester/Regester";
import Prodactrouter from "./Prodactrouter";
import { PublicRoute } from "./Prodactrouter";
import ProdactPyCatigory from "../page/user/ProdactsPyCatigores/ProdactPyCatigory";
import ShowProdact from "../page/user/ShowProdact/ShowProdact";
import Card from "../page/user/Card/Card"
import Order from "../page/user/Order/Order";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Rooot />,
    children: [
      {
        path: "",
        element: (
          <Prodactrouter>
            <Home />
          </Prodactrouter>
        ),
      },
      {
        path: "/home",
        element: (
          <Prodactrouter>
            <Home />
          </Prodactrouter>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/regester",
        element: (
          <PublicRoute>
            <Regester />
          </PublicRoute>
        ),
      },
      {
        path :"/cartigory/:catigoryId",
        element:(
          <ProdactPyCatigory />
        ) ,
      },{
        path : 'prodactDeatals/:prodactid',
        element:(
          <Prodactrouter>
          <ShowProdact />
          </Prodactrouter>
        ),
      },
      {
        path : "/card",
        element :(
          <Card/>
        )
      },{
        path : "/order",
        element : (
          <Prodactrouter>
            <Order/>
          </Prodactrouter>
        )
      }
    ],
  },
]);
export default route;
