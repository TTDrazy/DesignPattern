import Command from "./Command";
import Cook from './Cook';

export default class BakeFish extends Command{
    name:string = '烤鱼';
    constructor(cook:Cook){
        super(cook);
    }
    cooking(number:number): void {
        this.cook.bakeFish(number);
    }
}