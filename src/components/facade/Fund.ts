import { STOCKENUM } from "./enum/StockEnum";
import IFund from "./interface/IFund";
import IStock from "./interface/IStock";
import Stock from "./Stock";
export default class Fund implements IFund {
    stockArray: IStock[] = [];
    constructor() {
        const stock1 = new Stock("股票1", STOCKENUM.STOCK);
        const stock2 = new Stock("股票2", STOCKENUM.STOCK);
        const stock3 = new Stock("股票3", STOCKENUM.STOCK);
        const nationalDebt = new Stock("国债1", STOCKENUM.NATIONAL_DEBT);
        const realty = new Stock("房地产1", STOCKENUM.REALTY);
        // 初始化基金中的股票数组
        this.stockArray.push(stock1, stock2, stock3, nationalDebt, realty);
    }
    purchase(): void {
        this.stockArray.map((item) => item.buy());
    }
    redemption(): void {
        this.stockArray.map((item) => item.sell());
    }
}
