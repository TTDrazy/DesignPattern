import IAthlete from "./IAthlete";
export default interface ITarget {
    athlete: IAthlete;
    transAttack(): void;
    transDefense(): void;
}
