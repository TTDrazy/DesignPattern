import ABSAbstractExpression from './ABSAbstractExpression'
/*
 * @Author: Drazy
 * @Date: 2022-01-19 11:15:06
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 11:22:09
 */

/**
 * 音速类
 */
export default class Speed extends ABSAbstractExpression {
  Excute(key: string, value: number): void {
    let speed = ''
    if (value < 500) {
      speed = '快速'
    } else if (value >= 1000) {
      speed = '慢速'
    } else {
      speed = '中速'
    }
    console.log(`%c${speed}`, 'color:orange;')
  }
}
