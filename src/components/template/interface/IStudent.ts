export default interface IStudent {
    // 学生都有自己的名字
    name: string;
    // 学生都会抄写试题1,2,3
    copyTestQuestionOne(): void;
    copyTestQuestionTwo(): void;
    copyTestQuestionThree(): void;
}
