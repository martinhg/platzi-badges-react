import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.scss'

import Logo from '../../assets/img/logo.svg'

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="container-fluid">
                    <Link className="navbar__brand" to="/">
                        <img className="navbar__brand-logo" src={ Logo } alt="Logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;
