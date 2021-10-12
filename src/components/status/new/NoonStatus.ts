import IStatus from './interface/IStatus'
import ABSStatus from './ABSSatus'
import IWork from './interface/IWork'
import AfternoonStatus from './AfternoonStatus';
/*
 * @Author: Drazy
 * @Date: 2021-10-11 14:08:30
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-11 20:02:25
 */
export default class NoonStatus extends ABSStatus implements IStatus {
  programming(work: IWork) {
    if (work.currentTime < 14) {
      console.log(`当前时间为${work.currentTime}，去吃午饭啦，犯困、午休~`)
    } else {
      // 设置下一个状态
      work.setWorkStatus(new AfternoonStatus())
      // 调用
      work.programming()
    }
  }
}
