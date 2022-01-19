import ABSPerson from './interface/ABSPerson'
import IAction from './interface/IAction'
/*
 * @Author: Drazy
 * @Date: 2022-01-19 16:31:01
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 17:27:16
 */
export default class Man extends ABSPerson {
  personName = '男人'

  accept(visitor: IAction): void {
    visitor.getManConclusion(this)
  }
}
