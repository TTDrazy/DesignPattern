/*
 * @Author: Drazy
 * @Date: 2021-10-08 15:09:08
 * @LastEditors: Drazy
 * @LastEditTime: 2021-10-12 09:12:22
 */
import * as React from 'react';
import Work from './new/Work';

export interface IStatusIndexProps {
}

export default class StatusIndex extends React.Component<IStatusIndexProps> {
  constructor(props: IStatusIndexProps) {
    super(props);
    // 旧版
    // const drazy = new Programmer('Drazy')
    // Programmer.currentTime = 9.5
    // drazy.writeProgram()
    // Programmer.currentTime = 12.5
    // drazy.writeProgram()
    // Programmer.currentTime = 17
    // drazy.writeProgram()
    // Programmer.currentTime = 20
    // drazy.writeProgram()
    // Programmer.currentTime = 3
    // drazy.writeProgram()

    // 状态模式
    const emergencyProjects = new Work()
    emergencyProjects.currentTime = 9
    emergencyProjects.programming()
    emergencyProjects.currentTime = 10
    emergencyProjects.programming()
    emergencyProjects.currentTime = 12.5
    emergencyProjects.programming()
    emergencyProjects.currentTime = 13
    emergencyProjects.programming()
    emergencyProjects.currentTime = 14
    emergencyProjects.programming()
    emergencyProjects.currentTime = 18.5
    emergencyProjects.programming()

    emergencyProjects.isFinished = true
    // emergencyProjects.isFinished = false

    emergencyProjects.currentTime = 19.5
    emergencyProjects.programming()
    emergencyProjects.currentTime = 22.5
    emergencyProjects.programming()
  }
  public render() {
    return (
      <div>
        <h2>打工人不同时段工作状态案例</h2>
      </div>
    );
  }
}
