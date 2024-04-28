import { UserEntity } from './user.entity';

describe('UserEntity', () => {
  describe('Create', () => {
    it('Should create a user entity', () => {
      new UserEntity(
        'id',
        'Jets',
        'Nano',
        'jetson@nano.com',
        '+123454323423',
        'password',
        new Date(),
        new Date(),
      );
    });

    it('Should create a user without proper created/updated dates', () => {
      new UserEntity('id', 'Jets', 'Nano', 'jetson@nano.com', '+123454323423');
    });

    it('Should not create a user without a name', () => {
      expect(() => {
        new UserEntity(
          'id',
          'Jets',
          null,
          'jetson@nano.com',
          '+123454323423',
          'password',
          new Date(),
          new Date(),
        );
      }).toThrow();
    });

    it("Should create a user without id(in case it's a new one)", () => {
      new UserEntity(
        null,
        'Jets',
        'Nano',
        'jetson@nano.com',
        '+123454323423',
        'password',
        new Date(),
        new Date(),
      );
    });

    it('Should not create a user without an email', () => {
      expect(() => {
        new UserEntity(
          'id',
          'Jets',
          'Nano',
          null,
          '+123454323423',
          'password',
          new Date(),
          new Date(),
        );
      }).toThrow();
    });

    it('Should not create a user without a phone', () => {
      expect(() => {
        new UserEntity(
          'id',
          'Jets',
          'Nano',
          'jetson@nano.com',
          null,
          'password',
          new Date(),
          new Date(),
        );
      }).toThrow();
    });

    it("Should change user's first name", () => {
      const user = new UserEntity(
        'id',
        'Jets',
        'Nano',
        'jetson@nano.com',
        '+123454323423',
        'password',
        new Date(),
        new Date(),
      );

      user.firstName = 'arduino@iot.com';
    });
  });
});
