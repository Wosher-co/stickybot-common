import { AllButtons, CompressedButton } from "./MenuButtons";
import { WASection } from "./SectionButtons";

export enum ActionEnum {
  JOINGROUP = "JOIN-GROUP",
  LEAVEGROUP = "LEAVE-GROUP",
  USERMESSAGE = "USER-MESSAGE",
  GROUPMESSAGE = "GROUP-MESSAGE",
  SENDMESSAGE = "SEND-MESSAGE",
}

export enum MessageType {
  TEXT,
  IMAGE, 
  VIDEO,
  STICKER,
  BUTTON,
  SECTION,
  BUTTON_RESPONSE,
  SECTION_RESPONSE,
  OTHER,
}

export type AuthorDataType = {
  chatid: string;
  number: string;
};

export type MediaDataType = {
  url: string;
  mimetype: string;
  mediaKey: Buffer;
};

export type MessageDataType = {
  chatid: string;
  type: MessageType;
  author: AuthorDataType;
  content: string;
  media?: MediaDataType;
};

export type SendDataType = {
  type: MessageType;
  chatid: string;
  content?: string;
  footer?: string;
  title?: string;
}

export type SendTextDataType = SendDataType;

export type SendMediaDataType = SendDataType & {
  media?: string;
  sticker: boolean;
};

export type SendMenuDataType = SendDataType & {
  menu: CompressedButton[];
}

export type SendSectionDataType = SendDataType & {
  sections: WASection[];
  buttonText: string;
}

export type GroupDataType = {
  chatid: string;
  author: AuthorDataType;
  groupUsers: AuthorDataType[];
};

export type GlobalSendDataType = SendDataType | SendTextDataType | SendMediaDataType | SendMenuDataType | SendSectionDataType;

export type DataType = {
  action: ActionEnum;
  content:
    | MessageDataType
    | GlobalSendDataType
    | GroupDataType;
};

export type HTTPBody = {
  successful: boolean;
  data?: DataType;
  error?: string;
}

export type JobType = "STICKER" | "VIDEO" | "STICKERPRIORITY" | "VIDEOPRIORITY";

export type JobTimestampsType = {
  created?: Date;
  startProcessing: Date;
  processing?: Date;
  processingRetry?: Date;
};

