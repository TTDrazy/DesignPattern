import IDirector from "./interface/IDirector";
import IBuilder from './interface/IBuilder';
/*
 * @Author: Drazy
 * @Date: 2021-09-02 16:06:57
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-03 11:45:45
 * @Description: Person 的实现
 */
export default class PersonDirector implements IDirector {
    personBuilder: IBuilder;
    constructor(_personBuilder: IBuilder) {
        this.personBuilder = _personBuilder;
    }
    combination(): void {
        console.log("我是一个人，我有");
        this.personBuilder.hasHead();
        this.personBuilder.hasHand();
        this.personBuilder.hasBody();
        this.personBuilder.hasFoot();
        console.log("-------------------------------------");
    }
}
