import IBoard from "./interface/IBoard";
import { BoardAttributeEnum } from "./type/BoardAttributeEnum";
import { AttributeUnitEnum } from "./type/AttributeUnitEnum";
export default class Board implements IBoard {
    name: string = "";
    type: BoardAttributeEnum;
    // unit:AttributeUnitEnum
    constructor(name: string, type: BoardAttributeEnum) {
        this.name = name;
        this.type = type;
        // this.unit =
        // this.initUnit();
    }
    // private initUnit() {
    //     for (let item in AttributeUnitEnum) {

    //     }
    // }
    updateBoard(value: number | string, unit: AttributeUnitEnum): void {
        console.log(`${this.type}的${this.name}公告牌更新了，更新数据为${value}${unit}`);
    }
}
