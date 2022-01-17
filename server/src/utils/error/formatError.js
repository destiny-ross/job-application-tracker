export function formatError(error, overrides = {}) {
  // `Error.stack`'s `enumerable` property descriptor is `false`
  // Thus, `JSON.stringify(...)` doesn't enumerate over it.
  const stackTrace = JSON.stringify(error, ["stack"], 4) || {};
  const newError = JSON.parse(JSON.stringify(error));

  // No need to send to client
  newError.statusCode = undefined;
  delete newError.meta;

  return {
    error: {
      ...newError,
      stack: stackTrace.stack,
    },
    success: false,
    ...overrides,
  };
}
