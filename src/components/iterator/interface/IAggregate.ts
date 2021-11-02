import Iiterator from './Iiterator'

/*
 * @Author: Drazy
 * @Date: 2021-10-13 17:51:55
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-01 16:44:18
 */
export default interface IAggregate {
  // 创建迭代器
  createIterator(): Iiterator
}
