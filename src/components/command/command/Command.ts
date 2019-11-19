import Cook from './Cook';
//命令抽象类（Command)
//用来声明执行操作的接口

export default abstract class Command{
    protected cook:Cook;
    //食物名称
    name:string | undefined;
    //烹饪数量
    number:number;

    //确定 烹饪食物的人是谁
    constructor(cook:Cook){
        this.cook = cook;
        this.number = 0;
    }
    //执行命令的抽象方法--烹饪(数量)
    abstract cooking(number:number):void;
}