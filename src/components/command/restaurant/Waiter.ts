import Order from "./Order";
import FoodEnum from "./FoodEnum";
import Cook from "./Cook";
//服务员
export default class Waiter {
    //创建菜单
    order = new Order();
    //展示菜品
    showOrderDishes() {
        //展示所有菜品
        console.log("服务员：您好，我们的菜品有：");
        for (let food in FoodEnum) {
            console.log(food);
        }
        console.log("您需要点什么菜品呢？");
    }
    //添加菜品
    addFood(food: FoodEnum) {
        console.log("服务员：");
        this.order.addFood(food);
    }
    //移除菜品
    removeFood(food: FoodEnum) {
        console.log("服务员：");
        this.order.removeFood(food);
    }
    //点完菜品了
    finishOrderDishes() {
        console.log("服务员：好的，您已点餐完毕，我将和您确认一次菜单~");
        this.affirmOrderDishes();
    }
    //确认菜单
    affirmOrderDishes() {
        console.log("服务员：我现在和您核对一下菜单");
        let foodList = this.order.getFoodList();
        console.log("您点了：");
        foodList!.map(item => {
            console.log(item);
        });
        console.log("您还需要修改菜单吗？");
    }
    //提交订单
    submitOrderDishes() {
        console.log("服务员：好的，那我们将开始为您烹饪食物了~");
        let foodList = this.order.getFoodList();
        let cook = new Cook();
        cook.cookeTheMeal(foodList);
    }
}
