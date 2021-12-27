/*
 * @Author: Drazy
 * @Date: 2021-11-12 13:57:30
 * @LastEditors: Drazy
 * @LastEditTime: 2021-12-27 17:25:32
 */
import * as React from 'react';
import IWebsiteFactory from './interface/IWebsiteFactory';
import User from './User';
import WebsiteFactory from './WebsiteFactory';

export interface IFlyweightIndexProps {
}

export default class FlyweightIndex extends React.Component<IFlyweightIndexProps> {
  constructor(props: IFlyweightIndexProps) {
    super(props);
    console.log(`--------- 享元模式 ---------`)

    const webisteFactory: IWebsiteFactory = new WebsiteFactory()

    const fx = webisteFactory.getWebsiteCategory('产品展示')
    fx.use(new User('咕咕'))
    // 共享上方生成的对象，不再需要实例化
    const fy = webisteFactory.getWebsiteCategory('产品展示')
    fy.use(new User('叽叽'))
    const fz = webisteFactory.getWebsiteCategory('产品展示')
    fz.use(new User('啪嗒'))

    const fl = webisteFactory.getWebsiteCategory('博客')
    fl.use(new User('pong pong'))
    // 共享上方生成的对象，不再需要实例化
    const fm = webisteFactory.getWebsiteCategory('博客')
    fm.use(new User('Drazy'))
    const fn = webisteFactory.getWebsiteCategory('博客')
    fn.use(new User('猪猪'))

    // 统计实例化个数
    console.log(`网站总分类数为：${webisteFactory.getWebsiteCount()}`)
  }
  public render() {
    return (
      <div>
        <h2>享元模式</h2>
        <h3>网站共享代码案例</h3>
      </div>
    );
  }
}
