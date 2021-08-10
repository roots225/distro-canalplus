class Failure extends Error {
  message;
  constructor(message) {
    super();
    this.message = message;
  }
}

export class ServerFailure extends Failure {
  constructor(message) {
    super(message);
  }
} 