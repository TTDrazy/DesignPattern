import IContext from '../interface/IContext'
/*
 * @Author: Drazy
 * @Date: 2022-01-06 14:53:04
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 10:25:12
 */
export default class PlayContext implements IContext {
  /**
   * 演奏文本
   */
  private text: string = ''

  getInput(): string {
    return this.text
  }
  setInput(value: string): void {
    this.text = value
  }
}
