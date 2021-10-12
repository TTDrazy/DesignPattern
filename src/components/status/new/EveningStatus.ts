import IStatus from './interface/IStatus'
import ABSStatus from './ABSSatus'
import IWork from './interface/IWork'
import RestStatus from './RestStatus'
import SleepingStatus from './SleepingStatus'
/*
 * @Author: Drazy
 * @Date: 2021-10-11 14:08:30
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-12 09:08:49
 */
export default class EveningStatus extends ABSStatus implements IStatus {
  programming(work: IWork) {
    if (work.isFinished) {
      work.setWorkStatus(new RestStatus())
      work.programming()
    } else if (work.currentTime <= 21) {
      console.log(`当前时间为${work.currentTime}，在加班了，好累好累啊~`)
    } else {
      work.setWorkStatus(new SleepingStatus())
      work.programming()
    }
  }
}
