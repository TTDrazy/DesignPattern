import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SimpleFactory from './components/simpleFactory/SimpleFactory';
import ShoppingCart from "./components/unknown/ShoppingCart";

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/simpleFactory" component={SimpleFactory}></Route>
        <Route exact path="/unknown" component={ShoppingCart}></Route>
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
