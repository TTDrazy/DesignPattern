import Person from "./Person";

export default class ClonePerson {
    static clone = (person: Person): Person => {
        //应用深拷贝，返回了一个新的地址块
        let clonePerson = new Person(person.name,person.age,person.gender);
        return clonePerson;
    };
}
