import Role from './Role';
//管理者（Caretaker)
export default class GameFile{
    //负责保存 Memento
    roleMapList = new Map();
    //存档
    //聚合了 Memento
    saveGameFile(gameFileNumber:number,role:Role){
        this.roleMapList.set(gameFileNumber,role);
        console.log(`存档${gameFileNumber}已经保存！`);
    }
    //读档
    loadGameFile(gameFileNumber:number):void{
        console.log(`正在恢复存档${gameFileNumber}中......`);
        let healthVlue = this.roleMapList.get(gameFileNumber).healthValue;
        console.log(`恢复完成，您的当前生命值为：${healthVlue}~`);
    }
}