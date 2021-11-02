import IAggregate from './interface/IAggregate'
import Iiterator from './interface/Iiterator'
import Iterator from './Iterator'
/*
 * @Author: Drazy
 * @Date: 2021-11-01 16:43:14
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-01 19:51:47
 */
export default class Aggregate implements IAggregate {
  // 声明一个 IList 的泛型变量，用于存放集合对象
  private IList: Array<object> = []

  createIterator(): Iiterator {
    return new Iterator(this)
  }
  // 返回集合总数
  Count(): number {
    return this.IList.length
  }
  // 声明一个索引器
  addItem(index: number, item: any) {
    this.IList[index] = item
  }

  getItmesByIndex(index: number) {
    return this.IList[index]
  }
}
