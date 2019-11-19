//接受者类（Receiver)
//负责请求具体内容的执行

//厨师
export default class Cook{
    //烤羊肉
    bakeMutton(number:number){
        console.log(`厨师：烤羊肉${number}串，做好啦~`);
    }
    //烤鱼
    bakeFish(number:number){
        console.log(`厨师：烤鱼${number}条，做好啦~`);
    }
    //炒面
    friedNoodles(number:number){
        console.log(`厨师：炒面${number}份，做好啦~`);
    }
    
}