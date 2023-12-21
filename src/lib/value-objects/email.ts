import { ErrorField, IllegalValueObjectState } from "../domain/errors";
import { ValueObject } from "../domain/value-object";

export class Email implements ValueObject {
  constructor(private email: string) {
    this.validate();
  }

  get value() {
    return this.email;
  }

  validate() {
    if(!this.email) {
      const errorField = new ErrorField('email', 'Email is empty');
      throw new IllegalValueObjectState('Invalid Email', [errorField]);
    }
  }
}
