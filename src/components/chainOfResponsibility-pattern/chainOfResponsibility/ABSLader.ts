import Request from './Request';

//抽象 处理者（Handler)
//定义一个处理请示的接口，需要包含可以设置后继处理者的方法和能够处理请求的抽象方法
export default abstract class ABSLeader{
    //领导的姓名和职称
    name:string;
    duty:string;
    constructor(name:string,duty:string){
        this.name = name;
        this.duty = duty;
    }
    protected nextResolveLeader:ABSLeader | undefined;
    //设置下一位领导的信息
    setNextResolveLeader(resolveLeader:ABSLeader ){
        this.nextResolveLeader = resolveLeader;
        //设置完成本次后将领导对象返回出去，实现真正的链式调用
        return this.nextResolveLeader;
    }
    //处理请求的抽象方法
    handleRequest(request:Request):void{};
}