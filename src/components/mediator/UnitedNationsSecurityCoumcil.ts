import ICountry from './interface/ICountry'
import IUnitedNationsAgency from './interface/IUnitedNationsAgency'
import Iraq from './Iraq'
import USA from './USA'

/*
 * @Author: Drazy
 * @Date: 2021-11-08 18:39:20
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-08 19:58:13
 */
export default class UnitedNationsSecurityCoumcil implements IUnitedNationsAgency{
  private USACountry!: USA
  private IraqCountry!: Iraq

  setUSACountry(value: USA) {
    this.USACountry = value
  }

  setIraqCountry(value: Iraq) {
    this.IraqCountry = value
  }
  // 缺点显而易见，具体的中介者类中会变得较为复杂
  declareMessage(message: string, country: ICountry): void {
    if (country === this.USACountry) {
      this.IraqCountry.getMessage(message)
    } else if (country === this.IraqCountry) {
      this.USACountry.getMessage(message)
    }
  }
}
