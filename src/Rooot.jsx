import { Outlet } from 'react-router-dom'
import Navbar from './componants/user/Navbar/Navbar'
import Footer from './componants/user/footer/Footer'
import Contextprovider from './Context/Contxt'

export default function Rooot() {

  return (
    <>
      <Contextprovider>
        <Navbar />
        <Outlet />
        <Footer />
      </Contextprovider>
    </>
  )
}
