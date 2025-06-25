import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [emailId, setEmailId] = useState("mark@gmail.com");
    const [password, setPassword] = useState("Mark@123");

    const handleLogin = async () => {
        try{
            const res = await axios.post("http://localhost:3000/login",{
                email: emailId,
                password,
            },{withCredentials: true})
            
            
        }catch(err){
            console.log(err);
            
        }
    }
  return (
    <div className='flex justify-center my-10'>
          <div className="card bg-base-300 w-96 shadow-sm">
              <div className="card-body">
                  <h2 className="flex justify-center card-title">Login</h2>
                  <fieldset className="fieldset">
                      <legend className="fieldset-legend">Email ID</legend>
                      <input type="text" className="input" placeholder="Type here" 
                      value={emailId}
                      onChange={(e)=>setEmailId(e.target.value)}
                      />
                  </fieldset>
                  <fieldset className="fieldset">
                      <legend className="fieldset-legend">Password</legend>
                      <input type="text" className="input" placeholder="Type here"
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                      />
                  </fieldset>
                  <div className="justify-center card-actions">
                      <button className="btn btn-primary " onClick={handleLogin}>Login</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Login