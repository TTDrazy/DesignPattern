import Context from "./Context";
import BusStrategy from "./BusStrategy";
import BicycleStrategy from "./BicycleStrategy";
import TaxiStrategy from "./TaxiStrategy";

export default class GoWayFactory {
    static getPrice = (goWay: string) => {
        let context: Context;
        switch (goWay) {
            case "公交车":
                context = new Context(new BusStrategy());
                break;
            case "自行车":
                context = new Context(new BicycleStrategy());
                break;
            case "出租车":
                context = new Context(new TaxiStrategy());
                break;
            default:
                break;
        }
        return context!;
    };
}
