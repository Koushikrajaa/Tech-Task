import React from "react"
import {Navigate, useLocation} from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom"
import './Home.css'


function Home (){
    const location=useLocation()
    return (
        <div class="home-page">
        
        <h1 class="pro1">My Profile</h1>
        <div class="pro-div">
        <pre>Name   : <span contentEditable="true">Koushik</span></pre>
        <pre>Age       : <span contentEditable="true">21</span></pre>
        <pre>DOB      : <span contentEditable="true">18/05/2002</span></pre>
        <pre>Gender : <span contentEditable="true">Male</span>Male</pre>
        <pre>Mobile : <span contentEditable="true">1234567899</span></pre>
        </div>
        <Link to="/" ><button class="logout">Logout</button></Link>

        </div>
)
}

export default Home