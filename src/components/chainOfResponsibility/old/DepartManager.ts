import { ILeader } from "./ILeader";
import Staff from "./Staff";
export default class DepartManager implements ILeader {
    name: string;
    duty = "部门经理";
    constructor(name: string) {
        this.name = name;
    }
    agree(staff: Staff): void {
        let restDays: number | undefined = staff.restDays;
        const staffName  = staff.name;
        if (!!restDays) {
            if (restDays === 1) {
                console.log(`${staffName}你请假${restDays}天，去找部门副经理审批吧！`);
            }else if(restDays >=2 && restDays <=3){
                console.log(`我是${this.duty}-${this.name}，我同意你请假${restDays}天`)
            }else if(restDays >=4 && restDays <=5){
                console.log(`${staffName}你请假${restDays}天，去找公司副总经理审批吧！`)
            }else if(restDays >5){
                console.log(`${staffName}你请假${restDays}天，去找公司总经理经理审批吧！`)
            }
        }else{
            console.log('你请假多久啊？')
        }
    }
}
