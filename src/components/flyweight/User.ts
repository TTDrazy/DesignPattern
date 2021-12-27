import IUser from './interface/IUser'

/*
 * @Author: Drazy
 * @Date: 2021-12-27 14:15:50
 * @LastEditors: Drazy
 * @LastEditTime: 2021-12-27 15:00:46
 */
export default class User implements IUser {
  private name: string
  constructor(name: string) {
    this.name = name
  }
  getName() {
    return this.name
  }
}
