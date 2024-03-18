import React from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
    return (
        <React.StrictMode>
            <Header />
            {children}
            <Footer />
        </React.StrictMode>
    );
};

export default Layout
