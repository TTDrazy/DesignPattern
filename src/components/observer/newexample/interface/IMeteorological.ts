import { InforType } from "../type/InforType";
import IBoard from "./IBoard";
// 气象台的接口

export default interface IMeteorological {
    // 需要通知的公告牌列表
    boardList: IBoard[];
    // 需要更新的信息列表
    notifyInfo: InforType[];
    // 添加一/多个公告牌
    addBoard(board: IBoard | IBoard[]): void;
    // 删除一/多个公告牌
    deleteBoard(board: IBoard | IBoard[]): void;
    // 通知公告牌列表内所有的公告牌更新
    notifyList(): void;
}
