import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Login.css'


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User not found, Kindly Register !")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div class="login">

       <h1 class="main">Guvi Task</h1>

       <div class="details">
        <h1 class="t1">Login, Welcome Back !</h1>

        <form action="POST" class="form1">
            <p  class="f1">Email</p>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} required placeholder="Enter your Email" class="f2"  /> 
            <p class="f3">Password</p>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} required placeholder="Enter your Password" class="f4"  />
            <input type="submit" onClick={submit}  class="f5"/>

        </form>

        <p class="r1">Don't have an account? <Link to="/signup" >Register here</Link> </p>

       </div>

        

    </div>
    )
}

export default Login