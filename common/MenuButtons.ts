export type WAInnerButtonFormat = {
  displayText: string;
  url?: string;
  phoneNumber?: string;
  id?: string;
  type?: number;
}

export type WAButtonFormat = {
  index?: number;
  buttonId?: string;
  type?: number;
  buttonText?: WAInnerButtonFormat;
  urlButton?: WAInnerButtonFormat;
  callButton?: WAInnerButtonFormat;
  quickReplyButton?: WAInnerButtonFormat;
}

export type CompressedButton = {
  type: number;
  displayText: string;
  data?: string;
}

export enum ButtonType {
  TextButton,
  UrlButton,
  CallButton,
  QuickReplyButton,
}

export interface IButton {
  type: ButtonType;
  displayText: string;
  payload: () => WAButtonFormat;
}

export class TextButton implements IButton {
  type: ButtonType;
  displayText: string;
  
  payload: () => WAButtonFormat;

  constructor(displayText: string) {
    this.type = ButtonType.TextButton;
    this.displayText = displayText;
    this.payload = (): WAButtonFormat => {
      return {
        buttonId: "id",
        buttonText: {
          displayText: this.displayText,
        },
        type: 1,
      }
    }
  }
}

export class UrlButton implements IButton {
  type: ButtonType;
  displayText: string;
  url: string;
  
  payload: () => WAButtonFormat;

  constructor(displayText: string, url: string) {
    this.type = ButtonType.TextButton;
    this.displayText = displayText;
    this.url = url;

    this.payload = (): WAButtonFormat => {
      return {
        index: 1,
        urlButton: {
          displayText: this.displayText,
          url: this.url,
        },
      }
    }
  }
}

export class CallButton implements IButton {
  type: ButtonType;
  displayText: string;
  phone: string;
  
  payload: () => WAButtonFormat;

  constructor(displayText: string, phone: string) {
    this.type = ButtonType.TextButton;
    this.displayText = displayText;
    this.phone = phone;

    this.payload = (): WAButtonFormat => {
      return {
        index: 1,
        callButton: {
          displayText: this.displayText,
          phoneNumber: this.phone,
        },
      }
    }
  }
}

export class QuickReplyButton implements IButton {
  type: ButtonType;
  displayText: string;
  
  payload: () => WAButtonFormat;

  constructor(displayText: string) {
    this.type = ButtonType.TextButton;
    this.displayText = displayText;

    this.payload = (): WAButtonFormat => {
      return {
        index: 1,
        quickReplyButton: {
          displayText: this.displayText,
          id: "id-like-buttons-message",
        },
      }
    }
  }
}

export type AllButtons = IButton | TextButton | UrlButton | CallButton | QuickReplyButton;

export function compressButton(button: AllButtons): CompressedButton {
  let data: string | undefined = undefined;

  switch (button.type) {
    case ButtonType.UrlButton:
      data = (button as UrlButton).url;
      break;
    case ButtonType.CallButton:
      data = (button as CallButton).phone;
      break;
  }

  return {
    type: button.type,
    displayText: button.displayText,
    data: data,
  }
}

export function uncompressButton(data: CompressedButton): IButton {
  switch (data.type) {
    case ButtonType.TextButton:
      return new TextButton(data.displayText);
    case ButtonType.UrlButton:
      return new UrlButton(data.displayText, data.data!);
    case ButtonType.CallButton:
      return new CallButton(data.displayText, data.data!);
    case ButtonType.QuickReplyButton:
      return new QuickReplyButton(data.displayText);
    default:
      return new TextButton(data.displayText);
  }
}

export function compressMenu(buttons: AllButtons[]): CompressedButton[] {
  return buttons.map(compressButton);
}