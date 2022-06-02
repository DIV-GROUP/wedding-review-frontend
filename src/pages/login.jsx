import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import '../css/login.scss'
function Login() {
 
       const [email, setEmail] = useState ("");
       const [password, setPassword] = useState ("");
       const [errorMessage, setErrorMessage]= useState("")

       const navigate = useNavigate()

       const login = async (e) =>{
           try{
               e.preventDefault();
               const response = await axios.post(
                   "/users/login",
                   
                   {
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
                   navigate("/signup", {replace: true});
               }
           }catch (error){
               console.log(error);
           }
       };
       
 
    return (
      <>
       <div className="login-form">
              
              <form onSubmit={login}>

                  <h1>Login</h1>

                  <div>

                 <input 
                  type="email" 
                  name='le'
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />

                  </div>
                  
                 <div>
                 <input 
                  type="password" 
                  name='lp'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />

                  </div>

                  <h2> forget password? enter 
                       <NavLink to = '/reset'> email</NavLink>
                       </h2>
  

                
                  <button 
                  name="btn"
                   type="submit">
                       Login 
                   </button>
                   <h3>Don't have an account? 
                       <NavLink to = '/signup'> Sign up</NavLink>
                       </h3>
              </form>
          </div>

      </>
    );
  }
  
  export default Login;
  