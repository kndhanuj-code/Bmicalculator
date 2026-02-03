import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const Ustate = () => {
     
    // let [height,setHeight]=useState(0)
    // let [breadth,setBreadth]=useState(0)
    // let [name,setName]=useState('0')
    // let [weight , setWeight]=useState('0')
    // let [hei,setHei]=useState('0')
    // let [isShow,setIsShow]=useState(true)
    // let [namee,setNamee]=useState('')
    // let [email , setEmail]=useState("")
     
     
//       let [celsius , setCelsius]=useState("")
     
//      function toFahrenheit(c) {
      
//   if (c !== "") {
//     return (c * 1.8) + 32;
//   } else {
//     return "";
//   }
// }

 
  let [fizzbuzz , setFizzbuzz]=useState()
  let [result , setResult]=useState()
  function find(a){
    if((a % 3 === 0) && (a % 5 === 0)){
    return "fizzbuzz"
}else if(a % 5 === 0){
    return "buzz"
}else if(a % 3 ===0){
     return"fizz"
}else{
    return "not divisible"
}
setResult(find)
  }

 
    



  return (
    <div>
      {/* <input placeholder='breadth' onChange={(e)=>setBreadth(e.target.value)}/> <br />
<br />
        <input placeholder='height' onChange={(e)=>setHeight(e.target.value)}/>
        <br />
        
        <p>{(breadth*height)/2} cm</p>
      <br />
      <br />
       <div>
         


<input type="text" placeholder="Enter your name"  onChange={(e)=>setName(e.target.value)} />
<br />
<p>{name.length}</p>

       </div>
    <input placeholder='enter your weight' onChange={(e)=>setWeight(e.target.value)}/>
    <br />
    <br />
    <input placeholder='enter your height' onChange={(e)=>setHei(e.target.value)}/>
    <p>{weight/(hei)*(hei)}</p>


     {/*1. Toggle Visibility (Boolean state handling)
     • Show or hide a paragraph when a button is clicked. */}
     {/* {
  isShow && <p>Hey Dhanuj You Are Awesome</p> 
      }

  <Button onClick={()=>setIsShow(!isShow)}>{isShow?'hide':'show'}</Button>
<br />
<br />
     */}

     {/*2. Form Handling (Managing input fields)
     • Store and update user input (name, email, etc.). */}
    {/* <Form>
    
        <input placeholder='enter your namee' onChange={(e)=>setNamee(e.target.value)}/>
        <br />
        <br />
        <input placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <br />
        <Button type='submit'>submit</Button>
       
     
    </Form> */}


    {/* 1.  Temperature Converter – Convert Celsius to Fahrenheit dynamically. */}
{/* 
     <h2>Temperature Converter</h2>

      
      <input   style={{ padding: "5px", width: "150px" }} type="number" placeholder="Enter Celsius"
        value={celsius} onChange={(e) => setCelsius(e.target.value)}/>
       
      

     
      <p>
        Fahrenheit: {toFahrenheit(celsius)}
      </p> */}
      <br />
      <br />


      <input  value={fizzbuzz} onChange={(e) => setFizzbuzz(e.target.value)}/>    
   <button onClick={() =>setResult(find(fizzbuzz))}>click</button>
   
      <p>result: {result}</p> 











    
    </div>
  )
}

export default Ustate
