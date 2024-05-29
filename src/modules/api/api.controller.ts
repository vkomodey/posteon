import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Put,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RegisterUseCase } from '../user/use-cases/register/register.use-case';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { Public } from 'src/lib/public-route';
import { NextFunction } from 'express';

@Controller('/api')
export class APIController {
  private logger = new Logger(APIController.name);
  constructor(
    private registerUseCase: RegisterUseCase,
    private authService: AuthService,
  ) {}

  @Public()
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

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  signin(@Request() req) {
    return this.authService.signIn(req.user);
  }

  @Get('/profile')
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getProfile(): boolean {
    return true;
  }

  @Put('/profile')
  updateProfile(): boolean {
    return true;
  }
}
