import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import React from "react";
import Routes from "./Routes";
import Nav from "./nav";
import { MovieProvider } from './MovieContext';

const Footer = () => {
    return (<footer>
        <h5>copyright &copy; 2020 by Sanbercode</h5>
    </footer>
    );
}


const Movie = () => {

    return (
        <MovieProvider>
            <Router>
            <Nav />
                <div className="container">                
                <Routes />
                </div>
            <Footer />
            </Router>
        </MovieProvider>
    );
};
export default Movie;
