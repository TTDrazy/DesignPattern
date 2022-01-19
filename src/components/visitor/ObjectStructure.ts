import IPerson from './interface/IPerson'
import IAction from './interface/IAction'
/*
 * @Author: Drazy
 * @Date: 2022-01-19 17:13:46
 * @LastEditors: Drazy
 * @LastEditTime: 2022-01-19 17:16:51
 */
/**
 * 对于对象的结构操作
 */
export default class ObjectStructure {
  private personList: IPerson[] = []

  addPerson(person: IPerson) {
    this.personList.push(person)
  }

  deletePerson(person: IPerson) {
    this.personList = this.personList.filter((item) => item !== person)
  }

  showList(vistor: IAction) {
    this.personList.map((item) => item.accept(vistor))
  }
}
