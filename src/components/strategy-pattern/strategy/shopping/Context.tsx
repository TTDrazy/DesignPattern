import { IPayStrategy } from './IPayStrategy';
export default class Context{
    strategy:IPayStrategy;

    constructor(strategy:IPayStrategy){
        this.strategy = strategy;
    }
    
    calculate(singlePrice: number, amount: number):number {
        return this.strategy.calculate(singlePrice,amount);
    }
}