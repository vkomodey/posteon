import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RegisterUseCase } from '../user/use-cases/register/register.use-case';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { SigninDTO } from './dto/signin.dto';

@Controller('/api')
export class APIController {
  constructor(
    private registerUseCase: RegisterUseCase,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiResponse({ status: 200, description: 'Successful' })
  @ApiResponse({ status: 401, description: "User can't be created" })
  async signup(@Body() signupDTO: CreateUserDto): Promise<boolean> {
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
  signin(@Body() signinDTO: SigninDTO) {
    return this.authService.signIn(signinDTO.email, signinDTO.password);
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
