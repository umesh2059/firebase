// import {getDatabase,ref,set} from "firebase/database"
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebase"
import './App.css'
// const db=getDatabase(app);


const Auth=getAuth(app)


function App() {

  const signupUser=()=>{
    createUserWithEmailAndPassword(Auth,
      "umeshg2059@gmail.com",
      "umehskfdj123"
    )
    .then((value)=>console.log(value))

  }
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
    <h1>hello how are you </h1>
    <button  onClick={signupUser}>create data</button>
   </div>
      
  )
}
export default App;
