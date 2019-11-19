import * as React from "react";
import DepartAssistantManager from './DepartAssistantManager';
import DepartManager from './DepartManager';
import CompanyAssistantManager from './CompanyAssistantManager';
import CompanyManager from './CompanyManager';
import Staff from './Staff';

export interface IOldChainOfResponsibilityIndexProps {}

export default class OldChainOfResponsibilityIndex extends React.Component<
    IOldChainOfResponsibilityIndexProps
> {
    componentDidMount(){
        //设置4位领导
        let departAssistantManager = new DepartAssistantManager('何海');
        let departManager = new DepartManager('王莉');
        let companyAssistantManager = new CompanyAssistantManager('张毅');
        let companyManager = new CompanyManager('熊伟');
        //设置员工
        let staff1 = new Staff('刘宝宝');
        //员工提出请假申请
        staff1.applyForRest(3);
        //去找部门副经理审批
        departAssistantManager.agree(staff1);
        //去找部门经理审批
        departManager.agree(staff1);
    }
    public render() {
        return (
            <div>
                <h2>旧版员工请假案例</h2>
                <ul>
                    <li>请假 1 天时，需由部门副经理审批</li>
                    <li>请假 2 - 3 天时，需由部门经理审批</li>
                    <li>请假 4 - 5 天时，需有公司副总经理审批</li>
                    <li>请假 5 天以上时，需由公司总经理审批</li>
                </ul>
            </div>
        );
    }
}
