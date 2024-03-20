import { Body, Controller, Get, Post, Put, UsePipes } from '@nestjs/common';
import { RegisterUseCase } from '../user/use-cases/register/register.use-case';
import { RequestSchemaValidator } from './request.validator';
import { CreateUserSchema, createUserSchema } from './request.schema';

@Controller('/api')
export class APIController {
  constructor(private registerUseCase: RegisterUseCase) {}
  @Post('/signup')
  @UsePipes(new RequestSchemaValidator(createUserSchema))
  async signup(@Body() signupDTO: CreateUserSchema): Promise<boolean> {
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
