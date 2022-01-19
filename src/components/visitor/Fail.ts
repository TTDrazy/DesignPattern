import ABSAction from './interface/ABSAction'
import Man from './Man'
import Woman from './Woman'
/*
 * @Author: Drazy
 * @Date: 2022-01-19 17:08:50
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 17:09:54
 */
export default class Fail extends ABSAction {
  static actionName: string = '失败'

  getManConclusion(concreteElement: Man): void {
    console.log(
      `${concreteElement.personName}${Fail.actionName}时，闷头喝酒，谁也不用劝。`
    )
  }
  getWomanConclusion(concreteElement: Woman): void {
    console.log(
      `${concreteElement.personName}${Fail.actionName}，眼泪汪汪，谁也劝不了。`
    )
  }
}
