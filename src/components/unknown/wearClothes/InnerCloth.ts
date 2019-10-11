import { IClothes } from "./IClothes";
export default class InnerCloth implements IClothes {
    type = '内搭';
    designation: string;
    
    constructor( designation: string) {
        this.designation = designation;
    }
    getClothesInfo() {
        return this.type + "中的" + this.designation;
    }
}