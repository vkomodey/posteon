import { Email } from 'src/lib/value-objects/email';
import { Phone } from 'src/lib/value-objects/phone';

export class UserEntity {
  private _id: string;
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
  ) {
    this._id = id;
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
}
