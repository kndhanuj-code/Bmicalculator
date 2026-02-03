import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Pagechecker = () => {
   
 let [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value});
  }
  
  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    
    
    
  }

  return (
    <div>
        <input type="email"name="email" placeholder="Email"onChange={handleChange} />
        <br />

      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <br />

      <button onClick={handleSubmit}>save</button>
      
    </div>
  )
}

export default Pagechecker
