import FoodEnum from './FoodEnum';
//厨师
export default class Cook{
    //接受菜单，开始制作
    cookeTheMeal(foodList:FoodEnum[]){
        console.log('厨师：');
        foodList.map((item)=>{
            console.log(`${item}做好啦~`);
        })
    }
}