import * as React from "react";
import Person from "./Person";
import Coat from "./Coat";
import InnerCloth from "./InnerCloth";
import UnderWear from "./UnderWear";

export interface IWearClothesDecorateProps {}

export default class WearClothesDecorate extends React.Component<
    IWearClothesDecorateProps
> {
    componentDidMount() {
        let person = new Person('马怡歌');
        
        console.log("---第一种穿法---");
        let coat = new Coat();
        let innerCloth = new InnerCloth();
        let underWear = new UnderWear();
        underWear.wear(person);
        innerCloth.wear(underWear);
        coat.wear(innerCloth);
        coat.show();

        console.log('---第二种穿法---');
        coat.wear(person);
        innerCloth.wear(coat);
        innerCloth.show();
    }
    public render() {
        return (
            <div>
                <h2>穿衣服案例</h2>
            </div>
        );
    }
}
