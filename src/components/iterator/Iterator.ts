import Iiterator from './interface/Iiterator'
import Aggregate from './Aggregate'
/*
 * @Author: Drazy
 * @Date: 2021-10-13 17:55:14
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-02 09:34:28
 * @Content: ConcreteIterator 具体迭代器类
 */
export default class Iterator implements Iiterator {
  // 集合
  private aggregate: Aggregate
  // 下标
  private current: number

  constructor(concreteAggregate: Aggregate) {
    this.aggregate = concreteAggregate
    this.current = 0
  }

  first(): object {
    return this.aggregate.getItmesByIndex(0)
  }
  next(): object | undefined {
    let obj
    this.current++
    if (this.current < this.aggregate.Count()) {
      obj = this.aggregate.getItmesByIndex(this.current)
    }
    return obj
  }
  isDone(): boolean {
    return this.current >= this.aggregate.Count() ? true : false
  }
  currentItem(): object {
    return this.aggregate.getItmesByIndex(this.current)
  }
}
