import { IGoPayStrategy } from './IGoPayStrategy';

export default class Context{
    goStrategy:IGoPayStrategy;

    constructor(goStategy:IGoPayStrategy){
        this.goStrategy = goStategy;
    }

    calculate(kilometre: number): number {
        return this.goStrategy.calculate(kilometre);
     }
}