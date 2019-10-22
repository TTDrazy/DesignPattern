import * as React from "react";
import Sun from './Sun';
import Moon from './Moon';

export interface ISingletonIndexProps {}

export default class SingletonIndex extends React.Component<
    ISingletonIndexProps
> {
    componentDidMount() {
        //饿汉模式
        let sun1 = Sun.getSun();
        let sun2 = Sun.getSun();
        if(sun1 === sun2){
            console.log('太阳是一样哒~');
        }else{
            console.log("太阳可是不一样的哦~");
        }
        //懒汉模式
        let moon1 = Moon.getMoon();
        let moon2 = Moon.getMoon();
        if(moon1 === moon2){
            console.log('月亮是一样哒~');
        }else{
            console.log("月亮可是不一样的哦~");
        }
    }
    public render() {
        return (
            <div>
                <h2>多个太阳 和 月亮案例</h2>
            </div>
        );
    }
}
