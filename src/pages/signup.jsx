import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Appstyle from '../css/App.module.css'
import '../css/signup.scss'

function Signup() {
    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmpassword, setConfirmpassword] = useState("")
    const [errorMessage, setErrorMessage]= useState("")

    const navigate = useNavigate()

    const signup = async (e) =>{
        try{
            e.preventDefault();
            const response = await axios.post(
                "/users/signup",
                
                {
                   firstName,
                   lastName,
                   email,
                   password
                }, { withCredentials: true}
                
            );
  
            const { data } = response;
  
            console.log(response)
            console.log(errorMessage)
  
            if (data.toString().includes('400')){
              setErrorMessage('please enter an email');
            }
  
            console.log('data');
            if (data.user) {
                // replace the browser history stack from going back
                navigate("/login", {replace: true});
            }
        }catch (error){
            console.log(error);
        }
    };
    
    return (
      <>
        {/* <div className="App">
           This is the signup page
        </div> */}

        <div className="signup-form">
              
              <form className="sign" onSubmit={signup}>

                  <h1>Create the memories with the best people</h1>
                  {/* <h1>best people</h1> */}
                  
                  <div className="name">

                  <input 
                  type="text"
                  name='firstName' 
                  placeholder='Firstname'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  /> 
                
                  <input 
                  type=""
                  name='lastName' 
                  placeholder='Lastname'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  />
                  </div>
                 
                 
                 <div>
                 <input 
                  type="email" 
                  name='e'
                  placeholder='Enter an email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>
                  
                 <div className="password">
                 <input 
                  type="password" 
                  name='p'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />

                 <input 
                  type="password" 
                  name='cp'
                  placeholder='Confirm Password'
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  />
 
                 </div> 

                
                  <button
                  className="" 
                   type="submit">
                       SIGNUP
                   </button>
                   <h3 className="already">Already have an account? 
                       <NavLink to = '/login'> Login </NavLink>
                       </h3>
              </form>
          </div>

      </>
    );
  }
  
  export default Signup;
  