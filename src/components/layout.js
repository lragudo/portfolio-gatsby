import React from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import './layout.css'

// Layout
const Layout = ( {children} ) => {
    return (

        <main>
            <Nav />
            {children}
            <Footer />
        </main>

    )
}

export default Layout;