import ICountry from './interface/ICountry'
import IUnitedNationsAgency from './interface/IUnitedNationsAgency'
/*
 * @Author: Drazy
 * @Date: 2021-11-08 18:32:12
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-08 18:33:15
 */
export default abstract class ABSCountry implements ICountry {
  mediator: IUnitedNationsAgency
  constructor(mediator: IUnitedNationsAgency) {
    this.mediator = mediator
  }
}
