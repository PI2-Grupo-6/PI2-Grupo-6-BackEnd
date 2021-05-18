interface ErrorOptions {
    status?: number;
    err?: Error;
    message?: string;
    shouldRedirect?: boolean;
}

export default class PrettyError extends Error {
    status: number;
    shouldRedirect: boolean;

    constructor({ status = 500, err, message, shouldRedirect = false } : ErrorOptions) {
      const _message = message
        ? message
        : err
            ? err.message
            : 'Undefined Error';

      super(_message);
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, PrettyError);
      }
  
      this.status = status;
      this.name = 'PrettyError';
      this.shouldRedirect = shouldRedirect;
    }

}