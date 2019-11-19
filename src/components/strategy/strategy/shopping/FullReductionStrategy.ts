import { IPayStrategy } from "./IPayStrategy";

/**
 * 满减计算策略
 */
export default class FullReductionStrategy implements IPayStrategy{
    minTotal:number;    //满减需求最小额度
    reduction:number;    //减少的额度
    
    constructor(minTotal:number,reduction:number){
        this.minTotal = minTotal;
        this.reduction = reduction;
    }

    calculate(singlePrice: number, amount: number): number {
        let total = singlePrice * amount;
        if(total >= this.minTotal){
            total = total - this.reduction;
        }
        return total;
    }

}