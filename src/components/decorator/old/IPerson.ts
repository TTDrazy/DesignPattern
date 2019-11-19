import { IClothes } from "./IClothes";

export interface IPerson{
    name:string;
    wearClothes(clothes:IClothes):void;
    showDressUp():void;
}