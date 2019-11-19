import SoftWare from './SoftWare';
//抽象类（Abstraction) 
//定义抽象类的接口
//该接口中定义如何使用 Implementor 接口类型对象的方法
export default abstract class ABSPhone{
    model:string;
    operatingSystem : string;
    constructor(model:string,operatingSystem : string){
        this.model = model;
        this.operatingSystem = operatingSystem;
    }
    addSoftware(software: SoftWare): void {
        let {type,name} = software;
        console.log(`${this.operatingSystem}的${this.model}手机安装了:${type}-${name}！`);
    }
    removeSoftware(software: SoftWare): void {
        let {type,name} = software;
        console.log(`${this.operatingSystem}的${this.model}手机卸载了:${type}-${name}！`);
    }
}