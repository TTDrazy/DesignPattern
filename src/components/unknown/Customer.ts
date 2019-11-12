import Waiter from './Waiter';
import FoodEnum from './FoodEnum';
//顾客
export default class Customer{
    waiter  = new Waiter();
    //点菜
    orderDishes(){
        console.log('顾客：服务员，点菜！');
        //服务员展示菜品
        this.waiter.showOrderDishes();
    }
    
    //修改菜单
        //添加菜品
    addFood(food:FoodEnum){
        console.log(`顾客：我需要${food}`);
        this.waiter.addFood(food);
    }
        //移除菜品
    removeFood(food:FoodEnum){
        console.log(`顾客：我不想要${food}了`);
        this.waiter.removeFood(food);
    }
    //完成订单
    finishOrderDishes(){
        console.log('顾客：好的，差不多了！');
        this.waiter.finishOrderDishes();
    }
    //确认订单
    affirmOrderDishes(){
        console.log('顾客：不改了，就这些了！');
        this.waiter.submitOrderDishes();
    }
}