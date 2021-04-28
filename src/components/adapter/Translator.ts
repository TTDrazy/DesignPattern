import IAthlete from "./interface/IAthlete";
import ITarget from "./interface/ITarget";
export default class Translator implements ITarget {
    athlete: IAthlete;
    constructor(athlete: IAthlete) {
        this.athlete = athlete;
    }
    transAttack(): void {
        console.log(`翻译：`);
        this.athlete.attack();
    }
    transDefense(): void {
        console.log(`翻译：`);
        this.athlete.defense();
    }
}
