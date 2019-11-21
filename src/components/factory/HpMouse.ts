import Mouse from './Mouse';
export default class HpMouse extends Mouse{
    constructor(){
        super('惠普');
    }
    sayHi(): void {
        console.log(`欢迎使用惠普品牌的鼠标~`);
    }
    
}