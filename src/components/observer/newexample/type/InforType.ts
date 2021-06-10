import { BoardAttributeEnum } from "./BoardAttributeEnum";
import { AttributeUnitEnum } from "./AttributeUnitEnum";

export type InforType = {
    type: BoardAttributeEnum;
    value: number | string;
    unit: AttributeUnitEnum;
};
