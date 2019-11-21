import Mouse from './Mouse';
export default class LogiMouse extends Mouse{
    constructor(){
        super('罗技');
    }
    
    sayHi(): void {
        console.log(`欢迎使用罗技品牌的鼠标~`);
    }
    
}