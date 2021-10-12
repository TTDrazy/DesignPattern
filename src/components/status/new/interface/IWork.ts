import IStatus from './IStatus'
/*
 * @Author: Drazy
 * @Date: 2021-10-11 13:58:33
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-11 16:42:40
 */
export default interface IWork {
  // 时间
  currentTime: number
  // 任务是否完成
  isFinished: boolean
  // 设置工作状态
  setWorkStatus(status: IStatus): void
  // 写程序
  programming(): void
}
