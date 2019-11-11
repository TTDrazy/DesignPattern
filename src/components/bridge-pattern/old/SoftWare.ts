//抽象的软件类
export default abstract class SoftWare{
    name:string;
    type:string;
    constructor(name:string,type:string){
        this.name = name;
        this.type = type;
    }
}