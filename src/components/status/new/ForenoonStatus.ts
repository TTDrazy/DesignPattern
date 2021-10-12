import IStatus from './interface/IStatus'
import ABSStatus from './ABSSatus'
import IWork from './interface/IWork'
import NoonStatus from './NoonStatus';
/*
 * @Author: Drazy
 * @Date: 2021-10-11 14:08:30
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-11 16:42:01
 */
export default class ForenoonStatus extends ABSStatus implements IStatus {
  programming(work: IWork) {
    if (work.currentTime <= 12) {
      console.log(`当前时间为${work.currentTime}，上午工作，精神百倍~`)
    }else{
      // 设置下一个状态
      work.setWorkStatus(new NoonStatus())
      // 调用
      work.programming()
    }
  }
}
