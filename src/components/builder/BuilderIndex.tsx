/*
 * @Author: Drazy
 * @Date: 2021-09-02 14:50:29
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-02 17:58:34
 * @Description: 建造者设计模式调用主页
 */
import * as React from "react";
import Person from './Person'

export interface IBuilderIndexProps { }

export default class BuilderIndex extends React.Component<IBuilderIndexProps> {
    constructor(props:IBuilderIndexProps){
        super(props)
        const person = new Person()
        person.draw()
    }
    public render() {
        return (
            <div>
                <h2>建造者设计模式</h2>
            </div>
        );
    }
}
