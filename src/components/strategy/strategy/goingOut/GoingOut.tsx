import * as React from "react";
import { Input, Select, Button } from "antd";
import GoWayFactory from './GoWayFactory';

const { Option } = Select;
interface IGoingOutStates {
    kilometre: number;
    goWay: string;
    price: number;
}

export default class GoingOut extends React.Component<any, IGoingOutStates> {
    constructor(props: any) {
        super(props);
        this.state = {
            kilometre: 0,
            goWay: "公交车",
            price: 0
        };
    }
    handleChange = (e: any) => {
        this.setState({
            kilometre: e.target.value
        });
    };
    handleSelectChange = (value: string) => {
        this.setState({
            goWay: value
        });
    };
    handleClick = () => {
        const { kilometre, goWay} = this.state;
        let context = GoWayFactory.getPrice(goWay);
        let price = context.calculate(kilometre);
        this.setState({
            price:price
        })
    };
    public render() {
        const { kilometre, goWay, price } = this.state;
        return (
            <div style={{ float: "left", marginRight: "30px" }}>
                <h2 style={{ textAlign: "left" }}>出行方式案例</h2>
                <br></br>
                公里数：
                <Input
                    name="kilometre"
                    value={kilometre}
                    onChange={this.handleChange}
                ></Input>
                <br></br>
                <br></br>
                出行方式：
                <br></br>
                <Select
                    value={goWay}
                    style={{ width: 300 }}
                    onChange={this.handleSelectChange}
                >
                    <Option value="公交车">公交车</Option>
                    <Option value="自行车">自行车</Option>
                    <Option value="出租车">出租车</Option>
                    
                </Select>
                <br></br>
                <br></br>
                <Button type="primary" onClick={this.handleClick}>
                    计算价格
                </Button>
                <br></br>
                <br></br>
                价格：
                <div>
                    <span>￥</span>
                    <span>{price}</span>
                </div>
            </div>
        );
    }
}
