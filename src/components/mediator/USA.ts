/*
 * @Author: Drazy
 * @Date: 2021-11-08 18:31:31
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-08 18:38:23
 */
import ABSCountry from './ABSCountry'

export default class USA extends ABSCountry {
  // 声明信息
  declareMessage(message: string) {
    this.mediator.declareMessage(message, this)
  }
  getMessage(message: string) {
    console.log(`美国获取到对方信息：${message}`)
  }
}
