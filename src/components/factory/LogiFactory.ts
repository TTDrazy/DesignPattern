import MouseFactory from './MouseFactory';
import LogiMouse from './LogiMouse';

export default class LogiFactory extends MouseFactory{
   constructor(){
       super('罗技');
   }
   productMouse(){
       return new LogiMouse();
   }
}