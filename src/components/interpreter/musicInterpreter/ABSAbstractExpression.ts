import IAbstractExpression from '../interface/IAbstractExpression'
import IContext from '../interface/IContext'

/*
 * @Author: Drazy
 * @Date: 2022-01-06 15:01:57
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 11:13:44
 */

export default abstract class ABSAbstractExpression
  implements IAbstractExpression
{
  interpreter(context: IContext): void {
    if (context.getInput().length !== 0) {
      // 为了演奏第一条命令，获得命令字母和其参数值
      const playKey = context.getInput().substring(0, 1)
      context.setInput(context.getInput().substring(2))

      const TextEmptyIndex = context.getInput().indexOf(' ')
      const playValue: number = Number(
        context.getInput().substring(0, TextEmptyIndex)
      )
      context.setInput(context.getInput().substring(TextEmptyIndex + 1))

      this.Excute(playKey, playValue)
    }
  }

  // 执行
  abstract Excute(key: string, value: number): void
}
