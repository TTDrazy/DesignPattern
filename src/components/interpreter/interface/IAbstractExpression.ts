import IContext from './IContext'
/*
 * @Author: Drazy
 * @Date: 2022-01-04 18:48:43
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-04 18:53:20
 */
/**
 * 抽象表达式的接口
 * @description 声明一个抽象的解释操作，这个接口为抽象语法树中所有的节点所共享
 */
export default interface IAbstractExpression {
  interpreter(context: IContext): void
}
