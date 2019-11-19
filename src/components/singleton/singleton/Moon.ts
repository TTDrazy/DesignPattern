export default class Moon {
    //懒汉模式
    //在第一次被引用时，才会将自己实例化
    private static specificMoon: Moon;
    //防止 new Sun()存在
    private constructor() {}
    static getMoon(): Moon {
        console.log(this.specificMoon);
        if (this.specificMoon == undefined) {
            this.specificMoon = new Moon();
        }
        return this.specificMoon;
    }
}
