import * as React from "react";
import App from "../../App";
import { InputNumber, Select, Button } from "antd";

//需要 单价 数量 折扣 总价
interface IShoppingCartProps {
    singlePrice:number;
    amount:number;
}
interface IShoppingCartState {
    singlePrice: number;
    amount: number;
    discount: string;
    total: number;
}
export default class ShoppingCart extends React.Component<
    IShoppingCartProps,
    IShoppingCartState
> {
    constructor(props: IShoppingCartProps) {
        super(props);
        this.state = {
            singlePrice: 199.99,
            amount: 1,
            discount: '9.5折',
            total: 0
        };
    }
    componentDidMount(){
        this.setState({
            singlePrice:this.props.singlePrice,
            amount:this.props.amount
        })
    }
    onChange = (value: number | undefined) => {
        this.setState({
            amount: Number(value)
        });
    };
    handleChangeSelect = (value: any) => {
        this.setState({
            discount: value
        });
    };
    getTotal = () => {
        let { singlePrice, amount, discount, total } = this.state;
        const originalPrice = singlePrice * amount;
        if (originalPrice >= 500) {
            if (originalPrice - 80 < originalPrice * 0.95) {
                total = originalPrice - 80;
                discount = '满500-80元';
            } else {
                total = originalPrice * 0.95;
                discount = '9.5折';
            }
        } else if (originalPrice >= 200) {
            if (originalPrice - 30 < originalPrice * 0.95) {
                total = originalPrice - 30;
                discount = '满200-30元';
            } else {
                total = originalPrice * 0.95;
                discount = '9.5折';
            }
        } else if (originalPrice >= 100) {
            if (originalPrice - 10 < originalPrice * 0.95) {
                total = originalPrice - 10;
                discount = '满100-10元';
            } else {
                total = originalPrice * 0.95;
                discount = '9.5折';
            }
        }
        total = Math.floor(total * 100) / 100 
        this.setState({
            discount,
            total
        });
    };
    public render() {
        const { Option } = Select;
        const { singlePrice, amount, discount, total } = this.state;    
        return (
            <div style={{float:'left',marginRight:'30px'}}>
                <h4 style={{ textAlign: "center" }}>{this.props.children}</h4>
                单价：
                <InputNumber
                    name="singlePrice"
                    disabled
                    value={singlePrice}
                    formatter={value =>
                        `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
                />
                <br></br>
                <br></br>
                数量：
                <InputNumber
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
                    <Option value='9.5折'>9.5折</Option>
                    <Option value='满100-10元'>满100-10元</Option>
                    <Option value='满200-30元'>满200-30元</Option>
                    <Option value='满500-80元'>满500-80元</Option>
                </Select>
                <br></br>
                <br></br>
                <Button type="primary" onClick={this.getTotal}>
                    计算最优折扣
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
