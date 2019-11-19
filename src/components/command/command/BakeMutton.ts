import Command from "./Command";
import Cook from './Cook';

//具体命令类（ConcreteCommand)
//关联了 Receiver

export default class BakeMutton extends Command{
    name:string = '烤羊肉';
    constructor(cook:Cook){
        super(cook);
    }
    //将一个 Receiver 对象绑定于一个动作，调用 Receiver 中相应的操作，来实现 Command 中定义的操作
    cooking(number:number): void {
        this.cook.bakeMutton(number);
    }
}