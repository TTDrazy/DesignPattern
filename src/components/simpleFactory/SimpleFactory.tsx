import * as React from "react";
import App from "../../App";
import { Input, Select, Button } from "antd";
import CalculateFactory from "./CalculateFactory";

interface IState {
    number1: number;
    number2: number;
    result: number;
    operator: any;
}

export default class SimpleFactory extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            result: 0,
            operator: "+"
        };
    }
    handleChangeInput = (e: any) => {
        if (e.target.name == "number1") {
            this.setState({
                //注意应该将 string 的数字强制类型转换为 number 类型
                number1: Number(e.target.value)
            });
        } else if (e.target.name == "number2") {
            this.setState({
                number2: Number(e.target.value)
            });
        }
    };
    handleChangeSelect = (value: string) => {
        this.setState({
            operator: value
        });
    };
    calculate = () => {
        const { number1, number2, operator } = this.state;
        //运用了简单工厂设计模式
        let result = CalculateFactory.Create(operator).calculate(
            number1,
            number2
        );
        this.setState({
            result: result
        });
    };
    public render() {
        const { Option } = Select;
        const { number1, number2, result, operator } = this.state;
        return (
            <App>
                <h2 style={{textAlign:'left'}}>计算器案例</h2>
                <br></br>
                <br></br>
                <Input
                    style={{ width: 150 }}
                    placeholder="请输入第一个数字"
                    name="number1"
                    value={number1}
                    onChange={this.handleChangeInput}
                />
                <Select
                    defaultValue={operator}
                    style={{ width: 100 }}
                    onChange={this.handleChangeSelect}
                >
                    <Option value="+">+</Option>
                    <Option value="-">-</Option>
                    <Option value="*">*</Option>
                    <Option value="/">/</Option>
                </Select>
                <Input
                    style={{ width: 150 }}
                    placeholder="请输入第二个数字"
                    name="number2"
                    value={number2}
                    onChange={this.handleChangeInput}
                />
                ={result}
                <br></br>
                <br></br>
                <Button type="primary" onClick={this.calculate}>
                    计算
                </Button>
            </App>
        );
    }
}
