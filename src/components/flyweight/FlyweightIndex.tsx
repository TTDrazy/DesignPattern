/*
 * @Author: Drazy
 * @Date: 2021-11-12 13:57:30
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-12 13:58:37
 */
import * as React from 'react';

export interface IFlyweightIndexProps {
}

export default class FlyweightIndex extends React.Component<IFlyweightIndexProps> {
  constructor(props: IFlyweightIndexProps) {
    super(props);
    console.log(`--------- 享元模式 ---------`)
  }
  public render() {
    return (
      <div>
        <h2>享元模式</h2>
        <h3>网站共享代码案例</h3>
      </div>
    );
  }
}
