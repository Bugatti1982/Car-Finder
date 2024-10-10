// src/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Features
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Feature 1</a>
                                <a className="dropdown-item" href="#">Feature 2</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Feature 3</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand ml-auto" href="#">Car Finder</a>
            </nav>
        </header>
    );
};

export default Header;
