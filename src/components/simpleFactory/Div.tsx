//具体计算类 继承 抽象计算类
import ABSCalculate from './ABSCalculate';

export default class Div extends ABSCalculate {
    calculate(number1:number,number2:number): number {
        return number1 / number2;
    }
}
