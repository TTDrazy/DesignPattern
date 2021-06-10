import { AttributeUnitEnum } from "../type/AttributeUnitEnum";
import { BoardAttributeEnum } from "../type/BoardAttributeEnum";

// 公告牌的接口
export default interface IBoard {
    // 公告牌名称
    name: string;
    // 公告牌类型
    type: BoardAttributeEnum;
    // 更新公告牌内容
    updateBoard(value: number | string, unit: AttributeUnitEnum): void;
}
