import IStatus from './interface/IStatus'
import ABSStatus from './ABSSatus'
import IWork from './interface/IWork'
import EveningStatus from './EveningStatus';
/*
 * @Author: Drazy
 * @Date: 2021-10-11 14:08:30
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-11 19:43:22
 */
export default class AfternoonStatus extends ABSStatus implements IStatus {
  programming(work: IWork) {
    if (work.currentTime <= 18) {
      console.log(`当前时间为${work.currentTime}，下午状态还不错，继续努力工作~`)
    }else{
      // 设置下一个状态
      work.setWorkStatus(new EveningStatus())
      // 调用
      work.programming()
    }
  }
}
