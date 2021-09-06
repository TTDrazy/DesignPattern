import ICompany from '../interface/ICompany'
/*
 * @Author: Drazy
 * @Date: 2021-09-06 15:58:16
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-06 17:32:52
 */
export default abstract class ABSCompany implements ICompany {
  name: string
  constructor(_name: string) {
    this.name = _name
  }
  list: ICompany[] = []
  add(company: ICompany): void {
    this.list.push(company)
  }
  remove(company: ICompany): void {
    this.list = this.list.filter((item: ICompany) => item !== company)
    console.log(`您已解散---${company.name}`)
  }
  displayStructure(depth: number): void {
    console.log(`${'*'.repeat(depth)}${this.name}`)
    this.list.map((item: ICompany) => item.displayStructure(depth + 1))
  }
  performDuty(): void {
    this.list.map((item: ICompany) => item.performDuty())
  }
}
