import { IPerson } from "./IPerson";

//装饰抽象类（Decorator)：
//实现了对象接口（Component）
//从外类来扩展对象接口的功能
//但对于对象接口来说，无需了解装饰抽象类（Decorator）的存在

export default class Clothes implements IPerson{
    //说明 component 不为空
    protected component !: IPerson;
    
    wear(component:IPerson){
        this.component = component;
    }

    show(){
        if(!!this.component){
            this.component.show();
        }
    }
}