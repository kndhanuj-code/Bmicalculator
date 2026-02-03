import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Facebook = () => {

  let navigate=useNavigate()


   let find1user=localStorage.getItem('measure')
   console.log(find1user)
   let [data , setData] = useState(
    {
        firstname:'',
        lastname:'',
        gender:'',
        emailid:'',
        password:'',
         date:'',
         month:'',
         year:''



   }
   )
   
   let dates=([1
   , 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31
]);
   let months= ([
     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
   ]);
  let years = ([2021 , 2022 , 2023]);

       




   

   function handleChange(e) {
        let result = {...data,[e.target.name]: e.target.value }
        
        console.log(result);
        setData(result)


    }

    








    function submitHandler(e) {
        e.preventDefault()

        console.log(data)


if(data.firstname){
               navigate('/Product',{state:data.firstname})
        }else{
            navigate('/Product')
        }




      setData({
        firstname:'',
        lastname:'',
         date:'',
         month:'',
         year:'',
        gender:'',
        emailid:'',
        password:''

            
        })



    }

        

  return (
    <div style={{width:'500px' }}>
       <p>{find1user ? find1user: 'error'}</p>
   
       <div>
       <h1>Create a new account</h1>
       </div>
       <form onSubmit={submitHandler}>

                <input placeholder=' Firstname' onChange={handleChange} name='firstname' value={data.firstname} />
                
      
                <input style={{marginLeft:'20px'}} placeholder=' Surname ' onChange={handleChange} name='lastname' value={data.lastname} />
                <br />
                <br />
               

               <select  name="day"  >
          <option  value="">Day</option>
          {dates.map((num)=><option>{num}</option>)}
        </select>

       
        <select style={{marginLeft:'20px'}} name="month"  >
          <option value="">Month</option>
          {months.map((mon)=><option>{mon}</option>)}
        </select>

       
        <select style={{marginLeft:'20px'}} name="year"  >
          <option value="">Year</option>
          {years.map((yrs)=><option>{yrs}</option>)}
        </select>
        <br />
        <br />
                
 
                 

                <label>Male <input type='radio' onChange={handleChange} name='gender' value='male'></input></label>
                <label style={{marginLeft:'20px'}}>female <input type='radio' onChange={handleChange} name='gender' value='female'></input></label>
                <br />
                <br />
                <input placeholder='email' onChange={handleChange} name='emailid' value={data.emailid} />
                <br />
                <br />
                <input placeholder='password' onChange={handleChange} name='password' value={data.password} />
                <br />
                <br />

                


                <Button type='submit' >Sign up</Button>


            </form>




    </div>
  )
}

export default Facebook
