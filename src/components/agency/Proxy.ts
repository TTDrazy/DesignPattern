import IGirl from "./interface/IGirl";
import IProxy from "./interface/IProxy";
import IWooer from "./interface/IWooer";
import Wooer from "./Wooer";
export default class Proxy implements IProxy {
    mandator: IWooer;
    constructor(girl: IGirl) {
        this.mandator = new Wooer(girl);
    }
    giveFlowers(): void {
        this.mandator.giveFlowers();
    }
    giveChocolete(): void {
        this.mandator.giveChocolete();
    }
    giveDoll(): void {
        this.mandator.giveDoll();
    }
}
