import * as React from "react";
import Cook from './Cook';
import BakeMutton from './BakeMutton';
import BakeFish from './BakeFish';
import FriedNoodles from './FriedNoodles';
import Waiter from './Waiter';

export interface ICommandIndexProps {}

export default class CommandIndex extends React.Component<ICommandIndexProps> {
    componentDidMount(){
        //将行为请求和行为实现解耦(即：将点菜和厨师烹饪食物解耦)

        //营业前的准备
            //设置厨师
        let cook = new Cook();
            //设置服务员
        let waiter = new Waiter();
            //设置由一位厨师烹饪所有食物
        let bakeMutton = new BakeMutton(cook);
        let bakeFish = new BakeFish(cook);
        let friedNoodles = new FriedNoodles(cook);
        
        //营业
        waiter.addFood(bakeMutton,3);
        waiter.addFood(bakeFish,1);
        waiter.addFood(friedNoodles,1);
        waiter.removeFood(bakeMutton);
        waiter.addFood(bakeMutton,5);
        //通知做菜
        waiter.notify();
    }
    public render() {
        return (
            <div>
                <h2>新版 餐厅点餐案例</h2>
                <ul>
                    <li>一家餐厅有服务员，厨师</li>
                    <li>顾客点菜时需要叫服务员，服务员提供一份菜单</li>
                    <li>顾客选择菜品后，服务员和顾客确认菜单</li>
                    <li>
                        菜单如果确认成功后交于厨师制作，如果没有确认成功再次让顾客选择，直至确认
                    </li>
                </ul>
            </div>
        );
    }
}
