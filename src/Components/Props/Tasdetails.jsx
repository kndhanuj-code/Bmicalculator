import React from 'react'
import { Card } from 'react-bootstrap'

const Tasdetails = (props) => {
  return (
    <div>
      {
        props.details.map((entries) =><Card style={{width:'200px' , height:'100px', padding:'20px' , backgroundColor:'purple' , color:'white' , borderRadius:'10px' , margin:'30px'}}
        >
            <p>Name : {entries.name}</p>
            <p>Age : {entries.age}</p>

        </Card>)
      }


    </div>
  )
}

export default Tasdetails
