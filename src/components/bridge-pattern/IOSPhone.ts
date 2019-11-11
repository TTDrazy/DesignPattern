import ABSPhone from "./ABSPhone";
import SoftWareEnum from './SoftWareEnum';
//扩充抽象类（RefinedAbstraction) 
//实现由 Abstraction 定义的接口方法，可能会有自己的一些私有方法
export default class IOSphone extends ABSPhone {
    constructor(model: string) {
        super(model, SoftWareEnum.IOS);
    }
}