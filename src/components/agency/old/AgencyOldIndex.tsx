import * as React from "react";
import Girl from "./Girl";
import Wooer from "./Wooer";

export interface IAgencyIndexProps {}

export default class AgencyIndex extends React.Component<IAgencyIndexProps> {
    componentDidMount() {
        const gril = new Girl("李娇娇");
        const wooer = new Wooer(gril);
        wooer.giveFlowers();
        wooer.giveChocolete();
        wooer.giveDoll();
    }
    public render() {
        return (
            <div>
                <h2>追求女生</h2>
            </div>
        );
    }
}
