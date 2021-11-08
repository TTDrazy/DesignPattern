import ICountry from './ICountry'
/**
 * @description 关于联合国机构的接口
 */
export default interface IUnitedNationsAgency {
  declareMessage(message: string, country: ICountry): void
}
