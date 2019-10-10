import { IGoPayStrategy } from './IGoPayStrategy';
export default class BusStrategy implements IGoPayStrategy{
    
    calculate(): number {
        return 2;
    }
    
}