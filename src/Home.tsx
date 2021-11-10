/*
 * @Author: Drazy
 * @Date: 2021-11-10 10:14:02
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-10 15:19:49
 */
import * as React from 'react';
import { IMenuItem, ISider, siderMenuList } from './SiderMenu';

export interface IHomeProps {
}

export default class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <div>
        <h2>以下是菜菜马应用 Typescript 学习 GOF23 设计模式的内容</h2>
        <h3>目前主要包括</h3>
        {
          siderMenuList.map((siderItem: ISider) => {
            let template = (<div key={'empty' + siderItem.linkTo}></div>)
            if (siderItem.isSubMenu) {
              template = (
                <ul key={siderItem.subMenu!.title.text}>
                  {siderItem.subMenu!.title.text}
                  {siderItem.subMenu!.menuItemList.map((subMenuItem: IMenuItem) => {
                    return (
                      <ol key={subMenuItem.linkTo}>{subMenuItem.text}</ol>
                    )
                  })}
                </ul>
              )
            }
            return template
          })
        }
      </div>
    );
  }
}
