import ABSAction from './interface/ABSAction'
import Man from './Man'
import Woman from './Woman'
/*
 * @Author: Drazy
 * @Date: 2022-01-19 17:10:32
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 17:11:37
 */
export default class FallInLove extends ABSAction {
  static actionName: string = '恋爱'

  getManConclusion(concreteElement: Man): void {
    console.log(
      `${concreteElement.personName}${FallInLove.actionName}时，凡事不懂也要装懂。`
    )
  }
  getWomanConclusion(concreteElement: Woman): void {
    console.log(
      `${concreteElement.personName}${FallInLove.actionName}时，遇事懂也装作不懂。`
    )
  }
}
