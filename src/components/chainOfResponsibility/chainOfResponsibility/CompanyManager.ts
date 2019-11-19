import ABSLeader from './ABSLader';
import Request from './Request';

//具体处理者（ConcreteHandeler)
//处理它所负责的请求，并且可以访问它的后继者
//如果可以处理该请求就直接自己处理，否则将该请求转发给它的后继者去处理

//公司总经理
export default class CompanyManager extends ABSLeader {
    constructor(name:string){
        super(name,'公司总经理');
    }
    handleRequest(request: Request): void {
        let {name,reason,day} = request;
        if(request.day >5){
            console.log(`${this.duty}:${this.name},批准${name}因为${reason}请假${day}天！`);
        }
    }
    
}
