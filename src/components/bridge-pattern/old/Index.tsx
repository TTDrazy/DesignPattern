import * as React from "react";
import IOSphone from "./IOSPhone";
import Android from "./Android";
import Game from "./Game";
import Application from "./Application";

export interface IIndexProps {}

export default class Index extends React.Component<IIndexProps> {
    componentDidMount() {
        //创建手机
        let iphoneX = new IOSphone("iphoneX");
        let meta30 = new Android("meta30");
        let iphone6 = new IOSphone("iphone6");

        //创建游戏
        let honourOfKing = new Game("王者荣耀");
        let QQMusic = new Application("QQ音乐");

        //手机安装软件
        iphoneX.addSoftware(honourOfKing);
        iphoneX.addSoftware(QQMusic);
        meta30.addSoftware(honourOfKing);
        meta30.addSoftware(QQMusic);
        iphone6.addSoftware(honourOfKing);
        iphone6.addSoftware(QQMusic);

    }
    public render() {
        return (
            <div>
                <h2>旧版 手机安装软件案例</h2>
                <ul>
                    <li>手机有 iphonex meta30 iphone6</li>
                    <li>游戏有 王者荣耀（honourOfKing） </li>
                    <li>软件有 QQ音乐</li>
                    <li>每个手机都要装软件</li>
                </ul>
            </div>
        );
    }
}
