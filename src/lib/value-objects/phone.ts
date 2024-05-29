import { ErrorField, IllegalValueObjectState } from '../domain/errors';
import { ValueObject } from '../domain/value-object';

export class Phone implements ValueObject {
  constructor(private phone: string) {
    this.validate();
  }

  get value() {
    return this.phone;
  }

  validate() {
    if (!this.phone) {
      const errorField = new ErrorField('email', 'Email is empty');
      throw new IllegalValueObjectState('Invalid Email', [errorField]);
    }
  }
}
