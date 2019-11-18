import Command from "./Command";
import Cook from './Cook';

export default class FriedNoodles extends Command{
    name:string = '炒面';
    constructor(cook:Cook){
        super(cook);
    }
    cooking(number:number): void {
        this.cook.friedNoodles(number);
    }
}