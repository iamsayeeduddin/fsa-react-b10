/* eslint-disable no-unused-vars */
import { useState } from "react";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

function App() {
  let names = ["Sayeed", "Altaf", "John", "Vinod", "Imad"];
  const [toggle, setToggle] = useState(false);
  const NewComp = Tabs;

  return (
    <>
      <button className="py-2 px-4 bg-blue-500" onClick={() => setToggle(!toggle)}>
        Toggle Counter
      </button>
      {toggle && <Counter />}
      <UserList />
    </>
  );
}

export default App;
