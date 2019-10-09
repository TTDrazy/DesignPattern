import * as React from "react";
import ShoppingCart from "./ShoppingCart";
import App from "../../App";

interface IGoodsProps {}
interface IGoodsState {}

export default class Goods extends React.Component<IGoodsProps, IGoodsState> {
    public render() {
        return (
            <App>
                <h2 style={{ textAlign: "left" }}>购物车案例</h2>
                <br></br>
                <ShoppingCart singlePrice={199.99} amount={3}>商品1</ShoppingCart>
                <ShoppingCart singlePrice={99.99} amount={2}>商品2</ShoppingCart>
            </App>
        );
    }
}
