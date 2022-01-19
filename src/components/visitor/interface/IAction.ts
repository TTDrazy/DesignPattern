import IPerson from './IPerson'
/*
 * @Author: Drazy
 * @Date: 2022-01-19 16:47:21
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 16:49:27
 */
export default interface IAction {
  /**
   * 得到男人的结论
   */
  getManConclusion(concreteElement: IPerson): void
  /**
   * 得到女人的结论
   */
  getWomanConclusion(concreteElement: IPerson): void
}
