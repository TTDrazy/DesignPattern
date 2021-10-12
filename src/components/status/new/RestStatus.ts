import IStatus from './interface/IStatus'
import ABSStatus from './ABSSatus'
import IWork from './interface/IWork'
/*
 * @Author: Drazy
 * @Date: 2021-10-11 14:08:30
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-11 19:46:00
 */
export default class RestStatus extends ABSStatus implements IStatus {
  programming(work: IWork) {
    console.log(`当前时间为${work.currentTime}，下班回家喽~`)
  }
}
