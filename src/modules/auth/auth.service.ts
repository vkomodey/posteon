import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../user/database/user.repository';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userRepo: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userRepo.findByEmail(email);
    const arePasswordsEqual = await argon2.verify(user?.password, pass);

    if (!arePasswordsEqual) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
