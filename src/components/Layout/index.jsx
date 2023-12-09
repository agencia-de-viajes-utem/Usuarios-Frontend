import Header from "../Header";
import HeaderAuth from "../Header/HeaderAuth";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import Footer from "../Footer";
import "./Layout.css";
function Layout({ children }) {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <>
            {isAuthenticated ? <HeaderAuth /> : <Header />}
            <main className="main">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
