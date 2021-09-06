import ICompany from '../interface/ICompany'

/*
 * @Author: Drazy
 * @Date: 2021-09-06 16:55:26
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-06 17:26:28
 */
export default abstract class ABSDepartment implements ICompany {
  name: string
  constructor(_name: string) {
    this.name = _name
  }
  add(company: ICompany): void {}
  remove(company: ICompany): void {}
  displayStructure(depth: number): void {
    console.log(`${'*'.repeat(depth)}${this.name}`)
  }
  performDuty(): void {}
}
