import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';

import PlatziConfLogoImage from '../../assets/img/platziconf-logo.svg';
import AstronautsImage from '../../assets/img/astronauts.svg';

class HomePage extends React.Component {
  render () {
    return (
        
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="home__col col-12 col-md-4">
                        <img
                            src= { PlatziConfLogoImage }
                            alt="Platzi Conf Logo"
                            className="img-fluid mb-2"
                        />

                        <h1>Badge Management System</h1>
                        <Link className="btn btn-primary" to="/badges">
                            Start
                        </Link>
                    </div>

                    <div className="home__col d-none d-md-block col-md-8">
                        <img
                            src= { AstronautsImage }
                            alt="Astronauts"
                            className="img-fluid p-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default HomePage;
