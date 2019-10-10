import * as React from 'react';
import Shopping from './shopping/Shopping';
import GoingOut from './goingOut/GoingOut';



export default class StrategyIndex extends React.Component<any> {
  public render() {
    return (
      <div>
        <Shopping></Shopping>
        <GoingOut></GoingOut>
      </div>
    );
  }
}
