import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/database/user.repository';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userRepo: UserRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userRepo.findByEmail(email);
    if (!user) {
      return null;
    }

    const { password, ...result } = user;
    const arePasswordsEqual = await argon2.verify(password, pass);

    if (!arePasswordsEqual) {
      return null;
    }

    return result;
  }

  async signIn(user: any): Promise<{ access_token: string }> {
    const payload = { sub: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
