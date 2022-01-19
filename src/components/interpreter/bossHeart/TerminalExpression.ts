import IAbstractExpression from '../interface/IAbstractExpression'
import IContext from '../interface/IContext'
/*
 * @Author: Drazy
 * @Date: 2022-01-04 18:54:35
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-04 18:55:23
 */
/**
 * 终结符表达式
 */
export default class TerminalExpression implements IAbstractExpression {
  interpreter(context: IContext): void {
    console.log('终端解释器')
  }
}
