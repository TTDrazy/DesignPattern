import Context from "./Context";
import DiscountStrategy from "./DiscountStrategy";
import FullReductionStrategy from "./FullReductionStrategy";
import OriginalStrategy from './OriginalStrategy';

export default class ShoppingFactory {
    
    static getStrategy =(discount:string)=>{
        let context:Context;
        switch (discount) {
            case "9.5折":
                context = new Context(new DiscountStrategy(0.95));
                break;
            case "满100-10元":
                context = new Context(new FullReductionStrategy(100, 10));
                break;
            case "满200-30元":
                context = new Context(new FullReductionStrategy(200, 30));
                break;
            case "满500-80元":
                context = new Context(new FullReductionStrategy(500, 80));
                break;
            case "原价":
                context = new Context(new OriginalStrategy());
                break;
            default:
                break;
        }
        //加感叹号表示 context 不为空
        return context!;
    }
    
}