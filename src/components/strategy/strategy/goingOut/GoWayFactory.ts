import Context from "./Context";
import OncePayStrategy from './OncePayStrategy';
import StairPayStrategy from './StairPayStrategy';

export default class GoWayFactory {
    static getPrice = (goWay: string) => {
        let context: Context;
        switch (goWay) {
            case "公交车":
                context = new Context(new OncePayStrategy(2));
                break;
            case "自行车":
                context = new Context(new OncePayStrategy(0));
                break;
            case "出租车":
                context = new Context(new StairPayStrategy(3,11,4.5));
                break;
            default:
                break;
        }
        return context!;
    };
}
