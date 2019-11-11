import Phone from "./ABSPhone";

export default class IOSphone extends Phone {
    constructor(model: string) {
        super(model, "IOS操作系统");
    }
}