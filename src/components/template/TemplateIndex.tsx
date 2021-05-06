import * as React from "react";
import FirstStudent from "./FirstStudent";
import SecondStudent from "./SecondStudent";

export interface ITemplateIndexProps {}

export default class TemplateIndex extends React.Component<ITemplateIndexProps> {
    constructor(props: ITemplateIndexProps) {
        super(props);
        const firstStudent = new FirstStudent("甲");
        firstStudent.copyTestQuestionOne();
        firstStudent.copyTestQuestionTwo();
        firstStudent.copyTestQuestionThree();
        console.log("------------------------");
        const secondStudent = new SecondStudent("乙");
        secondStudent.copyTestQuestionOne();
        secondStudent.copyTestQuestionTwo();
        secondStudent.copyTestQuestionThree();
    }
    public render() {
        return (
            <div>
                <h2>抄题目案例</h2>
            </div>
        );
    }
}
