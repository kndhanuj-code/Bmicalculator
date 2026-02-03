import React, { useState } from 'react'

const Form = () => {
  let [form , setForm]=useState(
      {
         
          username:'',
          emailid:'',
          password:'',
          phonenumber:'',
           
  
  
     }
     )

      

  return (
    <div style={{paddingLeft:'300px'}}>
<Form >
  
   <input placeholder='Enter your username' onChange={(e)=>setForm(e.target.value)} name='username' value={form.username}    />
   <br />
   <br />
   <input placeholder='Enter your emailid' onChange={(e)=>setForm(e.target.value)} name='emailid' value={form.emailid}    />
   <br />
   <br />
   <input placeholder='Enter your password' onChange={(e)=>setForm(e.target.value)} name='password' value={form.password}    />
   <br />
   <br />
   <input placeholder='Enter your number' onChange={(e)=>setForm(e.target.value)} name='number' type='number' value={form.phonenumber}    />
   </Form>





      
    </div>
  )
}

export default Form

 
