import {getDatabase,ref,set} from "firebase/database"
import {app} from "./firebase"
import './App.css'
const db=getDatabase(app);


function App() {
  const putData=()=>{
    set(ref(db,"users/umesh"),{
      id:1,
      name:"umesh",
      age:23,
    })
    .then(()=>{
      console.log("data saved successfully");
    })
    .catch(()=>{
      console.log("error saving data:",error)
    })

  };
  return (
   <div className='App'>
    <h1>hello how are you </h1>
    <button  onClick={putData}>put data</button>
   </div>
      
  )
}
export default App
