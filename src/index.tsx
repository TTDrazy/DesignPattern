import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SimpleFactory from "./components/simpleFactory/SimpleFactory";
import Goods from "./components/strategy/old/Goods";
import StrategyIndex from "./components/strategy/strategy/StrategyIndex";
import WearClothesIndex from "./components/decorator/old/WearClothesIndex";
import WearClothesDecorate from "./components/decorator/decorate/WearClothesDecorate";
import PrototypeIndex from "./components/prototype/PrototypeIndex";
import SingletonIndex from "./components/singleton/singleton/SingletonIndex";
import ObserverIndex from "./components/observer/ObserverIndex";
import OldChainOfResponsibilityIndex from "./components/chainOfResponsibility/old/OldChainOfResponsibilityIndex";
import ChainOfResponsibility from "./components/chainOfResponsibility/chainOfResponsibility/ChainOfResponsibilityIndex";
import BridgePattermIndex from "./components/bridge/BridgePattermIndex";
import RestaurantIndex from "./components/command/restaurant/RestaurantIndex";
import GameIndex from "./components/memento/game/GameIndex";
import CommandIndex from "./components/command/command/CommandIndex";
import MenmentoIndex from "./components/memento/memento/MenmentoIndex";
import FactoryIndex from "./components/factory/FactoryIndex";
import AbstractFactoryIndex from "./components/abstractFactory/AbstractFactoryIndex";
import AdapterIndex from "./components/adapter/AdapterIndex";
import AgencyOldIndex from "./components/agency/new/AgencyIndex";
import AgencyIndex from "./components/agency/old/AgencyOldIndex";

ReactDOM.render(
    <Router>
        <App>
            <Route exact path="/"></Route>
            <Route exact path="/simpleFactory" component={SimpleFactory}></Route>
            <Route exact path="/strategy/old" component={Goods}></Route>
            <Route exact path="/strategy" component={StrategyIndex}></Route>
            <Route exact path="/prototype" component={PrototypeIndex}></Route>
            <Route exact path="/decorator/old" component={WearClothesIndex}></Route>
            <Route exact path="/decorator" component={WearClothesDecorate}></Route>
            <Route exact path="/singleton" component={SingletonIndex}></Route>
            <Route exact path="/observer" component={ObserverIndex}></Route>
            <Route exact path="/chainOfResponsibility/old" component={OldChainOfResponsibilityIndex}></Route>
            <Route exact path="/chainOfResponsibility" component={ChainOfResponsibility}></Route>
            <Route exact path="/bridge" component={BridgePattermIndex}></Route>
            <Route exact path="/command/old" component={RestaurantIndex}></Route>
            <Route exact path="/command" component={CommandIndex}></Route>
            <Route exact path="/memento/old" component={GameIndex}></Route>
            <Route exact path="/memento" component={MenmentoIndex}></Route>
            <Route exact path="/factory" component={FactoryIndex}></Route>
            <Route exact path="/abstractFactory" component={AbstractFactoryIndex}></Route>
            <Route exact path="/adapater" component={AdapterIndex}></Route>
            <Route exact path="/agency/old" component={AgencyOldIndex}></Route>
            <Route exact path="/agency" component={AgencyIndex}></Route>
            <Route exact path="/unknown1"></Route>
        </App>
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
