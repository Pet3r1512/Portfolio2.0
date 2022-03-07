import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faSchool,
  faKeyboard,
  faListCheck,
  faContactBook,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faSchool, faKeyboard, faListCheck, faContactBook, faBars);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
