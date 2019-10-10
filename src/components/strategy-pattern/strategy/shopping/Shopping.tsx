import * as React from "react";
import { Input, Select, Button } from "antd";
import ShoppingFactory from "./ShoppingFactory";

const { Option } = Select;
//需要 单价 数量 折扣 总价
interface IShoppingProps {}
export default class Shopping extends React.Component<IShoppingProps, any> {
    constructor(props: IShoppingProps) {
        super(props);
        this.state = {
            singlePrice: 0,
            amount: 1,
            discount: "9.5折",
            total: 0
        };
    }
    onChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleChangeSelect = (value: any) => {
        this.setState({
            discount: value
        });
    };
    getTotal = () => {
        let { singlePrice, amount, discount, total } = this.state;
        //将业务逻辑抽出去写
        let context = ShoppingFactory.getStrategy(discount);
        //加感叹号表示 context 不为空
        total = context!.calculate(singlePrice, amount);
        //保留总价的2位小数
        total = Math.floor(total * 100) / 100;
        this.setState({
            total
        });
    };
    public render() {
        const { singlePrice, amount, discount, total } = this.state;
        return (
            <div style={{ float: "left", marginRight: "30px" }}>
                <h2 style={{ textAlign: "left" }}>购物车案例</h2>
                <br></br>
                <h4 style={{ textAlign: "center" }}>{this.props.children}</h4>
                单价：￥
                <Input
                    name="singlePrice"
                    value={singlePrice}
                    onChange={this.onChange}
                />
                <br></br>
                <br></br>
                数量：
                <Input
                    name="amount"
                    min={1}
                    max={999}
                    value={amount}
                    onChange={this.onChange}
                />
                <br></br>
                <br></br>
                折扣：
                <Select
                    value={discount}
                    style={{ width: 120 }}
                    onChange={this.handleChangeSelect}
                >
                    <Option value="9.5折">9.5折</Option>
                    <Option value="满100-10元">满100-10元</Option>
                    <Option value="满200-30元">满200-30元</Option>
                    <Option value="满500-80元">满500-80元</Option>
                </Select>
                <br></br>
                <br></br>
                <Button type="primary" onClick={this.getTotal}>
                    计算折扣
                </Button>
                <br></br>
                <br></br>
                总价：
                <div>
                    <span>￥</span>
                    <span>{total}</span>
                </div>
            </div>
        );
    }
}
