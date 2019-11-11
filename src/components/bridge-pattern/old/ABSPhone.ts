import SoftWare from './SoftWare';
export default abstract class ABSPhone{
    model:string;
    operatingSystem : string;
    constructor(model:string,operatingSystem : string){
        this.model = model;
        this.operatingSystem = operatingSystem;
    }
    addSoftware(software: SoftWare): void {
        let{model,operatingSystem} = this;
        let {type,name} = software;
        console.log(`${operatingSystem}的${model}手机安装了:${type}-${name}！`);
    }
    removeSoftware(software: SoftWare): void {
        let{model,operatingSystem} = this;
        let {type,name} = software;
        console.log(`${operatingSystem}的${model}手机卸载了:${type}-${name}！`);
    }
}