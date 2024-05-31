import { states } from 'src/constants/states';
import { Entity } from 'src/lib/domain/entity';
import { ErrorField, IllegalEntityState } from 'src/lib/domain/errors';
import { IsPostalCode } from 'class-validator';

export class AddressEntity extends Entity {
  constructor(
    readonly state: string,
    readonly city: string,
    readonly address: string,
    readonly zipcode: string,
    id?: string,
    createdAt?: Date,
  ) {
    super(id, createdAt);

    this.validate();
  }
  validate() {
    const errors = new Array<ErrorField>();

    if (!states.includes(this.state)) {
      errors.push(new ErrorField('state', 'State is invalid'));
    }

    if (errors.length > 0) {
      throw new IllegalEntityState('Address is invalid', errors);
    }
  }
}
