/*
 * @Author: Drazy
 * @Date: 2021-09-06 15:53:20
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-06 17:26:50
 */
export default interface ICompany {
  // 公司名称
  name: string

  // 增加一个新公司
  add(company: ICompany): void
  // 删除一个新公司
  remove(company: ICompany): void
  // 显示结构
  displayStructure(depth: number): void
  // 履行职责
  performDuty(): void
}
