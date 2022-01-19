import IAction from './IAction'
import IPerson from './IPerson'
/*
 * @Author: Drazy
 * @Date: 2022-01-19 16:12:55
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 17:08:13
 */
export default abstract class ABSPerson implements IPerson {
  personName: string = ''

  abstract accept(visitor: IAction): void
}
