import Keyboard from './Keyboard';

export default class HpKeyboard extends Keyboard{
    constructor(){
        super('惠普');
    }
    
    sayHi(): void {
        console.log(`欢迎使用惠普品牌的键盘~`);
    }
    
}