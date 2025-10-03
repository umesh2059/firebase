import React,{useState} from 'react'

import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import {app}from "../firebase"

const auth=getAuth(app);


const SigninPage=()=>{

    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");


    const SigninUser=()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(value=>console.log("signing successfully"))
        .catch((err)=>console.log(err))
    }
    return(
        <div className='signin-page'>

            <h2>Signin -Page</h2>
            <label>enter you email</label>
            <input onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder='enter your gmail here '/>
            <label>password</label>
            <input onChange={(e)=>setpassword(e.target.value)} 
            value={password}
            type="password"
            placeholder='enter your password here'/>
            <button onClick={SigninUser}>signin</button>
        </div>
    )
}
export default SigninPage;