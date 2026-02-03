// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase";

// const Loginpage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const userCredential =
//         await signInWithEmailAndPassword(auth, email, password);

//       console.log("Logged in:", userCredential.user);
//       alert("Login successful ");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}
//       />

//       <br /><br />

//       <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>

//       <br /><br />

//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Loginpage;
