import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

function Layout() {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
            
        </div>
    )
}

export default Layout
