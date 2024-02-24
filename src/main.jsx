import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ImageState from "./contexts/ImageState.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ImageState>
    <App />
  </ImageState>
);
