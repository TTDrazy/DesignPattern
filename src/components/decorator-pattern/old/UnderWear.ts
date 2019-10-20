import { IClothes } from "./IClothes";
export default class UnderWear implements IClothes {
    type = '内衣';
    designation: string;
    
    constructor( designation: string) {
        this.designation = designation;
    }
    getClothesInfo() {
        return this.type + "中的" + this.designation;
    }
}