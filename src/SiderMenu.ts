import { RouterEnum } from './router/RouterEnum'

/*
 * @Author: Drazy
 * @Date: 2021-11-10 14:31:44
 * @LastEditors: Drazy
 * @LastEditTime: 2021-12-28 10:32:06
 */
export interface IMenuItem {
  linkTo: RouterEnum
  Icon: string
  text: string
  exampleName?: string
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
          exampleName: '生产不同厂家鼠标案例',
        },
        {
          linkTo: RouterEnum.abstractFactory,
          Icon: 'shop',
          text: '抽象工厂模式',
          exampleName: '生产不同厂家不同硬件案例',
        },
        {
          linkTo: RouterEnum.simpleFactory,
          Icon: 'shop',
          text: '简单工厂模式',
          exampleName: '计算器案例',
        },
        {
          linkTo: RouterEnum.singleton,
          Icon: 'minus',
          text: '单例模式',
          exampleName: '太阳月亮案例',
        },
        {
          linkTo: RouterEnum.builder,
          Icon: 'scissor',
          text: '建造者模式',
          exampleName: '创建胖、瘦小人案例',
        },
        {
          linkTo: RouterEnum.prototype,
          Icon: 'import',
          text: '原型模式',
          exampleName: '克隆人案例',
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
          exampleName: '教练叫暂停后计划对战策略案例',
        },
        {
          linkTo: RouterEnum.bridge,
          Icon: 'column-width',
          text: '桥接模式',
          exampleName: '手机安装软件案例',
        },
        {
          linkTo: RouterEnum.combination,
          Icon: 'apartment',
          text: '组合模式',
          exampleName: '公司树形结构管理案例',
        },
        {
          linkTo: RouterEnum.decorator,
          Icon: 'border-outer',
          text: '装饰模式',
          exampleName: '人穿衣服案例',
        },
        {
          linkTo: RouterEnum.facade,
          Icon: 'skin',
          text: '外观/门面模式',
          exampleName: '股民炒股案例',
        },
        {
          linkTo: RouterEnum.agency,
          Icon: 'block',
          text: '代理模式',
          exampleName: '追求女生案例',
        },
        {
          linkTo: RouterEnum.flyweight,
          Icon: 'fork',
          text: '享元模式',
          exampleName: '网站共享代码案例',
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
          exampleName: '员工请假案例',
        },
        {
          linkTo: RouterEnum.command,
          Icon: 'code',
          text: '命令模式',
          exampleName: '餐厅点餐案例',
        },
        {
          linkTo: RouterEnum.iterator,
          Icon: 'retweet',
          text: '迭代器模式',
          exampleName: '买票案例',
        },
        {
          linkTo: RouterEnum.mediator,
          Icon: 'smile-o',
          text: '中介者模式',
          exampleName: '联合国对话案例',
        },
        {
          linkTo: RouterEnum.memento,
          Icon: 'container',
          text: '备忘录模式',
          exampleName: '游戏存，读档案例',
        },
        {
          linkTo: RouterEnum.observer,
          Icon: 'eye',
          text: '观察者模式',
          exampleName:
            '订阅漫画更新案例、气象站发布新消息案例、诸多公告牌进行更新案例',
        },
        {
          linkTo: RouterEnum.status,
          Icon: 'alert',
          text: '状态模式',
          exampleName: '打工人不同时段工作状态案例',
        },
        {
          linkTo: RouterEnum.strategy,
          Icon: 'ordered-list',
          text: '策略模式',
          exampleName: '购物车折扣计算案例',
        },
        {
          linkTo: RouterEnum.template,
          Icon: 'copy',
          text: '模板模式',
          exampleName: '学生抄写试题案例',
        },
        {
          linkTo: RouterEnum.interpreter,
          Icon: 'solution',
          text: '解释器模式',
          exampleName: '学生抄写试题案例',
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
