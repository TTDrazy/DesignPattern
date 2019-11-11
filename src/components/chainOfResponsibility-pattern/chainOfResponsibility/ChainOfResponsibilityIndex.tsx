import * as React from "react";
import DepartAssistantManager from "./DepartAssistantManager";
import DepartManager from "./DepartManager";
import CompanyAssistantManager from "./CompanyAssistantManager";
import CompanyManager from "./CompanyManager";
import Staff from "./Staff";

export interface IChainOfResponsibilityProps {}

export default class ChainOfResponsibility extends React.Component<
    IChainOfResponsibilityProps
> {
    componentDidMount() {
        //设置4位领导
        let departAssistantManager = new DepartAssistantManager("何海");
        let departManager = new DepartManager("王莉");
        let companyAssistantManager = new CompanyAssistantManager("张毅");
        let companyManager = new CompanyManager("熊伟");
        //设置责任链
        departAssistantManager
            .setNextResolveLeader(departManager)
            .setNextResolveLeader(companyAssistantManager)
            .setNextResolveLeader(companyManager);

        //设置员工
        let staff1 = new Staff("马宝宝");
        let staff2 = new Staff("臭张星");
        //员工创建请假申请
        let request1 = staff1.applyForRest("出去玩", 2);
        let request2 = staff2.applyForRest("泡妞", 4);
        //领导受理
        departAssistantManager.handleRequest(request1);
        departAssistantManager.handleRequest(request2);
    }
    public render() {
        return (
            <div>
                <h2>新版 员工请假案例</h2>
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
