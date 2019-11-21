export default abstract class Mouse{
    brand:string;

    constructor(brand:string){
        this.brand = brand;
    }

    abstract sayHi():void;
}