import SoftWare from './SoftWare';
//具体实现类（ConcreteImplementor)
//实现Implementor接口并定义它的具体实现
export default class Application extends SoftWare{
    constructor(name:string){
        super(name,'应用程序');
    }
}