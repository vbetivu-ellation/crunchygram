import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { API } from "./api";

API.getMe()
  .catch(() => null)
  .then((data) => {
    ReactDOM.render(
      <React.StrictMode>
        <App user={data} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
