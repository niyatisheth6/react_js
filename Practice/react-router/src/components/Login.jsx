import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    function handleLogin(){
        localStorage.setItem('login',true)
        navigate('/')
    }
    const navigate = useNavigate();
    useEffect(()=>{
        const login = localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    })
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input placeholder="Enter Name" />
        <br></br>
        <br></br>
        <input placeholder="Enter Email" />
        <br></br>
        <br></br>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
