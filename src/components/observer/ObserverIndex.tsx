import * as React from "react";
import Subject from "./oldexample/Subject";
import Reader from "./oldexample/Readers";
import NewExampleIndex from "./newexample/NewExampleIndex";

export interface IObserverIndexProps {}

export default class ObserverIndex extends React.Component<IObserverIndexProps> {
    componentDidMount() {
        //观察者模式又称 发布-订阅 模式
        let subject = new Subject();
        //新增订阅者
        // let user1 = new Reader(subject, "小明");
        let user2 = new Reader(subject, "小花");
        // let user3 = new Reader(subject, "小宝");
        console.log("----------------------");
        //发布者状态改变，通知每位订阅者
        subject.notify("作者更新了第100章");
        //移除指定订阅者
        subject.removeSubscribe(user2);
        //发布者状态再次改变，通知每位订阅者
        subject.notify("作者更新了第105章");
    }
    public render() {
        return (
            <div>
                <div>
                    <h2>1. 订阅漫画更新案例</h2>
                    <NewExampleIndex></NewExampleIndex>
                </div>
            </div>
        );
    }
}
