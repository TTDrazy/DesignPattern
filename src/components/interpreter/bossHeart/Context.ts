import IContext from '../interface/IContext'
/*
 * @Author: Drazy
 * @Date: 2022-01-06 09:37:53
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-06 14:57:31
 */
export default class Context implements IContext {
  private input: string = ''

  getInput(): string {
    return this.input
  }
  setInput(value: string): void {
    this.input = value
  }
}
