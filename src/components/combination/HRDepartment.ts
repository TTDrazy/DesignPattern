import ICompany from "./interface/ICompany";
import ABSDepartment from "./abstract/ABSDepartment";
/*
 * @Author: Drazy
 * @Date: 2021-09-06 16:36:12
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-06 16:57:00
 */
export default class HRDepartment extends ABSDepartment implements ICompany {
    performDuty(): void {
        console.log(`${this.name} --- 员工招聘培训管理`);
    }
}
