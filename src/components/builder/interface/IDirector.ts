import IBuilder from "./IBuilder";

/*
 * @Author: Drazy
 * @Date: 2021-09-03 11:30:37
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-03 11:35:00
 * @Description: IBuilder
 */
export default interface IDirector {
    // person 的建造者实例
    personBuilder: IBuilder;
    // 组合 person
    combination(): void;
}
