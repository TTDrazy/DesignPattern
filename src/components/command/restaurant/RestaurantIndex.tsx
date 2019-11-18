import * as React from 'react';
import Customer from './Customer';
import FoodEnum from './FoodEnum';

export interface IRestaurantIndexProps {
}

export default class RestaurantIndex extends React.Component<IRestaurantIndexProps> {
    componentDidMount(){
        let customer = new Customer();
        customer.orderDishes();
        //添加食物
        customer.addFood(FoodEnum.vegetables);
        customer.addFood(FoodEnum.rice);
        customer.addFood(FoodEnum.seafood);
        customer.addFood(FoodEnum.cake);
        //暂时不点了
        customer.finishOrderDishes();
        //修改订单
        customer.removeFood(FoodEnum.rice);
        //暂时不点了
        customer.finishOrderDishes();
        //确认订单
        customer.affirmOrderDishes();
    }
  public render() {
    return (
      <div>
        <h2>旧版 餐厅点餐案例</h2>
                <ul>
                    <li>一家餐厅有服务员，厨师</li>
                    <li>顾客点菜时需要叫服务员，服务员提供一份菜单</li>
                    <li>顾客选择菜品后，服务员和顾客确认菜单</li>
                    <li>菜单如果确认成功后交于厨师制作，如果没有确认成功再次让顾客选择，直至确认</li>
                </ul>
      </div>
    );
  }
}
