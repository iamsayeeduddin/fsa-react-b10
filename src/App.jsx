import React from "react";

function App() {
  // return (
  //   <>
  //     <h1 style="color: 'yellow'">Welcome to my WebApp!</h1>
  //     <p>This is a React app</p>
  //   </>
  // );

  const h1 = React.createElement("h1", { style: { color: "yellow" } }, "Welcome to my WebApp!");
  const p = React.createElement("p", {}, "This is a React app");
  const div = React.createElement("div", {}, [h1, p]);
  return div;
}

export default App;

export const PI = 3.14;
