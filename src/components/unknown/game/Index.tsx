import * as React from "react";
import Role from "./Role";
import Monster from "./Monster";

export interface IGameIndexProps {}

export default class GameIndex extends React.Component<IGameIndexProps> {
    componentDidMount() {
        //创建角色和怪兽
        let stellalou = new Role("星黛露");
        let monster1 = new Monster("大猩猩");
        //打怪去了
        stellalou.killMonster(monster1);
        //存档
        stellalou.gameData.saveData();
        //打怪
        stellalou.killMonster(monster1);
        //读档
        stellalou.gameData.getData();
        //存档
        stellalou.gameData.saveData();
        //打怪
        stellalou.killMonster(monster1);
        //打怪
        stellalou.killMonster(monster1);
        //打怪
        stellalou.killMonster(monster1);
    }
    public render() {
        return (
            <div>
                <h2>旧版 游戏存，读档案例</h2>
                <ul>
                    <li>一个游戏里有角色</li>
                    <li>角色有生命值，打怪后会扣除一定量生命值</li>
                    <li>随时可以进行存档，来保存当前角色和生命值</li>
                    <li>
                        当打怪后扣至0血时，提示死亡后，自动读取最近一次存档；如没有存档，则提示游戏失败
                    </li>
                </ul>
            </div>
        );
    }
}
