import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { RegisterUseCase } from '../user/use-cases/register/register.use-case';

class SignupDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}
@Controller('/api')
export class APIController {
  constructor(private registerUseCase: RegisterUseCase) {}
  @Post('/signup')
  async signup(@Body() signupDTO: SignupDTO): Promise<boolean> {
    await this.registerUseCase.execute(
      signupDTO.firstName,
      signupDTO.lastName,
      signupDTO.email,
      signupDTO.phone,
      signupDTO.password,
    );
    return true;
  }

  @Post('/signin')
  signin(): boolean {
    return true;
  }

  @Get('/profile')
  getProfile(): boolean {
    return true;
  }

  @Put('/profile')
  updateProfile(): boolean {
    return true;
  }
}
