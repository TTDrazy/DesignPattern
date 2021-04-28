import ICoach from "./interface/ICoach";

export default class Coach implements ICoach {
    pause() {
        console.log("我是教练，我叫了暂停！");
    }
}
