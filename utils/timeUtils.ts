export default class TimeUtils {
  static getNow(seconds: number): Date {
    return new Date(Date.now() + seconds * 1000);
  }
}