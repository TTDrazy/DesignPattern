import { RouterEnum } from './router/RouterEnum'

/*
 * @Author: Drazy
 * @Date: 2021-11-10 14:31:44
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-10 14:58:17
 */
export interface IMenuItem {
  linkTo: RouterEnum
  Icon: string
  text: string
}

export interface ISubMenu {
  title: IMenuItem
  menuItemList: IMenuItem[]
}

export interface ISider {
  isSubMenu: boolean
  linkTo?: RouterEnum
  Icon?: string
  text?: string
  subMenu?: ISubMenu
}

export const siderMenuList: ISider[] = [
  {
    isSubMenu: false,
    linkTo: RouterEnum.home,
    Icon: 'home',
    text: '介绍',
  },
  {
    isSubMenu: true,
    subMenu: {
      title: {
        linkTo: RouterEnum.factory,
        Icon: 'rocket',
        text: '创建型模式',
      },
      menuItemList: [
        {
          linkTo: RouterEnum.factory,
          Icon: 'shop',
          text: '工厂模式',
        },
        {
          linkTo: RouterEnum.abstractFactory,
          Icon: 'shop',
          text: '抽象工厂模式',
        },
        {
          linkTo: RouterEnum.simpleFactory,
          Icon: 'shop',
          text: '简单工厂模式',
        },
        {
          linkTo: RouterEnum.singleton,
          Icon: 'minus',
          text: '单例模式',
        },
        {
          linkTo: RouterEnum.builder,
          Icon: 'scissor',
          text: '建造者模式',
        },
        {
          linkTo: RouterEnum.prototype,
          Icon: 'import',
          text: '原型模式',
        },
      ],
    },
  },
  {
    isSubMenu: true,
    subMenu: {
      title: {
        linkTo: RouterEnum.adapater,
        Icon: 'database',
        text: '结构型模式',
      },
      menuItemList: [
        {
          linkTo: RouterEnum.adapater,
          Icon: 'api',
          text: '适配器模式',
        },
        {
          linkTo: RouterEnum.bridge,
          Icon: 'column-width',
          text: '桥接模式',
        },
        {
          linkTo: RouterEnum.combination,
          Icon: 'apartment',
          text: '组合模式',
        },
        {
          linkTo: RouterEnum.decorator,
          Icon: 'border-outer',
          text: '装饰模式',
        },
        {
          linkTo: RouterEnum.facade,
          Icon: 'skin',
          text: '外观/门面模式',
        },
        {
          linkTo: RouterEnum.agency,
          Icon: 'block',
          text: '代理模式',
        },
      ],
    },
  },
  {
    isSubMenu: true,
    subMenu: {
      title: {
        linkTo: RouterEnum.chainOfResponsibility,
        Icon: 'setting',
        text: '行为型模式',
      },
      menuItemList: [
        {
          linkTo: RouterEnum.chainOfResponsibility,
          Icon: 'cluster',
          text: '责任链模式',
        },
        {
          linkTo: RouterEnum.command,
          Icon: 'code',
          text: '命令模式',
        },
        {
          linkTo: RouterEnum.iterator,
          Icon: 'retweet',
          text: '迭代器模式',
        },
        {
          linkTo: RouterEnum.mediator,
          Icon: 'smile-o',
          text: '中介者模式',
        },
        {
          linkTo: RouterEnum.memento,
          Icon: 'container',
          text: '备忘录模式',
        },
        {
          linkTo: RouterEnum.observer,
          Icon: 'eye',
          text: '观察者模式',
        },
        {
          linkTo: RouterEnum.status,
          Icon: 'alert',
          text: '状态模式',
        },
        {
          linkTo: RouterEnum.strategy,
          Icon: 'ordered-list',
          text: '策略模式',
        },
        {
          linkTo: RouterEnum.template,
          Icon: 'copy',
          text: '模板模式',
        },
      ],
    },
  },
  {
    isSubMenu: false,
    linkTo: RouterEnum.unknown,
    Icon: 'question',
    text: '未知',
  },
]
