import IStudent from "./interface/IStudent";

export default abstract class ABSStudent implements IStudent {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    copyTestQuestionOne(): void {
        console.log(`我是学生${this.name},我抄了试题1`);
        console.log(`答案是:${this.setAnswerOne()}`);
    }
    copyTestQuestionTwo(): void {
        console.log(`我是学生${this.name},我抄了试题2`);
        console.log(`答案是:${this.setAnswerTwo()}`);
    }
    copyTestQuestionThree(): void {
        console.log(`我是学生${this.name},我抄了试题3`);
        console.log(`答案是:${this.setAnswerThree()}`);
    }
    // 可以利用多态的重写，使得每个学生的答案不尽相同
    // 默认为 A,B,C
    protected setAnswerOne(): string {
        return "A";
    }
    protected setAnswerTwo(): string {
        return "B";
    }
    protected setAnswerThree(): string {
        return "C";
    }
}
