/*
 * @Author: Drazy
 * @Date: 2021-10-13 17:44:42
 * @LastEditors: Drazy
 * @LastEditTime: 2021-11-01 19:55:11
 */
export default interface Iiterator {
  // 得到集合的第一个对象
  first(): object
  // 得到集合的下一个对象
  next(): object | undefined
  // 判断当前是否遍历到结尾，到结尾的话返回 true
  isDone(): boolean
  // 返回当前集合对象
  currentItem(): object
}
