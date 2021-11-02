/*
 * @Author: Drazy
 * @Date: 2021-10-12 16:02:51
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-02 09:39:56
 */
import * as React from 'react';
import Aggregate from './Aggregate';
import Iterator from './Iterator';
import ReduceIterator from './ReduceIterator';

export interface IIteratorIndexProps {
}

export default class IteratorIndex extends React.Component<IIteratorIndexProps> {
  constructor(props: IIteratorIndexProps) {
    super(props)
    const aggregate = new Aggregate()
    aggregate.addItem(0, '大鸟')
    aggregate.addItem(1, '小菜')
    aggregate.addItem(2, '行李')
    aggregate.addItem(3, '老外')
    aggregate.addItem(4, '公交系统内部员工')
    aggregate.addItem(5, '小偷')

    // 正向迭代器
    console.log('***正向迭代器***')
    const iterator = new Iterator(aggregate)
    const item = iterator.first()
    console.log(`${item}是第一个上车的人~`)
    while (!iterator.isDone()) {
      console.log(`${iterator.currentItem()}，请买车票！`);
      iterator.next()
    }

    console.log('--------------------------')

    // 反向迭代器
    console.log('***反向迭代器***')
    const reduceIterator = new ReduceIterator(aggregate)
    const item2 = reduceIterator.first()
    console.log(`${item2}是第最后一个上车的人~`)
    while (!reduceIterator.isDone()) {
      console.log(`${reduceIterator.currentItem()}，请买车票！`);
      reduceIterator.next()
    }

  }
  public render() {
    return (
      <div>
        <h2>迭代器模式</h2>
        <hr />
        <h3>买票案例</h3>
      </div>
    );
  }
}
