import { IGoPayStrategy } from './IGoPayStrategy';
export default class BusStrategy implements IGoPayStrategy{
    priceOneTime:number;

    constructor(priceOneTime:number){
        this.priceOneTime = priceOneTime;
    }
    
    calculate(): number {
        return this.priceOneTime;
    }
    
}