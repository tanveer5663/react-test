import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Context from "./Context.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <Context>
    <App />
  </Context>,
);
