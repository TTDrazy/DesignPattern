import { IGoPayStrategy } from './IGoPayStrategy';
export default class StairPayStrategy implements IGoPayStrategy{
    startKil:number;
    startPrice:number;
    addMoneyOneKil:number;

    constructor(startKil:number,startPrice:number, addMoneyOneKil:number){
        this.startKil = startKil;
        this.startPrice = startPrice;
        this.addMoneyOneKil = addMoneyOneKil;
    }

    calculate(kilometre: number): number {
       if(kilometre <= this.startKil){
            return this.startPrice;
       }else{
           return this.startPrice+(kilometre-this.startKil)*this.addMoneyOneKil;
       }
    }
       
}