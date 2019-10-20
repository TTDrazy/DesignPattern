import { IPerson } from './IPerson';
import { IClothes } from './IClothes';
export default class Person implements IPerson {
    
    name:string;
    clothesList:Array<string>;
    
    constructor(name:string){
        this.name = name;
        this.clothesList = [];
    }
    wearClothes(clothes:IClothes){
        this.clothesList.push(clothes.getClothesInfo());
        let clothesNumebr = this.clothesList.length;
        console.log(this.name+'穿了'+this.clothesList[clothesNumebr-1]);
    }
    showDressUp() {
        let hasClothes = '';
        this.clothesList.map((item)=>{
            hasClothes = hasClothes+','+item;
        })
        console.log(this.name+'穿了好多衣服：'+hasClothes);
    }
}