import Aggregate from './Aggregate'
import Iiterator from './interface/Iiterator'
/*
 * @Author: Drazy
 * @Date: 2021-11-02 09:32:13
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-02 09:38:06
 * @Content: 递减的迭代器
 */
export default class ReduceIterator implements Iiterator {
  // 集合
  private aggregate: Aggregate
  // 下标
  private current: number

  constructor(concreteAggregate: Aggregate) {
    this.aggregate = concreteAggregate
    this.current = this.aggregate.Count() - 1
  }

  first(): object {
    const LastIndex = this.aggregate.Count() - 1
    return this.aggregate.getItmesByIndex(LastIndex)
  }
  next(): object | undefined {
    let obj
    this.current--
    if (this.current >= 0) {
      obj = this.aggregate.getItmesByIndex(this.current)
    }
    return obj
  }
  isDone(): boolean {
    return this.current < 0 ? true : false
  }
  currentItem(): object {
    return this.aggregate.getItmesByIndex(this.current)
  }
}
