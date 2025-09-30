import react from 'react';

const SignupPage=()=>{
     return(
        <div className='signup-page'>
            <label>Email</label>
            <input type="email" required  placeholder= 'Enter your mail'></input>
            <label>Password</label>
            <input type="password" required  placeholder= 'Enter your password'></input>
        </div>
     )
}
export default App;