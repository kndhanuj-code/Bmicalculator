import React from 'react'
import Tasdetails from './Tasdetails'

const Task1 = () => {
  let list=[{
    name:'aj',
    age:23
  }]
  





  return (
    <div>
      <Tasdetails details={list}/>
    </div>
  )
}

export default Task1
