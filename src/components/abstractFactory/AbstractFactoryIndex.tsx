import * as React from 'react';
import LogiFactory from './LogiFactory';
import HpFactory from './HpFactory';

export interface IAbstractFactoryIndexProps {
}

export default class AbstractFactoryIndex extends React.Component<IAbstractFactoryIndexProps> {
  componentDidMount(){
    let logiFactory = new LogiFactory();
    let hpFactory = new HpFactory();

    let logiMouse = logiFactory.productMouse();
    let logiKeyBoard =  logiFactory.productKeyBoard();
    let hpMouse = hpFactory.productMouse();
    let hpKeyBoard =  hpFactory.productKeyBoard();

    logiMouse.sayHi();
    hpMouse.sayHi();
    logiKeyBoard.sayHi();
    hpKeyBoard.sayHi();
  }
  public render() {
    return (
      <div>
        <h2>生产不同厂家不同硬件案例</h2>
      </div>
    );
  }
}
