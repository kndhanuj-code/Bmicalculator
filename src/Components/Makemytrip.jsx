import React, { useState } from 'react'
import "./Makemytrip.css"

const Makemytrip = () => {
    let [type ,  setType]=useState({
        title:"Cheapest flight from Delhi to Spain", 
        content:"Plan a relaxing getaway for my parents..." 
    })

  function handlechange(e){
    e.preventDefault()
    console.log(type)
  }


  return (
    <div className='bg' >
     <div className='bot'>

       <div className='top'>
         <p>Cheapest flight from Delhi to Spain</p>
       </div>








     </div>
        
      
    </div>
  )
}

export default Makemytrip
