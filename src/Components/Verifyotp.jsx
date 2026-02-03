import React, { useState } from "react";
import { useFormik } from "formik";
import Cookies from "js-cookie";

const Verifyotp = () => {
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(null);

  const formik = useFormik({
    initialValues: {
    //   email: "",
      otp: ""
    },

    onSubmit: (values) => {
    //   let savedEmail = Cookies.get("email");
      let savedOtp = Cookies.get("otp");
      let attempts = parseInt(Cookies.get("attempts"));

      if ( !savedOtp) {
        setMessage(" OTP Expired");
        return;
      }

      if (attempts <= 0) {
        setMessage(" Attempts exceeded");
        return;
      }

      if (
        // values.email === savedEmail &&
        values.otp === savedOtp
        
      ) {
        setMessage(" Valid OTP");
        setIsValid(true);
      } else {
        attempts--;
        Cookies.set("attempts", attempts, { expires: 3 / 1440 });
        setMessage(` Invalid OTP. Attempts left: ${attempts}`);
        setIsValid(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Verify OTP</h3>
      <br />
      <br />

      
      <input type="text" name="otp" placeholder="Enter OTP" value={formik.values.otp} onChange={formik.handleChange}/>
      <br />
      <br />

      <button type="submit">Verify OTP</button>

     {message && (
        <p style={{ color: isValid ? "green" : "red" }}>
          {message}
        </p>
      )}
    </form>
  );
};

export default Verifyotp;
