import React from 'react'
import { Card } from 'react-bootstrap'


const Productdet = (props) => {
  return (
    <div style={{display:'flex' , flexWrap:'wrap' , gap:'20px' , margin:'20px' , justifyContent:'center' , alignItems:'center'}}>
      {
        props.ccard.map((obj) =><Card style={{display:'flex' , flexWrap:'wrap' , gap:'20px' , width:'200px',height:'250px' , justifyContent:'center' , alignItems:'center',textAlign:"center"}}
        >
           <img src={obj.image} alt={obj.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
 
         <p> {obj.name}</p>
         <p> {obj.price}</p>
          
        </Card>)
      }
    </div>
  )
}

export default Productdet
