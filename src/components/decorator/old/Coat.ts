import { IClothes } from "./IClothes";
export default class Coat implements IClothes {
    type = '外套';
    designation: string;
    
    constructor( designation: string) {
        this.designation = designation;
    }
    getClothesInfo() {
        return this.type + "中的" + this.designation;
    }
}
