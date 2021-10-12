import IStatus from './interface/IStatus'
import IWork from './interface/IWork'
import ForenoonStatus from './ForenoonStatus'

/*
 * @Author: Drazy
 * @Date: 2021-10-11 13:50:31
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-12 15:39:18
 */
export default class Work implements IWork {
  private currentStatus: IStatus = new ForenoonStatus()

  currentTime: number = 0
  isFinished: boolean = false

  setWorkStatus(status: IStatus): void {
    this.currentStatus = status
  }
  programming(): void {
    this.currentStatus.programming(this)
  }
}
