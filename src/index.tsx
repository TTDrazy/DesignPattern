import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SimpleFactory from "./components/simpleFactory/SimpleFactory";
import Goods from "./components/strategy-pattern/old/Goods";
import StrategyIndex from './components/strategy-pattern/strategy/StrategyIndex';
import WearClothesIndex from './components/decorator-pattern/old/WearClothesIndex';
import WearClothesDecorate from "./components/decorator-pattern/decorate/WearClothesDecorate";
import PrototypeIndex from './components/prototype-pattern/PrototypeIndex';
import SingletonIndex from './components/singleton-pattern/singleton/SingletonIndex';
import ObserverIndex from './components/observer-pattern/ObserverIndex';
import OldChainOfResponsibilityIndex from './components/chainOfResponsibility-pattern/old/OldChainOfResponsibilityIndex';
import ChainOfResponsibility from './components/chainOfResponsibility-pattern/chainOfResponsibility/ChainOfResponsibilityIndex';

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
            <Route exact path="/prototype" component = {PrototypeIndex}></Route>
            <Route exact path="/decorator/old" component={WearClothesIndex}></Route>
            <Route exact path="/decorator" component = {WearClothesDecorate}></Route>
            <Route exact path="/singleton" component={SingletonIndex}></Route>
            <Route exact path="/observer" component={ObserverIndex}></Route>
            <Route exact path="/chainOfResponsibility/old" component={OldChainOfResponsibilityIndex}></Route>
            <Route exact path="/chainOfResponsibility" component = {ChainOfResponsibility}></Route>
        </App>
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
