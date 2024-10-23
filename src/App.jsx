import { RouterProvider } from 'react-router-dom'
import route from "./roots/route"
import 'swiper/css';
import 'swiper/css/pagination';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import'./Puplec.css'

export default function App() {
  return (
   
   
   <RouterProvider router={route}/>

   
  
  )
}
