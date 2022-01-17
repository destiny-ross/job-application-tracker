export class CustomError extends Error {
  static type = {
    APP_NAME: "APP_NAME",
    INTERNAL: "INTERNAL",
    NETWORK: "NETWORK",
    UNKNOWN: "UNKNOWN",
  };

  constructor(options, overrides) {
    super();
    Object.assign(options, overrides);

    if (!CustomError.type.hasOwnProperty(options.type)) {
      throw new Error(`CustomError: ${options.type} is not a valid type.`);
    }

    if (!options.message) {
      throw new Error("CustomError: error message required.");
    }

    if (!options.code) {
      throw new Error("CustomError: error code required.");
    }

    this.name = "CustomError";
    this.type = options.type;
    this.code = options.code;
    this.message = options.message;
    this.errors = options.errors;
    this.meta = options.meta;
    // {
    //   analytics:  {},
    //   context: {}
    // }
    this.statusCode = options.statusCode;
  }
}
