import Phone from "./ABSPhone";

export default class Android extends Phone {
    constructor(model: string) {
        super(model, "Android操作系统");
    }
}
