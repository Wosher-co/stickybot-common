import { Document, model, Schema } from "mongoose";
import { LanguageLetters } from "../common/LangTypes";

type Promps = {
  welcome: boolean;
  firstSticker: boolean;
  firstStickerSent: boolean;
  referral: boolean;
}

type Referral = {
  usedCode: string | null;
  userCode: string | null;
  uses: number;
}

export interface IUser extends Document {
  chatid: string;
  number: string;
  premium: Date | null;
  banned: boolean;
  lang: LanguageLetters;
  timestamp: Date;
  promps: Promps;
  referral: Referral;
  stickers: Schema.Types.ObjectId[];
  feedback: Schema.Types.ObjectId[];
}

export const UserSchema = new Schema<IUser>({
  chatid: { type: String, required: true },
  number: { type: String, required: true },
  premium: { type: Date, required: false, default: null },
  banned: { type: Boolean, required: true, default: false },
  lang: { type: String, require: true, default: "en" },
  timestamp: { type: Date, required: true, default: new Date() },
  promps: {
    welcome: { type: Boolean, required: true, default: false },
    firstSticker: { type: Boolean, required: true, default: false },
    firstStickerSent: { type: Boolean, required: true, default: false },
    referral: { type: Boolean, required: true, default: false },
  },
  referral: {
    usedCode: { type: String, required: false, default: null },
    userCode: { type: String, required: false, default: null },
    uses: { type: Number, required: true, default: 0 },
  },
  stickers: [{ type: Schema.Types.ObjectId, ref: "Sticker" }],
  feedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
});

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;
