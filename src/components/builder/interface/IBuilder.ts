/*
 * @Author: Drazy
 * @Date: 2021-09-02 16:07:11
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-03 11:34:12
 * @Description: IBuilder
 */

export default interface IBuilder {
    // 建造一个头
    hasHead(): void;
    // 建造两只手
    hasHand(): void;
    // 建造一个身体
    hasBody(): void;
    // 建造一双脚
    hasFoot(): void;
}
