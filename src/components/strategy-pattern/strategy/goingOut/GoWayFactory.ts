import Context from "./Context";
import BusStrategy from "./BusStrategy";
import BicycleStrategy from "./BicycleStrategy";
import TaxiStrategy from "./TaxiStrategy";

export default class GoWayFactory {
    static getPrice = (goWay: string) => {
        let context: Context;
        switch (goWay) {
            case "公交车":
                context = new Context(new BusStrategy(2));
                break;
            case "自行车":
                context = new Context(new BicycleStrategy(0));
                break;
            case "出租车":
                context = new Context(new TaxiStrategy(3,11,4.5));
                break;
            default:
                break;
        }
        return context!;
    };
}
