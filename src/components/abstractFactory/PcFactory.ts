import Mouse from './Mouse';
import Keyboard from './Keyboard';
export default abstract class PcFactory{
    //电脑硬件的抽象工厂
    //品牌
    brand:string;
    
    constructor(brand:string){
        this.brand = brand;
    } 
    //生产鼠标
    abstract productMouse():Mouse;
    //生产键盘
    abstract  productKeyBoard():Keyboard;

}