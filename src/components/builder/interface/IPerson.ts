/*
 * @Author: Drazy
 * @Date: 2021-09-02 16:07:11
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-02 17:51:12
 * @Description: IPerson
 */

export default interface IPerson {
    // 头
    head: string;
    // 手
    hand: string;
    // 身体
    body: string;
    // 脚
    foot: string;
    // 画出这个人
    draw(): void;
}
