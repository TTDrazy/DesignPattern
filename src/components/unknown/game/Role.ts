import Monster from "./Monster";
import GameData from "./GameData";
//角色
export default class Role {
    //昵称
    name: string;
    //生命值
    booldValue: number;
    //游戏数据
    gameData = new GameData(this);
    constructor(name: string) {
        this.name = name;
        this.booldValue = 1000;
    }
    //打怪物
    killMonster(monster: Monster) {
        if (this.booldValue <= 0) {
            console.log('您已经阵亡，不可以再打怪啦。将为您恢复至最近一次存档记录！');
            this.booldValue =  this.gameData.getData();
        } else {
            monster.kill(this);
            console.log('当前血量为'+this.booldValue);
        }
    }
}
