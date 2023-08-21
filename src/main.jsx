import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import brayanLogo from "../src/assets/brayanLogo.png";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <a href="http://example.com/" target="_blank">
      <img src={brayanLogo} className="brayanLogo" alt="" />
    </a>
  </React.StrictMode>
);
