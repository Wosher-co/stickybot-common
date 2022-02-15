import { Document, model, Schema } from "mongoose";
import TimeUtils from "../../utils/timeUtils";
import { AuthorDataType, JobTimestampsType, JobType, MediaDataType } from "../../common/SocketTypes";

export interface IJob extends Document {
  type: JobType;
  chatid: string;
  author: AuthorDataType;
  timestamps: JobTimestampsType;
  media: MediaDataType;
  error: {
    hasError: boolean;
    errorMessage: string;
  };
  working: boolean;
  results: string | null;
  done: boolean;
  sent: boolean,
}

export const JobSchema = new Schema<IJob>({
  type: { type: String, required: true },
  chatid: { type: String, required: true },
  author: { type: Object, required: false },
  timestamps: {
    created: { type: Date, required: true, default: new Date() },
    startProcessing: { type: Date, required: true, default: TimeUtils.getNow(30) },
    processing: { type: Date, required: false, default: null },
    processingRetry: { type: Date, required: false, default: null },
  },
  media: { type: {}, required: true },
  error: {
    hasError: { type: Boolean, required: false, default: false },
    errorMessage: {
      type: String,
      required: false,
      default: "processing_error_unknown",
    },
  },
  working: { type: Boolean, required: true, default: false },
  results: { type: String, required: false, default: null },
  done: { type: Boolean, required: true, default: false },
  sent: { type: Boolean, required: true, default: false },
});

const JobModel = model<IJob>("JobQueue", JobSchema);

export default JobModel;
