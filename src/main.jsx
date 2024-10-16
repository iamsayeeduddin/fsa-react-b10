import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App, { PI } from "./App.jsx";
import "./index.css";

console.log(PI);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
