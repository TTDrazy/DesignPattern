export interface IPayStrategy{
    calculate(singlePrice:number,amount:number):number;
}