import Role from "./Role";
//游戏数据
export default class GameData {
    role: Role;
    booldValue: number | undefined;
    constructor(role: Role) {
        this.role = role;
    }
    //存档
    saveData() {
        this.booldValue = this.role.booldValue;
        console.log(
            `${this.role.name}您已存档，当前血量为${this.booldValue}！`
        );
    }
    //读档
    getData(): number {
        console.log(`${this.role.name}在此读档中，血量为${this.booldValue}！`);
        return this.booldValue!;
    }
}
