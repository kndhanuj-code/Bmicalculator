import axios from 'axios'
import React, { useState } from 'react'

const Postcrudd = () => {
    let [data,setData]=useState({
        title:"",
        content:"",
        image:null
    })


function handleChange(e){
      const { name, value, files } = e.target
    if (name === "image") {
      setData({ ...data, image: files[0] })  
    } else {
      setData({ ...data, [name]: value })
    }

}


function handleSubmit(e){
    e.preventDefault()
    console.log(data);

    let formData=new FormData() 
    formData.append("title",data.title)
    formData.append("content",data.content)
    formData.append("image",data.image)


 // Inspect values
for (let [key, value] of formData.entries()) {
  console.log(key, value);
}

    

    axios.post('http://92.205.109.210:8116/post/create',formData)
    .then(res=>{
        console.log(res)
        alert('data reg sucessfully')
        
    })
    .catch(err=>console.error(err))
    

setData({
    title:"",
    content:"",
    image:""
})    

}
  return (
    <div>

    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="Title"
            name='title'
            value={data.title}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Content"
            value={data.content}
            name='content'
            onChange={handleChange}
        />
        <input
            type="file"
            placeholder="Image URL"
          
            name='image'
            onChange={handleChange}
        />

        <button type='submit'>Submit</button>
    </form>

    </div>
  )
}

export default Postcrudd
