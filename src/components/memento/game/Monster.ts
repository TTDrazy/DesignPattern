import Role from "./Role";

//怪物
export default class Monster {
    name: string;
    constructor(name: string) {
        this.name = name;
        
    }
    //击杀并扣除血量
    kill(role:Role){
        role.booldValue  = role.booldValue - 300;
        console.log(`您已击杀一只${this.name},扣除血量300！`);
    }
}
