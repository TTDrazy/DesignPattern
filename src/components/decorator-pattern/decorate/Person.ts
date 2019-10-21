import { IPerson } from './IPerson';

//具体组件（ConcreteComponent）:
//被装饰的具体类，实现对象接口（Component）
export default class Person implements IPerson {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    show() {
        console.log(`装扮的${this.name}`);
    }
}
