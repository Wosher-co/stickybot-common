import { Document, model, Schema } from "mongoose";
import { LanguageLetters } from "../../common/LangTypes";

export interface IUser extends Document {
  chatid: string;
  number: string;
  premium: Date | null;
  banned: boolean;
  lang: LanguageLetters;
  timestamp: Date;
  sentWelcome: boolean;
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
  sentWelcome: { type: Boolean, required: false, default: false },
  stickers: [{ type: Schema.Types.ObjectId, ref: "Sticker" }],
  feedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
});

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;
