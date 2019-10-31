import { Observer } from "./Observer";

//将所有观察者对象的引用保存在一个数组里（观察者不限数量）
//提供可以增加和删除观察者对象的方法
export default class Subject {
    //订阅者队列
    private observers: Observer[] = [];
    //订阅状态
    private state: string | undefined;

    //新增订阅者
    addSubscribe(observer: Observer) {
        this.observers.push(observer);
    }

    //取消订阅
    //如果有订阅者，则从订阅者队列清除；如果没有，则清空订阅者队列
    removeSubscribe(observer?: Observer) {
        if (!!observer) {
            this.observers = this.observers.filter(item => {
                return item !== observer;
            });
        } else {
            this.observers = [];
        }
    }

    //改变状态，并通知订阅者
    notify(state: string) {
        //改变状态
        this.state = state;
        //发布消息
        this.publish();
    }

    //获取状态
    getState(): string | undefined {
        return this.state;
    }

    //发布消息
    publish() {
        this.observers.map(item => {
            //调用每个订阅者的更新方法
            item.update();
        });
    }
}
