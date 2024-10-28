/* eslint-disable no-unused-vars */
import { useState } from "react";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";
import { Route, Routes, Link } from "react-router-dom";
import User from "./components/User";

function App() {
  let names = ["Sayeed", "Altaf", "John", "Vinod", "Imad"];
  const [toggle, setToggle] = useState(false);
  const NewComp = Tabs;

  return (
    <>
      {/* <button className="py-2 px-4 bg-blue-500" onClick={() => setToggle(!toggle)}>
        Toggle Counter
      </button>
      {toggle && <Counter />} */}
      {/* <UserList /> */}
      {/* <TodoList /> */}
      <nav className="flex justify-center gap-5 py-6 bg-blue-400">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/todos">TodoList</Link>
        <Link to="/tabs">Tabs</Link>
      </nav>
      <Routes>
        {/* <p>Ttest</p> */}
        <Route path="/" element={<Greeting />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:username/:a" element={<User />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
