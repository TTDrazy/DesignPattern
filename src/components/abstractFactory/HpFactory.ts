import PcFactory from "./PcFactory";
import Mouse from "./Mouse";
import Keyboard from "./Keyboard";
import HpMouse from './HpMouse';
import HpKeyboard from "./HpKeyboard";

export default class HpFactory extends PcFactory {
    constructor(){
        super('惠普');
    }
    productMouse(): Mouse {
        return new HpMouse();
    }
    productKeyBoard(): Keyboard {
        return new HpKeyboard();
    }
}
