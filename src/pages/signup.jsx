import React,{useState} from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const Auth=getAuth();
const SignupPage=()=>{
    const[Email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const createUser=()=>{
        createUserWithEmailAndPassword(Auth,Email,password)
        .then(value=>alert('sucess'))
    };
     return(
        <div className='signup-page'>
            <h1>SignUp pages </h1>
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)}
            value={Email}
            type="email"
            required 
            placeholder= 'Enter your mail'></input>
            <label>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} 
            value={password}
            type="password" 
            required  
            placeholder= 'Enter your password'></input>
            <button onClick={createUser}>signup</button>
        </div>
     )
}
export default SignupPage;