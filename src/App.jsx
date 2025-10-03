// import {getDatabase,ref,set} from "firebase/database"
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebase"
import SignupPage from './pages/signup'
import SigninPage from './pages/signin'

import './App.css'
// const db=getDatabase(app);



const Auth=getAuth(app);


function App() {

  const SignupUser=()=>{
    createUserWithEmailAndPassword(Auth,"umeshsdjf2059@gmail.com","umehskfdj123"
    )
    .then((value)=>console.log(value))
    .catch((error) => console.log(error));
  };
  // const putData=()=>{
  //   set(ref(db,"users/umesh"),{
  //     id:1,
  //     name:"umesh gupta",
  //     age:23,
  //   })
  //   .then(()=>{
  //     console.log("data saved successfully");
  //   })
  //   .catch(()=>{
  //     console.log("error saving data:",error)
  //   })

  // };
  return (
   <div className='App'>
    <SignupPage/>
    <SigninPage/>
   </div>
      
  );
};
export default App;
