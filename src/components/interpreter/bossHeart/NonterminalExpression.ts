import IAbstractExpression from '../interface/IAbstractExpression'
import IContext from '../interface/IContext'
/*
 * @Author: Drazy
 * @Date: 2022-01-06 09:32:33
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-06 09:36:30
 */
export default class NonterminalExpression implements IAbstractExpression {
  interpreter(context: IContext): void {
    console.log('非终端解释器')
  }
}
