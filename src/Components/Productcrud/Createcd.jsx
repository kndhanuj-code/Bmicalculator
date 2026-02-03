// import axios from "axios";
// import React, { useState } from "react"

// const Createcd = () => {
//   const [name, setName] = useState("")
//   const [price, setPrice] = useState("")
//   const [quantity, setQuantity] = useState("")
//   const [image, setImage] = useState(null)

//   function handlesubmit(e) {
//     e.preventDefault();

//     const formData = new FormData()    //form data method use pannitha oru image ah backend kula kondu poga mudiyum apotha  atha understand panikum and append ethukuna antha data va formdata ku kula push pandrathuku use pandrom
//     formData.append("name", name)
//     formData.append("price", price)
//     formData.append("quantity", quantity)
//     formData.append("image", image)
//     try {
        
//      axios.post('http://92.205.109.210:8116/item/create',formData)
//      .then(res=>{
//          console.log( res.data)
//       alert("Item created successfully!")

//      })

     
      
//       setName("")
//       setPrice("")
//       setQuantity("")
//       setImage(null)
//     } catch (error) {
//       console.error( error);
//       alert("Failed to create item");
//     }
//   };

//   return (
//     <div>
//       <h2>Create Item</h2>
//       <form onSubmit={handlesubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Quantity:</label>
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Image:</label>
//           <input
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])}
//             required
//           />
//         </div>
//         <button type="submit">Create Item</button>
//       </form>
//     </div>
//   );
// };

// export default Createcd;































import axios from "axios";
import React, { useState } from "react";

const Createcd = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    image: null
  });

  function handleChange(e) {
    
const { name, value, files } = e.target



   if (name === "image") {
      setForm({ ...form, image: files[0] })  
    } else {
      setForm({ ...form, [name]: value })
    }




  }

 



  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);


    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("quantity", form.quantity);
    formData.append("image", form.image);

    axios
      .post("http://92.205.109.210:8116/item/create", formData)
      .then(res=>{
        console.log(res)
        alert("Item created successfully!");

        setForm({
          name: "",
          price: "",
          quantity: "",
          image: null
        });
      })
      .catch(() => {
        alert("Failed to create item");
      });
  }

  return (
    <div>
      <h2>Create Item</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Create Item</button>
      </form>
    </div>
  );
};

export default Createcd;

