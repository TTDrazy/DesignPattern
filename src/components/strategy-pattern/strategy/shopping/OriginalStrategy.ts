import { IPayStrategy } from './IPayStrategy';
/**
 * 原价计算策略
 */
export default class OriginalStrategy implements IPayStrategy{

    calculate(singlePrice: number, amount: number): number {
        return singlePrice * amount;
    }

}