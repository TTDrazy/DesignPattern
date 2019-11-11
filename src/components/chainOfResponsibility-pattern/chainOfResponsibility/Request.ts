//请求类
export default class Request{
    name:string;
    reason:string;
    day:number;
    
    constructor(name:string,reason:string,day:number){
        this.name = name;
        this.reason = reason;
        this.day = day;
    }
}