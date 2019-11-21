import Keyboard from './Keyboard';

export default class LogiKeyboard extends Keyboard{
    constructor(){
        super('罗技');
    }
    
    sayHi(): void {
        console.log(`欢迎使用罗技品牌的键盘~`);
    }
    
}