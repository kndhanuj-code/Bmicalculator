import { useFormik } from 'formik';
import React, { useState } from 'react'

const Storage = () => {

  let [store, setStore] = useState(
    {
      length: "",
      width: ""

    }
  )

  //       function calculate(){




  // }

  const formik = useFormik({

    initialValues: store,

    onSubmit: (values) => {
      console.log(values);
      localStorage.removeItem('value');
      console.log(store);

      let object = {
        id: Date.now(),
        len: values.length,
        wdt: values.width,
        total: values.length * values.width

      }



      let jsonForm = JSON.stringify(object)
         
      localStorage.setItem('value', jsonForm)


    }

  })
  console.log(formik)


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange} name='length' value={formik.values.length} />
        <br />
        <br />
        <input onChange={formik.handleChange} name='width' value={formik.values.width} />
        <br />
        <br />
        <p>{formik.values.length * formik.values.width}</p>
        <button type='submit'>add to store</button>

      </form>
        <button  onClick={() => localStorage.removeItem('value')}>delete storage</button>

    </div>
  )
}

export default Storage
