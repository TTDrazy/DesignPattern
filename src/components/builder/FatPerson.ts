import ABSPersonBuilder from "./abstract/ABSPersonBuilder";
import IPerson from "./interface/IBuilder";

/*
 * @Author: Drazy
 * @Date: 2021-09-03 11:23:54
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-03 11:29:51
 * @Description: Fat Person
 */
export default class FatPerson extends ABSPersonBuilder implements IPerson {
    hasHead(): void {
        console.log("一个圆圆的脑袋");
    }
    hasHand(): void {
        console.log("一双肉肉的手");
    }
    hasBody(): void {
        console.log("一个圆滚滚的身体");
    }
    hasFoot(): void {
        console.log("一双胖嘟嘟的脚");
    }
}
