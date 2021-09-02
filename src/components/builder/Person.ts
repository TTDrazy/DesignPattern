import IPerson from "./interface/IPerson";
/*
 * @Author: Drazy
 * @Date: 2021-09-02 16:06:57
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-02 17:53:27
 * @Description: Person 的实现
 */
export default class Person implements IPerson {
    head: string;
    hand: string;
    body: string;
    foot: string;
    constructor() {
        this.head = "一个脑袋";
        this.hand = "一双手";
        this.body = "一个身体";
        this.foot = "一双脚";
    }
    draw(): void {
        console.log(`我是一个人，我有${this.head}、${this.hand}、${this.body}、${this.foot}`);
    }
}
