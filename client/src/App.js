// src/App.js
import React from 'react';
import Header from './Header';
import Search from './Search';
import CarListings from './CarListings';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Make sure you have this file for custom styles

const App = () => {
    return (
        <div>
            <Header />
            <div className="container mt-5 pt-5 flex-grow-1">
                <div className="row justify-content-center">
                    <Search />
                    <CarListings />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
