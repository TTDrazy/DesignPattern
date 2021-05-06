import { STOCKENUM } from "../enum/StockEnum";

export default interface IStock {
    // 股票的名字和类型
    name: string;
    type: STOCKENUM;
    // 每只股票都有买和卖的方法
    buy(): void;
    sell(): void;
}
