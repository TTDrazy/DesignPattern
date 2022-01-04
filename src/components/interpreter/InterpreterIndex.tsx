/*
 * @Author: Drazy
 * @Date: 2022-01-04 09:45:32
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-04 09:52:24
 */
import * as React from 'react';

export interface IInterpreterIndexProps {
}

export default class InterpreterIndex extends React.Component<IInterpreterIndexProps> {
  constructor(props: IInterpreterIndexProps) {
    super(props)
    console.log('------------ 解释器模式 ------------')
  }
  public render() {
    return (
      <div>
        <h2>解释器案例</h2>
      </div>
    );
  }
}
