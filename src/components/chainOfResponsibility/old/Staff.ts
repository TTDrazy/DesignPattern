export default class Staff {
    //员工姓名
    name: string;
    //请假天数
    restDays:number | undefined;
    constructor(name:string){
        this.name = name;
    }
    //申请请假(请假天数)
    applyForRest(restDays: number): void {
        this.restDays = restDays;
    }
}
