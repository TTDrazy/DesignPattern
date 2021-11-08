/*
 * @Author: Drazy
 * @Date: 2021-11-08 18:37:55
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-08 18:37:55
 */
import ABSCountry from './ABSCountry'

export default class Iraq extends ABSCountry {
  // 声明信息
  declareMessage(message: string) {
    this.mediator.declareMessage(message, this)
  }
  getMessage(message: string) {
    console.log(`伊拉克获取到对方信息：${message}`)
  }
}
