//备忘录（Memento)
export default class Role{
    //负责存储 Originator 的内部状态
    name:string;
    healthValue:number;
    //并可以防止除 Originator 以外的其他类访问 Memento
    constructor(name:string,healthValue:number){
        this.name = name;
        this.healthValue = healthValue;
    }
}