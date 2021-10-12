import IStatus from './interface/IStatus'
import IWork from './interface/IWork'
/*
 * @Author: Drazy
 * @Date: 2021-10-11 13:50:47
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-11 14:07:26
 */
export default abstract class ABSStatus implements IStatus {
  programming(work: IWork): void {}
}
