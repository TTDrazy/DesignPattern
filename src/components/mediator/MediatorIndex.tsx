/*
 * @Author: Drazy
 * @Date: 2021-11-08 17:46:38
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-08 17:48:46
 */
import * as React from 'react';

export interface IMediatorIndexProps {
}

export default class MediatorIndex extends React.Component<IMediatorIndexProps> {
  constructor(props: IMediatorIndexProps) {
    super(props);
    console.log('------------ 中介者模式 ------------')
  }
  public render() {
    return (
      <div>
        <h2>联合国对话案例</h2>
        <h3>美国与伊拉克之间的对话都通过联合国安理会作为中介来完成</h3>
      </div>
    );
  }
}
