import { Document, model, Schema } from "mongoose";

export interface IFeedback extends Document {
  comment: string;
  timestamp: Date;
}

export const FeedbackSchema = new Schema<IFeedback>({
  comment: { type: String, required: true },
  timestamp: { type: Date, required: true, default: new Date() },
});

const FeedbackModel = model<IFeedback>("Feedback", FeedbackSchema);

export default FeedbackModel;
