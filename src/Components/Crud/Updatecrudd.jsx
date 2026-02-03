import axios from 'axios'
import React, { useState , useEffect } from 'react'
import { Button } from 'react-bootstrap'
import DataTable from 'react-data-table-component'

const Updatecrudd = () => {

    let [image , setImage]=useState([])
    let [upcrud ,setUpcrud]=useState({
        title:'',
        content:''
    })

   let [isEdit,setIsEdit]=useState(false)

    function getallimage(){
        axios.get('http://92.205.109.210:8116/post/getall')
        .then(res=>{
            console.log(res.data.data)  
            setImage(res.data.data)
        }    

        )
    }
    
    let col=[

        {
            name:'title',
            selector:row=>row.title

        },
        {
            name:'content',
            selector:row=>row.content
        },{
          name:'Image',
          cell: row=>(
         <img style={{height:'100px' , width:'100px'}} src={`http://92.205.109.210:8116${row.image}`}/>)
        },
        {
            name:'update',
            selector:row=><Button  onClick={()=>editHandler(row)}>edit</Button>
        } 
        
    ]

     function editHandler(image){
    console.log(image);

    setUpcrud(image)
    setIsEdit(true)
    
   }



        useEffect(()=>{
         getallimage()
          },[]) 
          
          
          function changeHandler(e){
            setUpcrud({...upcrud,[e.target.name]:e.target.value})


          }

          function submitHandler(e){
        e.preventDefault()
        console.log(upcrud);
        if(isEdit){
            console.log(upcrud);

        let finalResult={
                title:upcrud.title,
                content:upcrud.content
                
                
            }

            axios.post(`http://92.205.109.210:8116/post/update/683193f5c5e19517f13ecd1e${upcrud.imageId}`,finalResult)
            .then(res=>{
            console.log(res)
            setIsEdit(false)
            getallimage()

            setUpcrud(
                {
        title:'',
        content:''
        
    }
            )
         alert('user updated successfully')

        
        
        }
        

        )

         }else{
             axios.put('http://92.205.109.210:8116/post/update/',upcrud)
        .then(res=>{
            console.log(res)
            getallimage()

            setUpcrud(
                {
       title:'',
        content:''
        
    }
            )
        }
        )
        .catch(err=>console.error(err))
            
        }

    }




  return (
    <div>  

     <form onSubmit={submitHandler}>
            <input type='' placeholder='name' 
            name='title'
            value={upcrud.title}
            onChange={changeHandler}
            />
            
               <input type='' placeholder='text' 
            name='content'
            value={upcrud.content}
            onChange={changeHandler}
            />
            </form>







      <DataTable
     data={image}
      columns={col}/>

    </div>
  )
}

export default Updatecrudd
