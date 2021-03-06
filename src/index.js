import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import App from "./App";
import Login from "./login";
import Home from "./home";
import Profile from "./profile";
import Upload from "./upload";
import Employer from "./employer";
import * as serviceWorker from "./serviceWorker";

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/upload" component={Upload} />
        <Router path="/employer" component={Employer} />
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
