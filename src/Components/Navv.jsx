import React from 'react'
import {  NavLink } from 'react-router-dom'

const Navv = () => {
  return (
    <div  >
        
      <div>
         {/* <NavLink to=' '

        className={({ isActive }) => 
          isActive ? "active-link" : "inactive-link"
        }
 
      
      
     >Facebook</NavLink>

</div>


<div>
     <NavLink to='/Product'

        className={({ isActive }) => 
          isActive ? "active-link" : "inactive-link"
        }

      
      
      >Product</NavLink>
      </div>
      <div>

       <NavLink to='/task1'

        className={({ isActive }) => 
          isActive ? "active-link" : "inactive-link"
        }

      
      
      >First task</NavLink> */}
      
       




      </div>
      <div>
        {/* <NavLink to='/page'>Sign up</NavLink> */}
      </div>
      <div ><NavLink to='/amount'>Login</NavLink> </div>
      <div ><NavLink to='/Otp'>Otp</NavLink> </div>
      <div ><NavLink to='/Verify'>Verify</NavLink> </div>
      <div><NavLink to='/Reduce'>Reducer</NavLink></div>
      <div><NavLink to='/recipe'>RecipeManager</NavLink></div>
       <div><NavLink to='/quiz'>QuizApp</NavLink></div>
       <div><NavLink to='/data'>DTable</NavLink></div>
      <div><NavLink to='/cart'>Ecart</NavLink></div>
      <div><NavLink to='/Studentrecord'>Record</NavLink></div>
      <div><NavLink to='/marks/:id'>Marks</NavLink></div>
      <div><NavLink to='/get'>Getdata</NavLink></div>
      <div><NavLink to='/delete'>Delete Data</NavLink></div>
      <div><NavLink to='/create'>Create Data</NavLink></div>
     <div><NavLink to='/focus'>focus</NavLink></div>
     <div><NavLink to='/input'>input</NavLink></div>
     <div><NavLink to='/Btn'>Button</NavLink></div>
     <div><NavLink to='/sec'>Section</NavLink></div>
     <div><NavLink to='/crpost'>Create Post image</NavLink></div>
     <div><NavLink to='/crget'> Get image</NavLink></div>
     <div><NavLink to='/crupdate'> Update image</NavLink></div>
     <div><NavLink to='/createcd'> create mthd</NavLink></div>
     <div><NavLink to='/getcd'> Get mthd</NavLink></div>
      <div><NavLink to='/Protask'>Product task</NavLink></div>
      <div><NavLink to='/chat'>mmt chatbot</NavLink></div>
      <div><NavLink to='/Get slice'>view slice</NavLink></div>
      <div style={{ width:'100%' , height:'100%',  display:'flex' , gap:'20px' , justifyContent:'center' , backgroundColor:'green'}}>
      <div><NavLink to="/">Home</NavLink></div>
      
       <div><NavLink to='/about'>About</NavLink></div>

       <div><NavLink to='/Form valid'>Register</NavLink></div>
     </div>

     <div><NavLink to='/user'>user page</NavLink></div>
     <div><NavLink to='/login'>login page</NavLink></div>
     <div><NavLink to='/node'>connection</NavLink></div>
     <div><NavLink to='/bmi'>Bmicalculator</NavLink></div>




      
     
      
     
     




     
    </div>
  )
}

export default Navv
