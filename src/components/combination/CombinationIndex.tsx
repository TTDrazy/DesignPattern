/*
 * @Author: Drazy
 * @Date: 2021-09-03 13:41:45
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-03 13:55:43
 */
import * as React from 'react';

export interface ICombinationIndexProps {
}

export default class CombinationIndex extends React.Component<ICombinationIndexProps> {
  constructor(props: ICombinationIndexProps) {
    super(props)
  }
  public render() {
    return (
      <div>
        <h2>组合模式</h2>
        <hr></hr>
        <h2>分部门 案例</h2>
      </div>
    );
  }
}
