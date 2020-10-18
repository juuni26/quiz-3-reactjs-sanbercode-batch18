import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContext";
import logo from './logo.png';


const Nav = () => {

    const [login, setLoginState] = useContext(MovieContext);
    const logOut = () => {
        localStorage.removeItem('login');
        setLoginState("");
    }

    return (
        <nav className="navbar">
            <a className="logo" href="/">
                <img id="logo" src={logo} width="200px" />
            </a>
            <ul >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {login != "" ? <li>
                    <Link to="/movie_list_editor">Movie List Editor</Link>
                </li> : ""}
                {login != "" ? <li>
                    <span onClick={logOut} className="button">Logout</span>
                </li> :
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                }

            </ul>
        </nav>
    );
};

export default Nav;
