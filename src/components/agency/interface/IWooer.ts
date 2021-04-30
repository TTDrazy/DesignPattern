import IGirl from "./IGirl";
import IGiveGift from "./IGiveGift";

export default interface IWooer extends IGiveGift {
    // 想要追求的女孩
    girl: IGirl;
}
