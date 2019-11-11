import Request from "./Request";

//员工类
export default class Staff {
    //员工姓名
    name: string;
    //请假天数
    restDays: number | undefined;
    constructor(name: string) {
        this.name = name;
    }
    //申请请假(请假原因,天数)
    applyForRest(reason: string, day: number): Request {
        return new Request(this.name, reason, day);
    }
}
