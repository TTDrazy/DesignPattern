import * as React from "react";
import Board from "./Board";
import Meteorological from "./Meteorological";
import { AttributeUnitEnum } from "./type/AttributeUnitEnum";
import { BoardAttributeEnum } from "./type/BoardAttributeEnum";
import { InforType } from "./type/InforType";

export interface INewExampleIndexProps {}

export default class NewExampleIndex extends React.Component<INewExampleIndexProps> {
    constructor(props: INewExampleIndexProps) {
        super(props);
        const newInfo: InforType[] = [
            { type: BoardAttributeEnum.TEMPERATURE, value: 20, unit: AttributeUnitEnum.TEMPERATURE },
            { type: BoardAttributeEnum.HUMIDITY, value: 35, unit: AttributeUnitEnum.HUMIDITY },
            { type: BoardAttributeEnum.WEATHER, value: "晴", unit: AttributeUnitEnum.WEATHER },
        ];
        const meteorological = new Meteorological(newInfo);

        const board1 = new Board("温度0101", BoardAttributeEnum.TEMPERATURE);
        const board2 = new Board("湿度0101", BoardAttributeEnum.HUMIDITY);
        const board3 = new Board("天气0101", BoardAttributeEnum.WEATHER);
        const board4 = new Board("湿度0102", BoardAttributeEnum.HUMIDITY);

        // 添加一系公告牌类型
        meteorological.addBoard([board1, board2, board3, board4]);
        meteorological.notifyList();
        console.log("--------------------------");
        // 删除一个公告牌
        meteorological.deleteBoard(board2);
        meteorological.notifyList();
    }
    public render() {
        return <h2>2. 气象台更新数据 --&gt; 更新面板</h2>;
    }
}
