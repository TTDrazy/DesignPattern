import { IGoPayStrategy } from './IGoPayStrategy';
export default class OncePayStrategy implements IGoPayStrategy{
    priceOneTime:number;

    constructor(priceOneTime:number){
        this.priceOneTime = priceOneTime;
    }
    
    calculate(): number {
        return this.priceOneTime;
    }
    
}