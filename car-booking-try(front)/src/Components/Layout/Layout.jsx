import {Outlet} from "react-router-dom";
import Header from "../../Containers/Header.jsx";
import Navbar from "../../Containers/Navbar.jsx";

const Layout = () => {
    return (
        <div className="container">
            <Navbar />
            <main className="main-content">
                <Header />
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;