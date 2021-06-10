import IBoard from "./interface/IBoard";
import IMeteorological from "./interface/IMeteorological";
import { InforType } from "./type/InforType";

export default class Meteorological implements IMeteorological {
    boardList: IBoard[] = [];
    notifyInfo: InforType[] = [];
    constructor(notifyInfo: InforType[]) {
        this.notifyInfo = notifyInfo;
    }
    addBoard(board: IBoard[]): void {
        this.boardList = [...this.boardList, ...board];
    }
    deleteBoard(board: IBoard): void {
        let removeIndex = this.boardList.indexOf(board);
        this.boardList.splice(removeIndex, 1);
    }
    notifyList(): void {
        this.boardList.forEach((boardItem: IBoard) => {
            this.notifyInfo.forEach((inforItem: InforType) => {
                // 如果该块公告牌需要更新就执行公告牌的更新方法
                if (boardItem.type === inforItem.type) {
                    boardItem.updateBoard(inforItem.value, inforItem.unit);
                }
            });
        });
    }
}
