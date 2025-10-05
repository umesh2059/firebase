// import {getDatabase,ref,set} from "firebase/database"
import { useEffect,useState} from "react";
import {getAuth,onAuthStateChanged,signOut} from "firebase/auth";
import {app} from "./firebase"
import SignupPage from './pages/signup'
import SigninPage from './pages/signin'

import './App.css'
// const db=getDatabase(app);
const Auth=getAuth(app);
function App() {

  const [user,setUser]=useState(null);
  useEffect(()=>{
    onAuthStateChanged(Auth,user=>{
      if(user){
        setUser(user);
        // yes you are logged in 
      
      }else{
        // user is logged out 
        console.log("you are logged out ");
        setUser(null);
      }
    });
  },[])

  if (user===null){

     return (
   <div className='App'>
    <SignupPage/>
    <SigninPage/>
   </div>
     )
  }

  return (
   <div className='App'>
  <h1>Hello {user.email}</h1>
  <button onClick={()=>signOut(Auth)}>logout</button>
   </div>
      
  );
};
export default App;
