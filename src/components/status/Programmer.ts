import IProgrammer from './interface/IProgrammer'
/*
 * @Author: Drazy
 * @Date: 2021-10-08 15:24:48
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-08 16:46:28
 */
export default class Programmer implements IProgrammer {
  name: string
  // 当前时间 -> 内在状态
  static currentTime: number
  constructor(name: string) {
    this.name = name
  }
  writeProgram(): void {
    if (Programmer.currentTime > 9 && Programmer.currentTime <= 12) {
      console.log(
        `现在是早晨 ${Programmer.currentTime} 点，${this.name} 正在高效地编码！`
      )
    } else if (Programmer.currentTime > 12 && Programmer.currentTime <= 15) {
      console.log(
        `现在是中午 ${Programmer.currentTime} 点，${this.name} 困困，正在迷迷糊糊地编码！`
      )
    } else if (Programmer.currentTime > 15 && Programmer.currentTime <= 18) {
      console.log(
        `现在是下午 ${Programmer.currentTime} 点，${this.name} 清醒过来了，正在高效地编码！`
      )
    } else if (Programmer.currentTime > 18 && Programmer.currentTime <= 24) {
      console.log(
        `现在是晚上 ${Programmer.currentTime} 点，${this.name} 无奈地加班，正在晕晕乎乎地编码！`
      )
    } else {
      console.log(
        `现在是凌晨 ${Programmer.currentTime} 点，${this.name} 通宵加班，正在几乎睡着地编码！`
      )
    }
  }
}
