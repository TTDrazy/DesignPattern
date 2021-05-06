import ABSStudent from "./ABSStudent";
export default class FirstStudent extends ABSStudent {
    // 重写答案
    setAnswerOne(): string {
        return "B";
    }
    setAnswerTwo(): string {
        return "A";
    }
    setAnswerThree(): string {
        return "C";
    }
}
