import React, { useContext, useState } from "react";
import {MovieContext} from '../MovieContext';


const Login = () => {

    const [,setLoginState] = useContext(MovieContext)
    const [inputName, setInputName] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case "inputName":
                setInputName(value);
                break;
            case "inputPassword":
                setInputPassword(value);
                break;
        }
    };
    const submitLogin = e => {
        if (inputName === "admin" && inputPassword === "admin") {
            console.log("login")
            setLoginState(true);
            localStorage.setItem('login',true);
        }   
        else {
            console.log("no logn");
        }
    }
    return (
        <div className="login">
            <div>
                <label htmlFor="inputName" style={{marginRight:"1rem"}}><strong>Username</strong></label>
                <input type="text" onChange={handleChange} name="inputName" />
            </div>
            <div>
                <label htmlFor="inputPassword" style={{marginRight:"1rem"}}><strong>Password</strong></label>
                <input type="password" name="inputPassword" onChange={handleChange} />
            </div>
            <button onClick={submitLogin} >Login</button>
        </div >
    );
};

export default Login;
