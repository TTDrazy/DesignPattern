import * as React from "react";
import Girl from "./Girl";
import Proxy from "./Proxy";

export interface IAgencyIndexProps {}

export default class AgencyIndex extends React.Component<IAgencyIndexProps> {
    componentDidMount() {
        const gril = new Girl("李娇娇");
        const proxy = new Proxy(gril);
        proxy.giveFlowers();
        proxy.giveDoll();
        proxy.giveChocolete();
    }
    public render() {
        return (
            <div>
                <h2>追求女生</h2>
            </div>
        );
    }
}
 