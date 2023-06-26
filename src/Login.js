import React from "react";
import './Login.css';
import { loginURL } from "./spotify";
function Login(){
    return(
        <div  className="login">
        <h1> I am the login page</h1>

        <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg" alt=""/>
 
 {/* Spotify login URL */}
        <a href={loginURL}>Login With Spotify</a>
        </div>
    )
}

export default Login;