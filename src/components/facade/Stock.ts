import { STOCKENUM } from "./enum/StockEnum";
import IStock from "./interface/IStock";

export default class Stock implements IStock {
    name: string;
    type: STOCKENUM;
    constructor(name: string, type: STOCKENUM) {
        this.name = name;
        this.type = type;
    }
    buy(): void {
        console.log(`我要买入${this.type}类型下的${this.name}！`);
    }
    sell(): void {
        console.log(`我要卖出${this.type}类型下的${this.name}！`);
    }
}
