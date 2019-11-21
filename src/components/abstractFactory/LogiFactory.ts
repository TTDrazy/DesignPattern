import LogiMouse from "./LogiMouse";
import PcFactory from "./PcFactory";
import Mouse from "./Mouse";
import Keyboard from "./Keyboard";
import LogiKeyboard from "./LogiKeyboard";

export default class LogiFactory extends PcFactory {
    constructor(){
        super('罗技');
    }
    productMouse(): Mouse {
        return new LogiMouse();
    }
    productKeyBoard(): Keyboard {
        return new LogiKeyboard();
    }
}
