import IWebsite from './IWebsite'

/*
 * @Author: Drazy
 * @Date: 2021-12-27 14:12:11
 * @LastEditors: Drazy
 * @LastEditTime: 2021-12-27 14:15:09
 */
export default interface IWebsiteFactory {
  /**
   * 获得网站分类
   */
  getWebsiteCategory(key: string): IWebsite
  /**
   * 获得网站总分类数
   */
  getWebsiteCount(): number
}
