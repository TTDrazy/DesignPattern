import IStock from "./IStock";
export default interface IFund {
    // 每只基金包含了许多股票
    stockArray: IStock[];
    // 每只基金都有购买和赎回的方法
    purchase(): void;
    redemption(): void;
}
