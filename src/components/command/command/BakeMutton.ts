import Command from "./Command";
import Cook from './Cook';

export default class BakeMutton extends Command{
    name:string = '烤羊肉';
    constructor(cook:Cook){
        super(cook);
    }
    cooking(number:number): void {
        this.cook.bakeMutton(number);
    }
}