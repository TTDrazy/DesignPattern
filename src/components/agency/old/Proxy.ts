import IProxy from "./interface/IProxy";
export default class Proxy implements IProxy {
    giveFlowers(): void {
        throw new Error("Method not implemented.");
    }
    giveChocolete(): void {
        throw new Error("Method not implemented.");
    }
    giveDoll(): void {
        throw new Error("Method not implemented.");
    }
}
