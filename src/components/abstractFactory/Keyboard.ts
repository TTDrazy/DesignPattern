export default abstract class Keyboard{
    brand:string;

    constructor(brand:string){
        this.brand = brand;
    }

    abstract sayHi():void;
}