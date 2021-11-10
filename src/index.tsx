/*
 * @Author: Drazy
 * @Date: 2021-09-02 14:50:29
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-10 10:58:09
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import routerList, { IRouterList } from "./router/RouterList";

ReactDOM.render(
    <Router>
        <App>
            {routerList.map((routerItem: IRouterList, index: number) => {
                return <Route key={index} exact={routerItem.exact} path={routerItem.path} component={routerItem.component}></Route>
            })}
        </App>
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
