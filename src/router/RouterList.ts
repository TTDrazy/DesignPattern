import AbstractFactoryIndex from '../components/abstractFactory/AbstractFactoryIndex'
import AdapterIndex from '../components/adapter/AdapterIndex'
import AgencyIndex from '../components/agency/AgencyIndex'
import BridgePattermIndex from '../components/bridge/BridgePattermIndex'
import BuilderIndex from '../components/builder/BuilderIndex'
import ChainOfResponsibility from '../components/chainOfResponsibility/chainOfResponsibility/ChainOfResponsibilityIndex'
import OldChainOfResponsibilityIndex from '../components/chainOfResponsibility/old/OldChainOfResponsibilityIndex'
import CombinationIndex from '../components/combination/CombinationIndex'
import CommandIndex from '../components/command/command/CommandIndex'
import RestaurantIndex from '../components/command/restaurant/RestaurantIndex'
import WearClothesDecorate from '../components/decorator/decorate/WearClothesDecorate'
import WearClothesIndex from '../components/decorator/old/WearClothesIndex'
import FacadeIndex from '../components/facade/FacadeIndex'
import FactoryIndex from '../components/factory/FactoryIndex'
import FlyweightIndex from '../components/flyweight/FlyweightIndex'
import IteratorIndex from '../components/iterator/IteratorIndex'
import MediatorIndex from '../components/mediator/MediatorIndex'
import GameIndex from '../components/memento/game/GameIndex'
import MenmentoIndex from '../components/memento/memento/MenmentoIndex'
import ObserverIndex from '../components/observer/ObserverIndex'
import PrototypeIndex from '../components/prototype/PrototypeIndex'
import SimpleFactory from '../components/simpleFactory/SimpleFactory'
import SingletonIndex from '../components/singleton/singleton/SingletonIndex'
import StatusIndex from '../components/status/StatusIndex'
import Goods from '../components/strategy/old/Goods'
import StrategyIndex from '../components/strategy/strategy/StrategyIndex'
import TemplateIndex from '../components/template/TemplateIndex'
import Home from '../Home'
import { RouterEnum } from './RouterEnum'
import InterpreterIndex from '../components/interpreter/InterpreterIndex'
import VisitorIndex from '../components/visitor/VisitorIndex'
/*
 * @Author: Drazy
 * @Date: 2021-11-10 09:54:01
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-10 10:05:55
 */
export interface IRouterList {
  /**
   * @description 是否绝对匹配
   */
  exact: boolean
  /**
   * @description 路由路径
   */
  path: RouterEnum
  /**
   * @description 应用的组件
   */
  component: any
}

const routerList: IRouterList[] = [
  {
    exact: true,
    path: RouterEnum.home,
    component: Home,
  },
  {
    exact: true,
    path: RouterEnum.simpleFactory,
    component: SimpleFactory,
  },
  {
    exact: true,
    path: RouterEnum.simpleFactory,
    component: SimpleFactory,
  },
  {
    exact: true,
    path: RouterEnum.oldstrategy,
    component: Goods,
  },
  {
    exact: true,
    path: RouterEnum.strategy,
    component: StrategyIndex,
  },
  {
    exact: true,
    path: RouterEnum.prototype,
    component: PrototypeIndex,
  },
  {
    exact: true,
    path: RouterEnum.olddecorator,
    component: WearClothesIndex,
  },
  {
    exact: true,
    path: RouterEnum.decorator,
    component: WearClothesDecorate,
  },
  {
    exact: true,
    path: RouterEnum.singleton,
    component: SingletonIndex,
  },
  {
    exact: true,
    path: RouterEnum.observer,
    component: ObserverIndex,
  },
  {
    exact: true,
    path: RouterEnum.oldchainOfResponsibility,
    component: OldChainOfResponsibilityIndex,
  },
  {
    exact: true,
    path: RouterEnum.chainOfResponsibility,
    component: ChainOfResponsibility,
  },
  {
    exact: true,
    path: RouterEnum.bridge,
    component: BridgePattermIndex,
  },
  {
    exact: true,
    path: RouterEnum.oldcommand,
    component: RestaurantIndex,
  },
  {
    exact: true,
    path: RouterEnum.command,
    component: CommandIndex,
  },
  {
    exact: true,
    path: RouterEnum.oldmemento,
    component: GameIndex,
  },
  {
    exact: true,
    path: RouterEnum.memento,
    component: MenmentoIndex,
  },
  {
    exact: true,
    path: RouterEnum.factory,
    component: FactoryIndex,
  },
  {
    exact: true,
    path: RouterEnum.abstractFactory,
    component: AbstractFactoryIndex,
  },
  {
    exact: true,
    path: RouterEnum.adapater,
    component: AdapterIndex,
  },
  {
    exact: true,
    path: RouterEnum.agency,
    component: AgencyIndex,
  },
  {
    exact: true,
    path: RouterEnum.template,
    component: TemplateIndex,
  },
  {
    exact: true,
    path: RouterEnum.facade,
    component: FacadeIndex,
  },
  {
    exact: true,
    path: RouterEnum.builder,
    component: BuilderIndex,
  },
  {
    exact: true,
    path: RouterEnum.combination,
    component: CombinationIndex,
  },
  {
    exact: true,
    path: RouterEnum.status,
    component: StatusIndex,
  },
  {
    exact: true,
    path: RouterEnum.iterator,
    component: IteratorIndex,
  },
  {
    exact: true,
    path: RouterEnum.mediator,
    component: MediatorIndex,
  },
  {
    exact: true,
    path: RouterEnum.flyweight,
    component: FlyweightIndex,
  },
  {
    exact: true,
    path: RouterEnum.interpreter,
    component: InterpreterIndex,
  },
  {
    exact: true,
    path: RouterEnum.visitor,
    component: VisitorIndex,
  },

  {
    exact: true,
    path: RouterEnum.unknown,
    component: '',
  },
]

export default routerList
