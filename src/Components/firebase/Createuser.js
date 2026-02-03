// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase";

// function Createuser() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//     try {
//       const userCredential =
//         await createUserWithEmailAndPassword(auth, email, password);

//       console.log("User created:", userCredential.user);
//       alert("Signup successful ");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>

//       <input type="email" placeholder="Enter email"value={email}onChange={(e) => setEmail(e.target.value)}/>

//       <br /><br />

//       <input type="password"placeholder="Enter password"value={password}onChange={(e) => setPassword(e.target.value)}/>

//       <br /><br />

//       <button onClick={handleSignup}>Create Account</button>
//     </div>
//   );
// }

// export default Createuser;
