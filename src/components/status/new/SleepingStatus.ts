import IStatus from './interface/IStatus'
import ABSStatus from './ABSSatus'
import IWork from './interface/IWork'
/*
 * @Author: Drazy
 * @Date: 2021-10-11 14:08:30
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-11 20:03:15
 */
export default class SleepingStatus extends ABSStatus implements IStatus {
  programming(work: IWork) {
    console.log(
      `当前时间为${work.currentTime}，不行了不行了，要睡着了，又累又困！`
    )
  }
}
