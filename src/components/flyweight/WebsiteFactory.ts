import Website from './Website'
import IWebsite from './interface/IWebsite'
import IWebsiteFactory from './interface/IWebsiteFactory'

/*
 * @Author: Drazy
 * @Date: 2021-12-27 10:27:58
 * @LastEditors: Drazy
 * @LastEditTime: 2021-12-27 14:13:12
 */
export default class WebsiteFactory implements IWebsiteFactory {
  private flyweights = new Map()

  // 获得网站分类
  getWebsiteCategory(key: string): IWebsite {
    // 判断 flyweights 中是否存在 名字为 key 的键值对
    // 如果不存在，则返回它的实例化
    // 存在则直接返回已存入的值
    if (!this.flyweights.has(key)) {
      this.flyweights.set(key, new Website(key))
    }
    return this.flyweights.get(key)
  }

  // 获得网站分类总数
  getWebsiteCount() {
    return this.flyweights.size
  }
}
