import React, { useState } from 'react'

const Amount = () => {
  // let [list , setList] = useState([43 , 56 , 78 , 32]);
  // let [diff, setDiff] = useState();
  
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      login.email === storedUser.email &&
      login.password === storedUser.password
    ) {
      alert ("Login Successful ");
    } else {
      alert ("Invalid Email or Password ");
    }
  };

  // let difference =()=>{
      
  //        let min=list[0]
  //        let max=list[0]

  //        for(let i=1;i<list.length;i++){
  //         if(list[i]<min){
  //           min=list[i]
           
  //         }
  //         if(list[i]>max){
  //           max=list[i]
  //         }
  //        } 
  //        setDiff(max - min)
        
  //       }

  return (
    <div>
      <h2>Login</h2>

      <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
      <br />

      <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
      <br />

      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={difference}> Find </button>
        <h4>{diff}</h4> */}
    </div>
  )
}

export default Amount



