import { useFormik } from 'formik';

import Cookies from 'js-cookie';

const Otpform = () => {
    let formik = useFormik({
    initialValues: { email: "" },

    onSubmit: (values, { resetForm }) => {
      let otp = Math.floor(1000 + Math.random() * 9000);

      Cookies.set("email", values.email, { expires: 3 / 1440 });
      Cookies.set("otp", otp, { expires: 3 / 1440 });
      Cookies.set("attempts", 3, { expires: 3 / 1440 });
         

      alert(`OTP Generated: ${otp}`);
      resetForm();
    }
  })
  console.log(formik)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <h3>Generate OTP</h3>
      <br />
      <br />

      <input type="email" name="email" placeholder="Enter email" value={formik.values.email}  onChange={formik.handleChange} />
      <br />
      <br />

      <button type="submit">Generate OTP</button>
    </form>
    </div>
  )
}

export default Otpform
