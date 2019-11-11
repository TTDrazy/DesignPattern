//抽象的软件类

//实现类接口（Implementor) 
//定义 Abstraction 抽象的实现，它可以是一个接口也可以是一个抽象类;
//Implementor 接口提供 Abstraction 抽象接口需要的操作，而 Abstraction 则定义了基于这些基本操作的较高层次的操作
export default abstract class SoftWare{
    name:string;
    type:string;
    constructor(name:string,type:string){
        this.name = name;
        this.type = type;
    }
}