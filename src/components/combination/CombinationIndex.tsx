/*
 * @Author: Drazy
 * @Date: 2021-09-03 13:41:45
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-06 17:41:36
 */
import * as React from 'react';
import Company from './Company';
import HRDepartment from './HRDepartment';
import FinancialDepartment from './FinancialDepartment';

export interface ICombinationIndexProps {
}

export default class CombinationIndex extends React.Component<ICombinationIndexProps> {
  setup() {
    const headCompany = new Company('北京总公司')
    headCompany.add(new HRDepartment('总公司人力资源部'));
    headCompany.add(new FinancialDepartment('总公司财务部'));

    const branchCompany = new Company('上海华东区分部')
    branchCompany.add(new HRDepartment('华东分公司人力资源部'));
    branchCompany.add(new FinancialDepartment('华东分公司财务部'))

    const ng_office = new Company('南京办事处')
    ng_office.add(new HRDepartment('南京办事处人力资源部'));
    ng_office.add(new FinancialDepartment('南京办事处财务部'));

    const hz_office = new Company('杭州办事处')
    hz_office.add(new HRDepartment('杭州办事处人力资源部'));
    hz_office.add(new FinancialDepartment('杭州办事处财务部'));

    headCompany.add(branchCompany)
    branchCompany.add(ng_office)
    branchCompany.add(hz_office)

    // console.log(headCompany.list)
    branchCompany.remove(ng_office)
    console.log('--------- 结构图 ---------')
    headCompany.displayStructure(1)

    console.log('--------- 职责 ---------')
    headCompany.performDuty()
  }
  constructor(props: ICombinationIndexProps) {
    super(props)
    this.setup()
  }
  public render() {
    return (
      <div>
        <h2>组合模式</h2>
        <hr></hr>
        <h2>公司树形结构管理 案例</h2>
      </div>
    );
  }
}
