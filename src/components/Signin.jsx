import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../App";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

function Signin() {
  const { isLoggedIn, setIsLoggedIn } = useContext(CountContext);
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  // const [formState, setFormState] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   // setFormState({
  //   //   ...formState,
  //   //   [e.target.name]: e.target.value,
  //   // });
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email!").required("Email is Required!"),
      password: Yup.string()
        .required("Password is Required!")
        .min(8, "Atleast 8 Characters Required")
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=])(?=^[a-zA-Z!@#$%^&*()_\-+=]{3,}$)[a-z]*[A-Z][a-z]*[!@#$%^&*()_\-+=][a-z]*$/,
          "Password must contain exactly one uppercase letter, one symbol, and the rest lowercase letters."
        ),
    }),
    onSubmit: (values) => {
      if (values.email === "admin@gmail.com" && values.password === "Admin@fsa") {
        setIsLoggedIn(true);
        navigate("/");
        localStorage.setItem("isLoggedIn", true);
        alert("Loggedin Succesfully!");
      } else {
        alert("Wrong Username password!");
      }
    },
  });

  // const handleSubmit = () => {
  //   if (formState.email && formState.password) {
  //     if (formState.email === "admin@gmail.com" && formState.password === "admin123") {
  //       setIsLoggedIn(true);
  //       navigate("/");
  //       localStorage.setItem("isLoggedIn", true);
  //       alert("Loggedin Succesfully!");
  //     } else {
  //       alert("Wrong Username password!");
  //     }
  //   }
  // };

  //   useEffect(() => {
  //     if (isLoggedIn) {
  //       navigate("/");
  //     }
  //   }, [isLoggedIn]);

  return (
    <div>
      {console.log(values, errors, touched)}
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Your email
          </label>
          <input
            type="email"
            name="email"
            onBlur={handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@flowbite.com"
            value={values.email}
            onChange={handleChange}
          />
          {errors?.email && touched.email && (
            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
              <p>{errors.email}</p>
            </div>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            Your password
          </label>
          <input
            type={hide ? "password" : "text"}
            name="password"
            value={values.password}
            onBlur={handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={handleChange}
          />
          <span onClick={() => setHide(!hide)}>{hide ? "Unhide" : "Hide"}</span>
          {errors?.password && touched.password && (
            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
              <p>{errors.password}</p>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signin;
