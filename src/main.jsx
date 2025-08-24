import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <App />
  </StrictMode>
);
