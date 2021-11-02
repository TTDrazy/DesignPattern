import Command from './Command';

//请求者类（Invoker)
//负责调用 Command 对象发起执行

//服务员
export default class Waiter{
    //聚合了 Command
    private command:Command[];
    constructor(){
        this.command = [];
    }
    //添加食物
    addFood(command:Command,number:number){
        command.number = number;
        this.command.push(command);
        console.log(`服务员：您要了${number}份${command.name}`);
    }
    //删除食物
    removeFood(command:Command){
        console.log(`服务员：您取消了${command.name}的订单`);
        this.command = this.command.filter((item)=>item!==command);
    }
    //通知执行
    notify(){
        this.command.forEach((item)=>{
            item.cooking(item.number);
        })
    }

}