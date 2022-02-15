export default function replace(
  message: string | undefined | null,
  ...args: string[]
) {
  if (message === undefined || message === null) return "";

  if (args.length === 0) return message;

  try {
    for (let i = 0; i < args.length; i += 2) {
      message = message.replace("%" + args[i] + "%", args[i + 1]);
    }
  } catch (err) {
    return message;
  }

  return message;
}
