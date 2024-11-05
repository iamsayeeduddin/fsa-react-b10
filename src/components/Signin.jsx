import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../App";

function Signin() {
  const { isLoggedIn, setIsLoggedIn } = useContext(CountContext);
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // setFormState({
    //   ...formState,
    //   [e.target.name]: e.target.value,
    // });
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (formState.email && formState.password) {
      if (formState.email === "admin@gmail.com" && formState.password === "admin123") {
        setIsLoggedIn(true);
        navigate("/");
        localStorage.setItem("isLoggedIn", true);
        alert("Loggedin Succesfully!");
      } else {
        alert("Wrong Username password!");
      }
    }
  };

  //   useEffect(() => {
  //     if (isLoggedIn) {
  //       navigate("/");
  //     }
  //   }, [isLoggedIn]);

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            name="password"
            value={formState.password}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signin;
