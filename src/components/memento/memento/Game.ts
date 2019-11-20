import Role from "./Role";
//发起人（Originator)
export default class Game {
    //依赖于 Memento
    role: Role;
    //负责创建一个 Memento，用来记录当前时刻它的内部状态，并可以使用 Memento 恢复内部状态
    constructor(name: string) {
        this.role = new Role(name, 1000);
    }
    //打怪
    killMonster() {
        console.log(`${this.role.name} 去打怪啦~`);
        this.role.healthValue -= Math.ceil(Math.random() * 100);
        if(this.role.healthValue > 0 ){
            console.log(`战斗完毕，${this.role.name} 的剩余血量为${this.role.healthValue}~`);
        }else{
            this.role.healthValue = 0;
            console.log(`${this.role.name} 已经阵亡！`);
        }
    }
    //创建 Role
    //可根据需要决定 Memento 存储 Originator 的哪些内部状态
    createGameFile(): Role {
        return new Role(this.role.name, this.role.healthValue);
    }
}
