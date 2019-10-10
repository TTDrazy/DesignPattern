import { IGoPayStrategy } from './IGoPayStrategy';
export default class TaxiStrategy implements IGoPayStrategy{
    calculate(kilometre: number): number {
       if(kilometre <= 3){
            return 11;
       }else{
           return 11+(kilometre-3)*4.5;
       }
    }
       
}