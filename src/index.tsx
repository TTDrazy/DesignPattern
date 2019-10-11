import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SimpleFactory from "./components/simpleFactory/SimpleFactory";
import Goods from "./components/strategy-pattern/old/Goods";
import StrategyIndex from './components/strategy-pattern/strategy/StrategyIndex';
import WearClothesIndex from './components/unknown/wearClothes/WearClothesIndex';


ReactDOM.render(
    <Router>
        <App>
            <Route exact path="/"></Route>
            <Route
                exact
                path="/simpleFactory"
                component={SimpleFactory}
            ></Route>
            <Route exact path="/strategy/old" component={Goods}></Route>
            <Route exact path="/strategy" component={StrategyIndex}></Route>
            <Route exact path="/unknown" component={WearClothesIndex}></Route>
        </App>
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
