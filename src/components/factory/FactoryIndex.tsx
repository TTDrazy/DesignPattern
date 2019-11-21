import * as React from 'react';
import LogiFactory from './LogiFactory';
import HpFactory from './HpFactory';

export interface IFactoryIndexProps {
}

export default class FactoryIndex extends React.Component<IFactoryIndexProps> {
  componentDidMount(){
    let logifactory = new LogiFactory();
    let hpFactory = new HpFactory();

    let logiMouse = logifactory.productMouse();
    let hpMouse = hpFactory.productMouse();

    logiMouse.sayHi();
    hpMouse.sayHi();
  }
  public render() {
    return (
      <div>
        <h2>生产不同厂家鼠标案例</h2>
      </div>
    );
  }
}
