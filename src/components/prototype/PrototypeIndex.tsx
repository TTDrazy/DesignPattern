import * as React from "react";
import Person from "./Person";
import ClonePerson from './ClonePerson';

export interface IPrototypeIndexProps {}

export default class PrototypeIndex extends React.Component<
    IPrototypeIndexProps
> {
    componentDidMount() {
        let userMayige = new Person('马怡歌',20,'女');
        console.log('本体：');
        console.log(userMayige);
        //这里为浅拷贝，将引用指向了同一块地址，因此该块地址改变后所有引用他的地方都会发生改变
        let cloneUserMayige = userMayige;
        console.log('克隆人：');
        console.log(cloneUserMayige);
        //验证直接赋值为浅拷贝
        cloneUserMayige.name = '克隆的马怡歌';
        console.log('克隆人：');
        console.log(cloneUserMayige);
        console.log('本体：');
        console.log(userMayige);
        //应用了新的克隆方法
        let userDrazy = new Person('Drazy',20,'女');
        console.log('本体：');
        console.log(userDrazy);
        //实现了深拷贝，分别指向了两块地址，修改任一不会互相影响
        let cloneUserDrazy = ClonePerson.clone(userDrazy);
        console.log('克隆人：');
        console.log(cloneUserDrazy);
        cloneUserDrazy.name = '克隆的Drazy';
        console.log('克隆人：');
        console.log(cloneUserDrazy);
        console.log('本体：');
        console.log(userDrazy);   
    }
    public render() {
        return (
            <div>
                <h2 style={{ textAlign: "left" }}>克隆人案例</h2>
            </div>
        );
    }
}
