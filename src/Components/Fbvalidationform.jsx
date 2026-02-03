import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';


const Fbvalidationform = () => {
    let[fbform , setFbform]=useState({
        name:"",
        email:"",
        rating:"",
        comments:""
    })
    let[checkform , setCheckform]=useState({
        fullname:"",
        shippingaddress:"",
        card:"",
        expirydate:"",
        cvv:""

    }

    )

    const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),

  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),

  rating: Yup.number()
    .required('Rating is required')
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating cannot be more than 5'),

  comments: Yup.string()
    .required('Comments are required')
    .min(4, 'Comments must be at least 5 characters')
    .max(500, 'Comments must be less than 500 characters'),
});


const checkSchema = Yup.object({
  fullname: Yup.string()
    .required('Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be less than 50 characters'),

  shippingaddress: Yup.string()
    .required('Shipping address is required')
    .min(10, 'Address must be at least 10 characters')
    .max(200, 'Address must be less than 200 characters'),

  card: Yup.string()
    .required('Card number is required')
    .matches(/^[0-9]{16}$/, 'Card number must be 16 digits'),

  expirydate: Yup.string()
    .required('Expiry date is required')
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Expiry date must be in MM/YY format'),

  cvv: Yup.string()
    .required('CVV is required')
    .matches(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits'),
});




     const formik = useFormik({
    
            initialValues: fbform,
            validationSchema,
           
    
            onSubmit: (values, { resetForm }) => {
                console.log(values);
                resetForm()
            }
    
        })
        console.log(formik)

        const formik1 = useFormik({
    
            initialValues: checkform,
            validationSchema: checkSchema,
           
    
            onSubmit: (values, { resetForm }) => {
                console.log(values);
                resetForm();
            }
    
        })
        console.log(formik1)
    


    
  return (
    <div style={{display:'flex' , marginTop:'100px'}} >
        <div style={{width:'max-content' , height:'max-content' , border:'1px solid black' , backgroundColor:'skyblue' , marginLeft: '360px' }}>
        <form onSubmit={formik.handleSubmit}>
            <div style={{padding:'20px'}}>
                <h1>📝 Feedback Form</h1>
                <input placeholder='Enter your name' onChange={formik.handleChange} name='name' value={formik.values.name} />
                {
                        (formik.touched.name && formik.errors.name) && <p className='text-danger'>{formik.errors.name}</p>
                    }
                    <br />
                    <br />
                    <input placeholder='Enter your email' onChange={formik.handleChange} name='email' value={formik.values.email} />
                {
                        (formik.touched.email && formik.errors.email) && <p className='text-danger'>{formik.errors.email}</p>
                    }
                    <br />
                    <br />
                    <input placeholder='Enter your rating' onChange={formik.handleChange} name='rating' value={formik.values.rating} />
                {
                        (formik.touched.rating && formik.errors.rating) && <p className='text-danger'>{formik.errors.rating}</p>
                    }
                    <br />
                    <br />
                    <input placeholder='Enter your comments' onChange={formik.handleChange} name='comments' value={formik.values.comments} />
                {
                        (formik.touched.comments && formik.errors.comments) && <p className='text-danger'>{formik.errors.comments}</p>
                    }
                    <br />
                    <br />
                    <button style={{backgroundColor:'green' , marginLeft:'40px'}} type='submit'>submit</button>
            </div>
        </form>
        </div>
        
        <div style={{width:'max-content' , height:'max-content' , border:'1px solid black' , backgroundColor:'orange' , marginLeft: '200px' }}>
        <form onSubmit={formik1.handleSubmit}>
            <div style={{padding:'20px'}}>
                <h2>🛒 Checkout Form</h2>
                <input  placeholder='Enter your name' onChange={formik1.handleChange} name='fullname' value={formik1.values.fullname} />
                {
                    (formik1.touched.fullname && formik1.errors.fullname) && <p className='text-danger'>{formik1.errors.fullname}</p>
                }
                <br />
                <br />
                <input placeholder='Enter your Address' onChange={formik1.handleChange} name='shippingaddress' value={formik1.values.shippingaddress} />
                {
                    (formik1.touched.shippingaddress && formik1.errors.shippingaddress) && <p className='text-danger'>{formik1.errors.shippingaddress}</p>
                }
                <br />
                <br />
                <input placeholder='Enter your card number' onChange={formik1.handleChange} name='card' value={formik1.values.card} />
                {
                    (formik1.touched.card && formik1.errors.card) && <p className='text-danger'>{formik1.errors.card}</p>
                }
                <br />
                <br />
                <input placeholder='MM/YYYY' onChange={formik1.handleChange} name='expirydate' value={formik1.values.expirydate} />
                {
                    (formik1.touched.expirydate && formik1.errors.expirydate) && <p className='text-danger'>{formik1.errors.expirydate}</p>
                }
                <br />
                <br />
                 <input placeholder='Enter cvv'type='password' onChange={formik1.handleChange} name='cvv' value={formik1.values.cvv} />
                {
                    (formik1.touched.cvv && formik1.errors.cvv) && <p className='text-danger'>{formik1.errors.cvv}</p>
                }
                <br />
                <br />
                <button style={{backgroundColor:'green' , marginLeft:'40px'}} type='submit'>submit</button>

            </div>
        </form>
        </div>
      
    </div>
  )
}

export default Fbvalidationform
