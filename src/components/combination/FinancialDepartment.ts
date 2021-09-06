import ICompany from "./interface/ICompany";
import ABSDepartment from "./abstract/ABSDepartment";
/*
 * @Author: Drazy
 * @Date: 2021-09-06 16:52:34
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-06 16:57:33
 */
export default class FinancialDepartment extends ABSDepartment implements ICompany {
    performDuty(): void {
        console.log(`${this.name} --- 公司财务收支管理`);
    }
}
