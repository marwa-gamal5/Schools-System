import Navbarr from "../Navbar/Navbarr.jsx";
import SideBar from '../SideBar/SideBar.jsx';
import Footer from "../Footer/Footer.jsx";
import {Outlet} from "react-router-dom";


function Root() {
    return (
        <>
            <header>
                <Navbarr />
            </header>
            <SideBar />
            <Footer />

            <Outlet />



        </>
    );
}

export default Root;