import { randomUUID } from "crypto";
import { Document, model, Schema } from "mongoose";
import { LanguageLetters } from "..";

type StatsType = {
  impressions: number;
  clicks: number;
}

export type AdData = {
  lang: LanguageLetters;
  description: string;
  image?: string;
}

export interface IAd extends Document {
  enabled: boolean;
  uuid: string;
  url?: string;
  ads: AdData[];
  stats: StatsType;
  priority: number;
}

export const AdSchema = new Schema<IAd>({
  enabled: { type: Boolean, required: true, default: false },
  uuid: { type: String, required: true, default: randomUUID() },
  url: { type: String, required: false, default: null },
  ads: [{
    lang: { type: String, required: true, default: "en" },
    description: { type: String, required: true },
    image: { type: String, required: false, default: null },
  }],
  stats: {
    impressions: { type: Number, required: true, default: 0 },
    clicks: { type: Number, required: true, default: 0 }
  },
  priority: { type: Number, required: true, default: 1 },
});

const AdModel = model<IAd>("Ads", AdSchema);

export default AdModel;
