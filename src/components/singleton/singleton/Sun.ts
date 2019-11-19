export default class Sun {
    //饿汉模式
    //静态初始化的方式是在自己被加载时就将自己实例化
    private static readonly specificSun = new Sun();
    //readonly : 只能在静态初始化期间或在类构造函数中分配变量

    //防止 new Sun()存在
    private constructor() {}

    static getSun(): Sun {
        console.log(this.specificSun);
        return this.specificSun;
    }
}
