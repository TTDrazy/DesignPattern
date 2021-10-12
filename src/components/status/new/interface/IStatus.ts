import IWork from './IWork'
/*
 * @Author: Drazy
 * @Date: 2021-10-11 13:58:39
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-11 14:04:11
 */
export default interface IStatus {
  // 写程序
  programming(work: IWork): void
}
