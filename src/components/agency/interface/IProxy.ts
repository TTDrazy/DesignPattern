import IGiveGift from "./IGiveGift";
import IWooer from "./IWooer";

export default interface IProxy extends IGiveGift {
    // 委托人
    mandator: IWooer;
}
