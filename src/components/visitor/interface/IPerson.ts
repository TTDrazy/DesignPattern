import IAction from "./IAction";

/*
 * @Author: Drazy
 * @Date: 2022-01-19 16:08:22
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 17:08:23
 */
export default interface IPerson {
  // 接受 。 它是用来获得“状态”对象的
  accept(visitor: IAction): void
}
