//OLD
import React from "react";
import { useState } from "react";
import "./StyleLogin.css"
import LoginDetails from "./LoginDetails.json"

function Login({ updateState }) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        console.log ("Checking")
        if (LoginDetails.email === email && LoginDetails.password === password) {
            updateState(true)
        console.log ("Set To True")

        }

    }

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }



    return (
        <div class="form-sec">
            <form onSubmit={handleSubmit} className="login-form">
                <h3>Login</h3>

                <div class="email">
                    <label htmlFor='email'>Email </label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={email}></input>
                </div>

                <div class="password">
                    <label htmlFor='password'>Password </label>
                    <input type="password" name="password" id="password" onChange={handleChange} value={password}></input>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>


    )

}


export default Login;
