import libphonenumber from "libphonenumber-js";
import { LanguageLetters } from "../core/langManager";

export default class PhoneUtils {
  static detectLanguage(phone: string): LanguageLetters {
    const phoneNumber = libphonenumber("+" + phone);
    if (phoneNumber && phoneNumber.country) {
      switch (phoneNumber.country) {
        case "MX":
        case "AR":
        case "VE":
        case "ES":
          return "es";
      }
    }
    return "en";
  }
}
