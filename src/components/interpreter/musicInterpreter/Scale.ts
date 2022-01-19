import ABSAbstractExpression from './ABSAbstractExpression'

/*
 * @Author: Drazy
 * @Date: 2022-01-19 10:14:43
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 11:22:32
 */
export default class Scale extends ABSAbstractExpression {
  public Excute(key: string, value: number): void {
    let scale = ''
    switch (value) {
      case 1:
        scale = '低音'
        break
      case 2:
        scale = '中音'
        break
      case 3:
        scale = '高音'
        break
    }
    console.log(`%c${scale}`, 'color:green;')
  }
}
