import ABSAction from './interface/ABSAction'
import Man from './Man'
import Woman from './Woman'
/*
 * @Author: Drazy
 * @Date: 2022-01-19 16:59:31
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 17:06:19
 */
export default class Success extends ABSAction {
  static actionName: string = '成功'

  getManConclusion(concreteElement: Man): void {
    console.log(
      `${concreteElement.personName}${Success.actionName}时，背后多半有一个伟大的女人。`
    )
  }
  getWomanConclusion(concreteElement: Woman): void {
    console.log(
      `${concreteElement.personName}${Success.actionName}时，背后多半有不成功的男人。`
    )
  }
}
