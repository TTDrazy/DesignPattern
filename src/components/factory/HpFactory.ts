import MouseFactory from './MouseFactory';
import HpMouse from './HpMouse';

export default class HpFactory extends MouseFactory{
   constructor(){
       super('惠普');
   }
    productMouse(){
       return new HpMouse();
   }
}