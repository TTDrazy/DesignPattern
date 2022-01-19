/*
 * @Author: Drazy
 * @Date: 2022-01-04 09:45:32
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 11:24:13
 */
import * as React from 'react';
import Context from './bossHeart/Context';
import IAbstractExpression from './interface/IAbstractExpression';
import NonterminalExpression from './bossHeart/NonterminalExpression';
import TerminalExpression from './bossHeart/TerminalExpression';
import IContext from './interface/IContext';
import PlayContext from './musicInterpreter/PlayContext';
import Scale from './musicInterpreter/Scale';
import Note from './musicInterpreter/Note';
import Speed from './musicInterpreter/Speed';

export interface IInterpreterIndexProps {
}

export default class InterpreterIndex extends React.Component<IInterpreterIndexProps> {
  constructor(props: IInterpreterIndexProps) {
    super(props)
    console.log('%c------------ 解释器模式 ------------', 'color:red')

    console.log('%c------ 读懂老板的心案例 ------', 'color:blue')
    const context = new Context()
    const list: IAbstractExpression[] = []

    list.push(new TerminalExpression())
    list.push(new NonterminalExpression())
    list.push(new TerminalExpression())
    list.push(new TerminalExpression())

    list.map((item: IAbstractExpression) => {
      item.interpreter(context);
    })

    console.log('%c------ 音乐解释器案例 ------', 'color:blue')

    const musicContext: IContext = new PlayContext()
    // 音乐-《上海滩》
    console.log("%c《上海滩》",'color:purple')

    musicContext.setInput('T 500 O 2 E 0.5 G 0.5 A 3 E 0.5 G 0.5 D 3 E 0.5 G 0.5 A 0.5 O 3 C 1 O 2 A 0.5 G 1 C 0.5 E 0.5 D 3')
    let musicExpression: IAbstractExpression | null = null
    try {
      while (musicContext.getInput().length > 0) {
        let str: string = musicContext.getInput().substring(0, 1)
        switch (str) {
          case 'O':
            musicExpression = new Scale()
            break
          case 'C':
          case 'D':
          case 'E':
          case 'F':
          case 'G':
          case 'A':
          case 'B':
          case 'P':
            musicExpression = new Note()
            break
          case 'T':
            musicExpression = new Speed()
            break
        }
        musicExpression && musicExpression.interpreter(musicContext)
      }
    } catch (exception) {
      console.log(exception)
    }
  }
  public render() {
    return (
      <div>
        <h2>读懂老板的心案例</h2>
        <h2>音乐解释器案例</h2>
      </div>
    );
  }
}
