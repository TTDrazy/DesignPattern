/*
 * @Author: Drazy
 * @Date: 2022-01-19 15:20:03
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 17:25:46
 */
import * as React from 'react';
import Man from './Man';
import Woman from './Woman';
import ObjectStructure from './ObjectStructure';
import Success from './Success';
import Fail from './Fail';
import FallInLove from './FallInLove';
import Marriage from './Marriage';

export interface IVisitorIndexProps {
}

export default class VisitorIndex extends React.Component<IVisitorIndexProps> {
  constructor(props: IVisitorIndexProps) {
    super(props);

    console.log('%c----------------访问者模式----------------', 'color:red')

    const list = new ObjectStructure()

    list.addPerson(new Man())
    list.addPerson(new Woman())

    // 成功状态下
    const successAction = new Success()
    list.showList(successAction)

    // 失败状态下
    const failAction = new Fail()
    list.showList(failAction)

    // 恋爱状态下
    const fallInLoveAction = new FallInLove()
    list.showList(fallInLoveAction)

    // 结婚状态下
    const marriage = new Marriage()
    list.showList(marriage)

  }
  public render() {
    return (
      <div>
        <h2>男人女人语录案例</h2>
      </div>
    );
  }
}
