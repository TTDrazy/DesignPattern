//鼠标的抽象工厂
export default abstract class MouseFactory{
    //品牌
    brand:string;
    
    constructor(brand:string){
        this.brand = brand;
    }
    static productMouse():void{}
}