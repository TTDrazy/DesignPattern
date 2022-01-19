import ABSPerson from './interface/ABSPerson'
import IAction from './interface/IAction'
/*
 * @Author: Drazy
 * @Date: 2022-01-19 16:36:47
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 17:28:35
 */
export default class Woman extends ABSPerson {
  personName = '女人'

  accept(visitor: IAction): void {
    visitor.getWomanConclusion(this)
  }
}
