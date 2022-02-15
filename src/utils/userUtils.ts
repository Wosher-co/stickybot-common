import { IUser } from "../models/user";

export default class UserUtils {
  static isUserPremium(userData: IUser): boolean {
    return this.isPremium(userData.premium);
  }

  static isPremium(premiumStatus: Date | null): boolean {
    if (premiumStatus === undefined || premiumStatus === null) return false;

    return premiumStatus >= new Date();
  }
}
