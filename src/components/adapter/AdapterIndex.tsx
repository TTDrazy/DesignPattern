import * as React from "react";
import Athlete from "./Athlete";
import Coach from "./Coach";
import { DutyEnum } from "./enum/DutyEnum";
import Translator from "./Translator";

export interface IAdapterIndexProps {}

export default class AdapterIndex extends React.Component<IAdapterIndexProps> {
    componentDidMount() {
        const coach = new Coach();
        const bdr = new Athlete("巴蒂尔", DutyEnum.FORWARD);
        const mkgrid = new Athlete("麦克格雷迪", DutyEnum.FULL_BACK);
        const ym = new Athlete("姚明", DutyEnum.CENTRE_FORWARD);
        coach.pause();
        bdr.attack();
        mkgrid.attack();
        // 教练直接和姚明讲，姚明听不懂，所以需要翻译
        // ym.attack();
        // ym.defense();
        const ymTranslator = new Translator(ym);
        ymTranslator.transAttack();
        ymTranslator.transDefense();
    }
    public render() {
        return (
            <div>
                <h2>打篮球案例</h2>
                <ul>
                    <li>有一场比赛，教练叫暂停时给后卫、中锋、前锋分配进攻和防守任务</li>
                </ul>
            </div>
        );
    }
}
