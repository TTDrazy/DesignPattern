import Man from '../Man'
import Woman from '../Woman'
import IAction from './IAction'
/*
 * @Author: Drazy
 * @Date: 2022-01-19 17:02:08
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 17:05:45
 */
export default abstract class ABSAction implements IAction {
  static actionName = ''
  abstract getManConclusion(concreteElement: Man): void

  abstract getWomanConclusion(concreteElement: Woman): void
}
