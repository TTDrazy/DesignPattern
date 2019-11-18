import FoodEnum from "./FoodEnum";
//菜单
export default class Order {
    //菜单内容
    private foodList: FoodEnum[] = [];
    //添加菜品
    addFood(food: FoodEnum) {
        console.log(`您在菜单中添加了：${food}~`);
        this.foodList!.push(food);
    }
    //删除菜品
    removeFood(food: FoodEnum) {
        console.log(`您从菜单中删除了：${food}~`);
        let newFoodList = this.foodList!.filter(item => item !== food);
        this.foodList = newFoodList;
    }
    //获取菜单
    getFoodList(){
        return this.foodList;
    }
}
