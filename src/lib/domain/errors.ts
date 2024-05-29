export class DomainError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export class ErrorField {
  constructor(
    public key: string,
    public msg: string,
  ) {}
}

export class IllegalState extends DomainError {
  constructor(
    msg: string,
    public fields: ErrorField[],
  ) {
    super(msg);
  }
}

export class IllegalEntityState extends IllegalState {
  constructor(msg: string, fields: ErrorField[]) {
    super(msg, fields);
  }
}

export class IllegalValueObjectState extends IllegalState {
  constructor(msg: string, fields: ErrorField[]) {
    super(msg, fields);
  }
}
