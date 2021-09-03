import IPerson from "../interface/IBuilder";
/*
 * @Author: Drazy
 * @Date: 2021-09-03 10:36:45
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-03 11:29:27
 * @Description: ABSPerson  Builder
 */
export default abstract class ABSPersonBuilder implements IPerson {
    hasHead(): void {
        console.log("一个脑袋");
    }
    hasHand(): void {
        console.log("一双手");
    }
    hasBody(): void {
        console.log("一个身体");
    }
    hasFoot(): void {
        console.log("一双脚");
    }
}
