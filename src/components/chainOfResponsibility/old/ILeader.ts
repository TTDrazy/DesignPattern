import Staff from './Staff';

export interface ILeader{
    //领导姓名
    name:string;
    //职务
    duty:string;
    //审批(员工信息)
    agree(staff:Staff):void;
}