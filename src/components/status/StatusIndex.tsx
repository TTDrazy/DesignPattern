/*
 * @Author: Drazy
 * @Date: 2021-10-08 15:09:08
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-08 17:16:17
 */
import * as React from 'react';
import Programmer from './Programmer';

export interface IStatusIndexProps {
}

export default class StatusIndex extends React.Component<IStatusIndexProps> {
  constructor(props: IStatusIndexProps) {
    super(props);
    const drazy = new Programmer('Drazy')
    Programmer.currentTime = 9.5
    drazy.writeProgram()
    Programmer.currentTime = 12.5
    drazy.writeProgram()
    Programmer.currentTime = 17
    drazy.writeProgram()
    Programmer.currentTime = 20
    drazy.writeProgram()
    Programmer.currentTime = 3
    drazy.writeProgram()
  }
  public render() {
    return (
      <div>
        <h2>打工人不同时段工作案例</h2>
      </div>
    );
  }
}
