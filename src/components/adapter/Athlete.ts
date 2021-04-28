import { DutyEnum } from "./enum/DutyEnum";
import IAthlete from "./interface/IAthlete";

export default class Athlete implements IAthlete {
    private name: string;
    private duty: DutyEnum;
    constructor(name: string, duty: DutyEnum) {
        this.name = name;
        this.duty = duty;
    }
    attack(): void {
        console.log(`${this.duty} - ${this.name}负责进攻~`);
    }
    defense(): void {
        console.log(`${this.duty} - ${this.name}负责防守~`);
    }
}
