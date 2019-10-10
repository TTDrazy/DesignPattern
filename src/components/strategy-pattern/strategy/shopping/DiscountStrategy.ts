import { IPayStrategy } from "./IPayStrategy";
/**
 * 打折计算策略
 */
export default class DiscountStrategy implements IPayStrategy {
    discount: number; //折扣

    constructor(discount: number) {
        this.discount = discount;
    }

    calculate(singlePrice: number, amount: number) {
        return singlePrice * amount * this.discount;
    }
}
