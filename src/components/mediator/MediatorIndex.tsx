/*
 * @Author: Drazy
 * @Date: 2021-11-08 17:46:38
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-08 19:36:21
 */
import * as React from 'react';
import Iraq from './Iraq';
import UnitedNationsSecurityCoumcil from './UnitedNationsSecurityCoumcil';
import USA from './USA';

export interface IMediatorIndexProps {
}

export default class MediatorIndex extends React.Component<IMediatorIndexProps> {
  constructor(props: IMediatorIndexProps) {
    super(props);
    console.log('------------ 中介者模式 ------------')
    const UNSC = new UnitedNationsSecurityCoumcil();

    const USACountry = new USA(UNSC)
    const IraqCountry = new Iraq(UNSC)

    UNSC.setUSACountry(USACountry)
    UNSC.setIraqCountry(IraqCountry)

    USACountry.declareMessage('不允许研究核武器，否则需要发动战争！')
    IraqCountry.declareMessage('我们虽然没有核武器，但也不怕侵略！')
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
