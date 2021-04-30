import IGirl from "./interface/IGirl";
export default class Girl implements IGirl {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
