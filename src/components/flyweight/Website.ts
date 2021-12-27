import IUser from './interface/IUser'
import IWebsite from './interface/IWebsite'

/*
 * @Author: Drazy
 * @Date: 2021-12-27 10:25:13
 * @LastEditors: Drazy
 * @LastEditTime: 2021-12-27 15:00:24
 */
export default class Website implements IWebsite {
  private name: string = ''

  constructor(name: string) {
    this.name = name
  }

  use(user: IUser): void {
    console.log(`网站分类：${this.name}。用户名：${user.getName()}`)
  }
}
