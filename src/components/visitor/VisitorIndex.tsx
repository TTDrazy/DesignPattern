/*
 * @Author: Drazy
 * @Date: 2022-01-19 15:20:03
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 15:23:09
 */
import * as React from 'react';

export interface IVisitorIndexProps {
}

export default class VisitorIndex extends React.Component<IVisitorIndexProps> {
  constructor(props: IVisitorIndexProps) {
    super(props);

    console.log('%c----------------访问者模式----------------', 'color:red')
  }
  public render() {
    return (
      <div>
        <h2>xx案例</h2>
      </div>
    );
  }
}
