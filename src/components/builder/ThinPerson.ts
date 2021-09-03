import ABSPersonBuilder from "./abstract/ABSPersonBuilder";
import IPerson from "./interface/IBuilder";
/*
 * @Author: Drazy
 * @Date: 2021-09-03 11:21:40
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-03 11:29:41
 * @Description: Thin Person
 */
export default class ThinPerson extends ABSPersonBuilder implements IPerson {
    hasHead(): void {
        console.log("一个小小的脑袋");
    }
    hasHand(): void {
        console.log("一双没有肉的手");
    }
    hasBody(): void {
        console.log(`一个清瘦的身体`);
    }
    hasFoot(): void {
        console.log("一双细细的脚");
    }
}
