import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {

  const [form, setForm] = useState({
 name: "",
age: "",
city: ""
 });

 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});};

 const handleSubmit = async (e) => {
    e.preventDefault();

try {
      const res = await axios.post("http://localhost:5000/api/create", form);

alert("User Created ");
      console.log(res.data);

       setForm({ name:"", age:"", city:"" });

    } catch (err) {
        console.error(err);
      
    }
  };

  return (
    <div>
    

      <form onSubmit={handleSubmit}>

    <input name="name"placeholder="Name"value={form.name}onChange={handleChange}/>

     <input name="age" placeholder="Age" value={form.age} onChange={handleChange}/>

    <input name="city" placeholder="City" value={form.city} onChange={handleChange} />

     <button type="submit">Create</button>

      </form>
    </div>
  );
};

export default CreateUser;
