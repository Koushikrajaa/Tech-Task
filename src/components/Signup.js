import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Signup.css'


function Signup() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,name,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists, Kindly Login !")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
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
        <div class="logn">

       <h1 class="main">Guvi Task</h1>

       <div class="details">
        <h1 class="register">Register Now !</h1>

        <form action="POST" class="form2">
        <p  class="d1">Username</p>
            <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Enter your Name" class="box1" required /> 
            <p  class="d2">Email</p>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your Email" class="box1" required /> 
            
            <p class="d3">Password</p>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your Password" class="box1" required />
            <input type="submit" onClick={submit}  class="box2"/>

        </form>

        <p class="r1">Already have an account? <Link to="/" >Login</Link> </p>

       </div>

        

    </div>
    )
}

export default Signup