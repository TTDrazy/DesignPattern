/*
 * @Author: Drazy
 * @Date: 2022-01-04 18:49:35
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-06 14:57:20
 */
export default interface IContext {
  getInput(): string
  setInput(value: string): void
}
