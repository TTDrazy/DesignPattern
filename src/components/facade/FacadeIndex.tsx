import * as React from "react";
import Fund from "./Fund";

export interface IFacadeIndexProps {}

export default class FacadeIndex extends React.Component<IFacadeIndexProps> {
    constructor(props: IFacadeIndexProps) {
        super(props);
        const fund = new Fund();
        fund.purchase();
        console.log("----------------------");
        fund.redemption();
    }
    public render() {
        return (
            <div>
                <h2>股民炒股案例</h2>
            </div>
        );
    }
}
