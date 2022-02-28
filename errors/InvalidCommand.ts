export class InvalidCommand extends Error {
  constructor() {
      super();

      // Set the prototype explicitly.
      Object.setPrototypeOf(this, InvalidCommand.prototype);
  }
}