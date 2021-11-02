import * as React from "react";
// import { Input, Button } from "antd";
import Person from "./Person";
import Coat from "./Coat";
import InnerCloth from "./InnerCloth";
import UnderWear from "./UnderWear";

interface IWearClothesIndexProps {}

interface IWearClothesIndexStates {}
export default class WearClothesIndex extends React.Component<
    IWearClothesIndexProps,
    IWearClothesIndexStates
> {
    componentDidMount() {
        let person = new Person("马怡歌");
        person.wearClothes(new Coat("牛仔服"));
        person.wearClothes(new UnderWear("内裤"));
        person.wearClothes(new InnerCloth("长裙"));
        person.showDressUp();
    }

    public render() {
        return <div>
            <h2>穿衣服案例</h2>
        </div>;
    }
}
