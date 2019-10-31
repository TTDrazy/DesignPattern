import { Observer } from './Observer';
import Subject from './Subject';

//具体观察者
//实现抽象观察者角色所要求的更新接口，以便使自身状态与发布者状态相吻合
export default class Reader extends Observer{
    private userName:string;
    constructor(subject:Subject,userName:string){
        super();
        this.subject = subject;
        this.userName = userName;
        this.subject.addSubscribe(this);
    }

    update(){
        console.log(this.userName+'您订阅的漫画更新啦！');
        if(!!this.subject){
            console.log(this.subject.getState());
        }
    }
}