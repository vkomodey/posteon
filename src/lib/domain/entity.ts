export abstract class Entity {
  protected _id: string;
  protected _createdAt: Date;
  protected _updatedAt: Date;


  constructor(id: string, createdAt?: Date, updatedAt?: Date) {
    this._id = id;
    this._createdAt = createdAt || new Date();
    this._updatedAt = updatedAt || new Date();
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }
  public abstract validate(): void;

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  sameIdentityAs(that: Entity) {
    if (that.id === null || this.id === null) {
      return false;
    }
    return that.id == this.id;
  }

  equals(object?: Entity): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    return this.sameIdentityAs(object);
  }
}
