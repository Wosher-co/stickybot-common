import FeedbackModel from "./feedback";
import JobModel from "./job";
import StickerModel from "./sticker";
import UserModel from "./user";

export { FeedbackModel as feedbackModel };
export { StickerModel as stickerModel };
export { UserModel as userModel };
export { JobModel as jobModel };

export default {
  Feedback: FeedbackModel,
  Sticker: StickerModel,
  User: UserModel,
  Job: JobModel,
};
