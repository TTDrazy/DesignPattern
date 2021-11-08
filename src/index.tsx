/*
 * @Author: Drazy
 * @Date: 2021-09-02 14:50:29
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-08 17:50:14
 */
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
import AgencyIndex from "./components/agency/AgencyIndex";
import TemplateIndex from "./components/template/TemplateIndex";
import FacadeIndex from "./components/facade/FacadeIndex";
import { RouterEnum } from "./router/RouterEnum";
import BuilderIndex from "./components/builder/BuilderIndex";
import CombinationIndex from './components/combination/CombinationIndex'
import StatusIndex from './components/status/StatusIndex';
import IteratorIndex from './components/iterator/IteratorIndex';
import MediatorIndex from "./components/mediator/MediatorIndex";

ReactDOM.render(
    <Router>
        <App>
            <Route exact path="/"></Route>
            <Route exact path={RouterEnum.simpleFactory} component={SimpleFactory}></Route>
            <Route exact path={RouterEnum.strategy + "/old"} component={Goods}></Route>
            <Route exact path={RouterEnum.strategy} component={StrategyIndex}></Route>
            <Route exact path={RouterEnum.prototype} component={PrototypeIndex}></Route>
            <Route exact path={RouterEnum.decorator + "/old"} component={WearClothesIndex}></Route>
            <Route exact path={RouterEnum.decorator} component={WearClothesDecorate}></Route>
            <Route exact path={RouterEnum.singleton} component={SingletonIndex}></Route>
            <Route exact path={RouterEnum.observer} component={ObserverIndex}></Route>
            <Route exact path={RouterEnum.chainOfResponsibility + "/old"} component={OldChainOfResponsibilityIndex}></Route>
            <Route exact path={RouterEnum.chainOfResponsibility} component={ChainOfResponsibility}></Route>
            <Route exact path={RouterEnum.bridge} component={BridgePattermIndex}></Route>
            <Route exact path={RouterEnum.command + "/old"} component={RestaurantIndex}></Route>
            <Route exact path={RouterEnum.command} component={CommandIndex}></Route>
            <Route exact path={RouterEnum.memento + "/old"} component={GameIndex}></Route>
            <Route exact path={RouterEnum.memento} component={MenmentoIndex}></Route>
            <Route exact path={RouterEnum.factory} component={FactoryIndex}></Route>
            <Route exact path={RouterEnum.abstractFactory} component={AbstractFactoryIndex}></Route>
            <Route exact path={RouterEnum.adapater} component={AdapterIndex}></Route>
            <Route exact path={RouterEnum.agency} component={AgencyIndex}></Route>
            <Route exact path={RouterEnum.template} component={TemplateIndex}></Route>
            <Route exact path={RouterEnum.facade} component={FacadeIndex}></Route>
            <Route exact path={RouterEnum.builder} component={BuilderIndex}></Route>
            <Route exact path={RouterEnum.combination} component={CombinationIndex}></Route>
            <Route exact path={RouterEnum.status} component={StatusIndex}></Route>
            <Route exact path={RouterEnum.iterator} component={IteratorIndex}></Route>
            <Route exact path={RouterEnum.mediator} component={MediatorIndex}></Route>
            <Route exact path={RouterEnum.unknown}></Route>
        </App>
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
