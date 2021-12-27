import IUser from './IUser'

/*
 * @Author: Drazy
 * @Date: 2021-11-12 15:38:33
 * @LastEditors: Drazy
 * @LastEditTime: 2021-12-27 14:21:23
 */
export default interface IWebsite {
  /**
   * @description 使用网站
   */
  use(user: IUser): void
}
