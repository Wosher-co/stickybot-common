import { Document, model, Schema } from "mongoose";
import { JobType } from "./job";

export interface ISticker extends Document {
  chatid: string;
  timestamp: Date;
  type: JobType;
}

export const StickerSchema = new Schema<ISticker>({
  chatid: { type: String, required: true },
  timestamp: { type: Date, required: true, default: new Date() },
  type: { type: String, required: true },
});

const StickerModel = model<ISticker>("Sticker", StickerSchema);

export default StickerModel;
