/*
 * @Author: Drazy
 * @Date: 2021-09-02 14:50:29
 * @LastEditors: Drazy
 * @LastEditTime: 2021-09-03 11:53:23
 * @Description: 建造者设计模式调用主页
 */
import * as React from "react";
import ThinPerson from './ThinPerson';
import FatPerson from './FatPerson';
import PersonDirector from './PersonDirector';

export interface IBuilderIndexProps { }

export default class BuilderIndex extends React.Component<IBuilderIndexProps> {
    constructor(props: IBuilderIndexProps) {
        super(props)
        const thinPersonBuilder = new ThinPerson()
        const fatPersonBuilder = new FatPerson()
        const thinDirector = new PersonDirector(thinPersonBuilder)
        const fatDirector = new PersonDirector(fatPersonBuilder)

        thinDirector.combination()
        fatDirector.combination()
    }
    public render() {
        return (
            <div>
                <h2>建造者设计模式</h2>
                <hr />
                <h2>创建胖、瘦小人案例</h2>
            </div>
        );
    }
}
