import ABSAbstractExpression from './ABSAbstractExpression'

/*
 * @Author: Drazy
 * @Date: 2022-01-19 09:49:40
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 11:14:11
 */
/**
 * 音符类
 */
export default class Note extends ABSAbstractExpression {
  public Excute(key: string, value: number): void {
    let note = ''
    switch (key) {
      case 'C':
        note = '1'
        break
      case 'D':
        note = '2'
        break
      case 'E':
        note = '3'
        break
      case 'F':
        note = '4'
        break
      case 'G':
        note = '5'
        break
      case 'A':
        note = '6'
        break
      case 'B':
        note = '7'
        break
    }
    console.log(note)
  }
}
