/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";
import { Route, Routes, Link, useNavigate, Navigate } from "react-router-dom";
import User from "./components/User";
import Signin from "./components/Signin";
import PrivateRoute from "./utils/PrivateRoute";
import UserFilter from "./components/UserFilter";
import Weather from "./components/Weather";

export const CountContext = createContext({});

function App() {
  let names = ["Sayeed", "Altaf", "John", "Vinod", "Imad"];
  const [toggle, setToggle] = useState(false);
  const NewComp = Tabs;
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
    axios.get(import.meta.env.VITE_API_URL + "courses/courseList").then((res) => console.log(res));
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      {/* <button className="py-2 px-4 bg-blue-500" onClick={() => setToggle(!toggle)}>
        Toggle Counter
      </button>
      {toggle && <Counter />} */}
      {/* <UserList /> */}
      {/* <TodoList /> */}
      <CountContext.Provider value={{ count, setCount, isLoggedIn, setIsLoggedIn }}>
        <nav className="flex justify-center gap-5 py-6 bg-blue-400">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/todos">TodoList</Link>
          <Link to="/tabs">Tabs</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/user-filter">User Filter</Link>
          <p className="cursor-pointer" onClick={() => (isLoggedIn ? handleLogout() : navigate("/signin"))}>
            {isLoggedIn ? "Log Out" : "Log In"}
          </p>
        </nav>
        <Routes>
          {/* <p>Ttest</p> */}
          <Route
            path="/"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Greeting />
              </PrivateRoute>
            }
          />
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/users"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <UserList />
              </PrivateRoute>
            }
          />
          <Route path="/users/:username/:a" element={<User />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/user-filter" element={<UserFilter />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/signin" element={isLoggedIn ? <Navigate to={"/"} /> : <Signin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CountContext.Provider>
    </>
  );
}

export default App;

function NotFound() {
  return (
    <>
      <h3 className="text-red-600">404 Page Not Found</h3>
    </>
  );
}
