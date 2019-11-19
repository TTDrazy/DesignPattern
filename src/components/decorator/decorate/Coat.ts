import Clothes from './Clothes';

//具体装饰对象（ConcreteDecorator）：
//起到给对象接口（Component）添加职责的功能
export default class Coat extends Clothes{
    show(){
        console.log('外套');
        super.show();
    }
}