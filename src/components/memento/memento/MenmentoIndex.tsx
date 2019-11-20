import * as React from "react";
import Game from './Game';
import GameFile from './GameFile';

export interface IMenmentoIndexProps {}

export default class MenmentoIndex extends React.Component<
    IMenmentoIndexProps
> {
    componentDidMount(){
        //当对象需要保存/加载某一时刻的状态时（如游戏的save/load）可以考虑使用 备忘录模式
        //特点
        //通过保存对象之前的状态来使对象可以恢复到之前的样子
        //又称为 快照模式
        //备忘录模式与命令模式常常可以一同使用

        //创建游戏
        let game = new Game("星黛露");
        //创建游戏数据（提供存档，读档）
        let gameFile = new GameFile();
        //打怪
        game.killMonster();
        //存档
        gameFile.saveGameFile(1,game.createGameFile());

        game.killMonster();
        game.killMonster();
        game.killMonster();

        gameFile.saveGameFile(2,game.createGameFile());
        //读档
        gameFile.loadGameFile(1);
        game.killMonster();
        game.killMonster();
        gameFile.loadGameFile(2);
        
    }
    public render() {
        return (
            <div>
                <h2>新版 游戏存，读档案例</h2>
                <ul>
                    <li>一个游戏里有角色</li>
                    <li>角色有生命值，打怪后会扣除一定量生命值</li>
                    <li>随时可以进行存档，存档有多个，都可以用来保存当前角色和生命值</li>
                    <li>
                        当打怪后扣至0血时，提示死亡
                    </li>
                </ul>
            </div>
        );
    }
}
