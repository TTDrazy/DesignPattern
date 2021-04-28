import IGirl from "./interface/IGirl";
import IWooer from "./interface/IWooer";

export default class Wooer implements IWooer {
    girl: IGirl;
    constructor(wooerGirl: IGirl) {
        this.girl = wooerGirl;
    }
    giveFlowers(): void {
        console.log(`亲爱的${this.girl.name}，送给你花花~`);
    }
    giveChocolete(): void {
        console.log(`亲爱的${this.girl.name}，送给你巧克力~`);
    }
    giveDoll(): void {
        console.log(`亲爱的${this.girl.name}，送给你洋娃娃~`);
    }
}
