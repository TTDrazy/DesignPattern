import ABSAction from './interface/ABSAction'
import Man from './Man'
import Woman from './Woman'
/*
 * @Author: Drazy
 * @Date: 2022-01-19 17:22:50
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 17:25:10
 */
export default class Marriage extends ABSAction {
  static actionName: string = '结婚'
  getManConclusion(concreteElement: Man): void {
    console.log(
      `${concreteElement.personName}${Marriage.actionName}时，感慨道：恋爱游戏终结时，“有妻徒刑”遥无期。`
    )
  }
  getWomanConclusion(concreteElement: Woman): void {
    console.log(
      `${concreteElement.personName}${Marriage.actionName}时，欣慰曰：爱情长跑路漫漫，婚姻保险保平安。`
    )
  }
}
