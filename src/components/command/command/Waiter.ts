import Command from './Command';
export default class Waiter{
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
        this.command.map((item)=>{
            item.cooking(item.number);
        })
    }

}