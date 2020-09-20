import React from "react";
import Navbar from '../Navbar/Navbar';

function Layout( { children } ) {
    return (
        <React.Fragment>
            <Navbar />
            { children }
        </React.Fragment>
    );
}

export default Layout;
