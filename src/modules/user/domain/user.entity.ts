import { Entity } from 'src/lib/domain/entity';
import { ErrorField, IllegalEntityState } from 'src/lib/domain/errors';
import { Email } from 'src/lib/value-objects/email';
import { Phone } from 'src/lib/value-objects/phone';

export class UserEntity extends Entity {
  private _firstName: string;
  private _lastName: string;
  private _email: Email;
  private _phone: Phone;
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = new Email(email);
    this._phone = new Phone(phone);
  }

  get id() {
    return this._id;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get email(): Email {
    return this._email;
  }

  get phone(): Phone {
    return this._phone;
  }

  validate() {
    let errors: ErrorField[];

    if (!this._firstName) {
      errors.push(new ErrorField('firstName', "First Name is empty"));
    }

    if (!this._lastName) {
      errors.push(new ErrorField('lastName', 'Last Name is empty'));
    }

    if (errors.length > 0) {
      throw new IllegalEntityState("User is invalid", errors);
    }
  }
}
