import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SimpleFactory from './components/simpleFactory/SimpleFactory';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/simpleFactory" component={SimpleFactory}></Route>
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
