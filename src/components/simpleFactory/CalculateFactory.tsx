import ABSCalculate from "./ABSCalculate";
import Add from "./Add";
import Subtract from "./Subtract";
import Mult from "./Mult";
import Div from "./Div";

enum OperatorType {
    Add = '+',
    Subtract = '-',
    Mult = '*',
    Div = '/'
}
//工厂类负责 new 相关计算类，节约资源
export default class CalculateFactory {
    static Create(operator: OperatorType): ABSCalculate {
        switch (operator) {
            case OperatorType.Add:
                return new Add();
            case OperatorType.Subtract:
                return new Subtract();
            case OperatorType.Mult:
                return new Mult();
            case OperatorType.Div:
                return new Div();
        }
    }
}
